const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

module.exports = async function sendEmail(to, key, remaining = null) {
  const isAdminAlert = remaining !== null;
  const subject = isAdminAlert
    ? 'Low License Key Warning'
    : 'Your License Key for the Mobile Robot';

  const html = isAdminAlert
    ? `<p>Only <strong>${remaining}</strong> license keys left in the system.</p>`
    : `<p>Dear User,</p>
       <p>Here is your license key: <strong>${key}</strong></p>
       <p>Please follow the steps in the video linked below to activate your mobile trading robot:</p>
       <p><a href="https://example.com/install-video">Watch How to Install Your Robot</a></p>
       <p>If you have any issues, feel free to contact us.</p>
       <p>Best regards,<br/>M Traders Support Team</p>`;

  const info = await transporter.sendMail({
    from: `"M Traders" <${process.env.GMAIL_USER}>`,
    to,
    subject,
    html
  });

  return `Email sent to ${to}`;
};
