import nodemailer from "nodemailer";

const sendEmail = async (to, subject, text) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "balachellarao25@gmail.com", // Your email
        pass: "xbjrtawaxmecyone", // Use an App Password for security
      },
    });

    let mailOptions = {
      from: "balachellarao25@gmail.com",
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
