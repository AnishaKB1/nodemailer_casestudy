const express = require('express')

const nodemailer = require('nodemailer');
const app = express()
require('dotenv').config();

// Create a transporter using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service provider here
    auth: {
      user: process.env.user, // Your email address
      pass: process.env.pass// Your email password or App Password
    }
  });
  
  // Email details
  const mailOptions = {
    from: 'anishakb4@gmail.com',
    to: 'anishakk.b@gmail.com',
    subject: 'Hello, This is a Nodemailer Project!',
    text: 'This is a test email sent with Nodemailer.',
  };
  
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email: ' + error);
    } else {
      console.log('Email sent Successfully');
    }
  });


const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})