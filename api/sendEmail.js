import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { name, email, phone, message } = req.body;

  try {
    // Configure transporter (use Gmail, SendGrid, or SMTP)
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL, // Your admin email
        pass: process.env.ADMIN_PASS,  // App password or SMTP pass
      },
    });

    // Mail options
    await transporter.sendMail({
      from: `"Website Form" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL, // Admin will receive form details
      subject: "New Form Submission",
      html: `
        <h3>New Submission Received</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return res.status(200).json({ success: true, message: "Mail sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
