require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const crypto = require("crypto");
const sendEmail = require("./sendEmail");
const supabase = require("./supabaseClient");

const app = express();

// ✅ Middleware: use raw body only for webhook, JSON for others
app.use((req, res, next) => {
  if (req.originalUrl === "/api/yoco/webhook") {
    express.raw({ type: "application/json" })(req, res, next);
  } else {
    express.json()(req, res, next);
  }
});

// Charge card manually (optional route)
app.post("/charge-card", async (req, res) => {
  const { token, email } = req.body;

  if (!token || !email) {
    return res.status(400).json({ message: "Token and email are required" });
  }

  const response = await fetch("https://online.yoco.com/v1/charges/", {
    method: "POST",
    headers: {
      "X-Auth-Secret-Key": process.env.YOCO_SECRET_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
      amountInCents: 9900,
      currency: "ZAR",
      email: "to",
    }),
  });

  const payment = await response.json();

  if (payment.status === "successful") {
    const { data: licenseKeys, error } = await supabase
      .from("license_key")
      .select("*")
      .eq("used", false)
      .limit(1);

    if (error || !licenseKeys.length) {
      return res.status(500).json({ message: "No available license keys" });
    }

    const licenseKey = licenseKeys[0];

    await sendEmail(email, licenseKey.key);
    await supabase.from("license_key").update({ used: true }).eq("id", licenseKey.id);

    return res.json({ message: "Payment successful. License key sent!" });
  } else {
    return res.status(400).json({ message: "Payment failed" });
  }
});

// ✅ Webhook (NO duplicate express.raw inside)
app.post("/api/yoco/webhook", async (req, res) => {
  const signature = req.headers["x-yoco-signature"];
  const secret = process.env.YOCO_WEBHOOK_SECRET;

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(req.body)
    .digest("hex");

  if (signature !== expectedSignature) {
    console.log("❌ Invalid signature");
    return res.status(400).send("Invalid signature");
  }

  const event = JSON.parse(req.body);

  if (event.type === "payment.successful") {
    const { amount, metadata } = event.data;
    const email = metadata?.email;

    if (amount === 9900 && email) {
      const { data: licenseKeys, error } = await supabase
        .from("license_key")
        .select("*")
        .eq("used", false)
        .limit(1);

      if (error || !licenseKeys.length) {
        return res.status(500).send("No available license keys");
      }

      const licenseKey = licenseKeys[0];
      await sendEmail(email, licenseKey.key);
      await supabase.from("license_key").update({ used: true }).eq("id", licenseKey.id);

      return res.status(200).send("License key sent via webhook");
    }
  }

  res.status(200).send("Webhook received");
});

// Send license manually
app.post("/send-email", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const { data, error } = await supabase
    .from("license_key")
    .select("*")
    .eq("used", false)
    .limit(1);

  if (error || !data.length) {
    return res.status(500).send("No available license keys");
  }

  const licenseKey = data[0];
  const msg = await sendEmail(email, licenseKey.key);

  await supabase.from("license_key").update({ used: true }).eq("id", licenseKey.id);

  const { data: remainingKeys } = await supabase
    .from("license_key")
    .select("id")
    .eq("used", false);

  if (remainingKeys.length <= 2) {
    await sendEmail(process.env.ADMIN_EMAIL, null, remainingKeys.length);
  }

  res.send(msg);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
