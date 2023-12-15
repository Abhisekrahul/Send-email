const nodemailer = require("nodemailer");

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: "gmail", // e.g., "Gmail" or use your own SMTP settings
  auth: {
    user: "tararay52@gmail.com", // Your email address
    pass: "Abhisekray@799", // Your email password or app-specific password
  },
});

// Email content
const mailOptions = {
  from: "tararay52@gmail.com", // Sender's email address
  to: "abhisekrahul94854@gmail.com", // Receiver's email address
  subject: "Hello from Node.js", // Subject line
  text: "This is a test email sent from Node.js.", // Plain text body
  // html: "<p>This is a test email sent from <b>Node.js</b>.</p>", // HTML body (optional)
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email: ", error);
  } else {
    console.log("Email sent: " + info.response);
  }
});