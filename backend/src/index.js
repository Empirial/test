require("dotenv").config();
const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
//const supabase = require("./supabaseClient");
const sendEmail = require("./sendEmail");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/paypal/webhook", async (req, res) => {
  const transmissionId = req.headers["paypal-transmission-id"];
  const transmissionTime = req.headers["paypal-transmission-time"];
  const certUrl = req.headers["paypal-cert-url"];
  const authAlgo = req.headers["paypal-auth-algo"];
  const transmissionSig = req.headers["paypal-transmission-sig"];
  const webhookEventBody = JSON.stringify(req.body);
  const webhookId = process.env.PAYPAL_WEBHOOK_ID;

  // Validate PayPal webhook signature
 // const isValid = await verifyWebhookSignature({
  //  transmissionId,
   // transmissionTime,
    //certUrl,
    //authAlgo,
    //transmissionSig,
    //webhookEventBody,
    //webhookId
  //});

  //if (!isValid) {
   // return res.status(403).send("Invalid PayPal webhook signature");
  //}

  const event = req.body;

  // Handle payment success
  if (event.event_type === "PAYMENT.SALE.COMPLETED") {
    const amount = parseFloat(event.resource.amount.value);
    const currency = event.resource.amount.currency_code;
    const email = event.resource.custom_id || event.resource.invoice_id; // Email passed via metadata

    if (amount === 2.00 && currency === "USD" && email) {
      const { createClient } = require('@supabase/supabase-js');

      const SUPABASE_URL = "https://fkuegctjylijbjnzmawl.supabase.co";
      const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrdWVnY3RqeWxpamJqbnptYXdsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODE5OTQzNiwiZXhwIjoyMDYzNzc1NDM2fQ.no2Ddi9kgH6gMZv6FMSuBD6su3IKyOPqaFmbbP-Z1o4";
      const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

      module.exports = supabase;
      const { data: licenseKeys, error } = await supabase
        .from("license_key")
        .select("*")
        .eq("used", false)
        .limit(1);

      if (error || !licenseKeys || licenseKeys.length === 0) {
        return res.status(500).send("No available license keys");
      }

      const licenseKey = licenseKeys[0];
      await sendEmail(email, licenseKey.key);
      await supabase.from("license_key").update({ used: true }).eq("id", licenseKey.id);

      return res.status(200).send("License key sent");
    }
  }

  res.status(200).send("Webhook received");
});

// Signature validation using PayPal API
async function verifyWebhookSignature({
  transmissionId,
  transmissionTime,
  certUrl,
  authAlgo,
  transmissionSig,
  webhookEventBody,
  webhookId
}) {
  const fetch = require("node-fetch");

  const response = await fetch("https://api-m.paypal.com/v1/notifications/verify-webhook-signature", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Basic ${Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString("base64")}`
    },
    body: JSON.stringify({
      auth_algo: authAlgo,
      cert_url: certUrl,
      transmission_id: transmissionId,
      transmission_sig: transmissionSig,
      transmission_time: transmissionTime,
      webhook_id: webhookId,
      webhook_event: JSON.parse(webhookEventBody)
    })
  });

  const result = await response.json();
  return result.verification_status === "SUCCESS";
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
