
const crypto = require('crypto');

const secret = 'whsec_ODJ...';
const body = JSON.stringify({
  eventType: "payment.success",
  data: {
     amountInCents: 9900,
      currency: "ZAR",
    email: "to", 
  }
});

// STEP 3: Generate HMAC SHA256 signature
const signature = crypto
  .createHmac('sha256', secret)
  .update(body)
  .digest('hex');

console.log('Generated x-yoco-signature:', signature);
