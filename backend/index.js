
require("dotenv").config();
const express = require("express");
const crypto = require("crypto");
const fetch = require("node-fetch");
const cors = require("cors");
const supabase = require("./supabaseClient");
const sendEmail = require("./sendEmail");

const app = express();
app.use(cors());
app.use((req, res, next) => {
  if (req.originalUrl === "/api/yoco/webhook") {
    express.raw({ type: "application/json" })(req, res, next);
  } else {
    express.json()(req, res, next);
  }
});

app.post("/api/yoco/webhook", async (req, res) => {
  const signature = req.headers["x-yoco-signature"];
  const secret = process.env.YOCO_WEBHOOK_SECRET;
  const expectedSignature = crypto.createHmac("sha256", secret).update(req.body).digest("hex");

  if (signature !== expectedSignature) {
    return res.status(403).send("Invalid signature");
  }

  const event = JSON.parse(req.body);

  if (event.type === "event.charge.successful" && event.data.amount === 200) {
    const email = event.data.metadata?.email;
    if (!email) return res.status(400).send("Missing email metadata");

    const { data: licenseKeys, error } = await supabase.from("license_key").select("*").eq("used", false).limit(1);
    if (error || !licenseKeys || licenseKeys.length === 0) {
      return res.status(500).send("No available license keys");
    }

    const licenseKey = licenseKeys[0];
    await sendEmail(email, licenseKey.key);
    await supabase.from("license_key").update({ used: true }).eq("id", licenseKey.id);

    return res.status(200).send("License key sent");
  }

  res.status(200).send("Webhook received");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
