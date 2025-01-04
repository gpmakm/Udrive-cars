// //import {sendEmail} from '../email';
// import nodemailer from 'nodemailer'
// //import sendEmail from '/email'
// export async function POST(request) {
//     try {
//       const data = await request.json();
//       const email=await request.body;
//       console.log("data is "+data.info.email);
//       //console.log("body data is "+email);
  
      // return new Response(JSON.stringify({ message: "Form submitted successfully!" }), {
      //   status: 200,
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*", // Allow all origins
      //     "Access-Control-Allow-Methods": "POST", // Allow POST requests
      //   },
      // });

// // email.js
// //import nodemailer from 'nodemailer';

// // Create a transporter object using SMTP
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // Use Gmail or any other service
//   auth: {
//     user: 'esikshatutorialsakarsh@gmail.com', // Your email address
//     pass: 'Mr.AkarshYT', // Your email password or app-specific password
//   },
// });

// // Function to send an email
//  const sendEmail = async (to, subject, text) => {
//   try {
//     const mailOptions = {
//       from: data.info.email, // Sender address
//       to:"esikshatutorialsakarsh@gmail.com", // Recipient address
//       subject:"Vehicle booking", // Email subject
//       text:"I just wanted to book a car details are following", // Email body (plain text)
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent:', info.response);
//     return info;
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw error;
//   }
// };


//       const emailSubject = 'Form Submission Confirmation';
//     const emailText = `
//       Hello ${username},
//       Thank you for submitting the form. Here are your details:
//       - Email: ${email}
//       - Phone: ${phoneNum}
//       - Aadhar Number: ${aadharNum}
//       - Vehicle: ${vehicle}
//       - Days: ${days}
//       - Address: ${address}
//     `;

//     await sendEmail(email, emailSubject, emailText);

//     } catch (error) {
//       console.error("Error processing request:", error);
//     }
// }

import nodemailer from 'nodemailer';

import 'dotenv/config'; // Load environment variables
require('dotenv').config();

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use Gmail or any other service
  auth: {
    user: "esikshatutorialsakarsh@gmail.com", // Your email address
    pass: "Mr.AkarshYT", // Your email password or app-specific password
  },
});

export async function POST(request) {
  try {
    console.log("USER_MAIL:",process.env.EMAIL_USER);
    
    const data = await request.json();
    console.log('Received form data:', data);
    const { username, email, phoneNum, aadharNum, vehicle, days, address } = data.info;
    console.log(email);
    

    // Email content
   // const emailId=request.body.info.email;
    const emailSubject = 'Form Submission Confirmation';
    const emailText = `
      Hello ${username},
      Thank you for submitting the form. Here are your details:
      - Email: ${email}
      - Phone: ${phoneNum}
      - Aadhar Number: ${aadharNum}
      - Vehicle: ${vehicle}
      - Days: ${days}
      - Address: ${address}
    `;

    // Send email
    const mailOptions = {
      from: "esikshatutorialsakarsh@gmail.com", // Sender address
      to: email, // Recipient address
      subject: emailSubject, // Email subject
      text: emailText, // Email body (plain text)
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    return new Response(JSON.stringify({ message: "Form submitted successfully! Email sent." }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:"+ error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
    return new Response(JSON.stringify({ message: "Form submitted successfully!" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Allow all origins
        "Access-Control-Allow-Methods": "POST", // Allow POST requests
      },
    });

    // Extract form data

}