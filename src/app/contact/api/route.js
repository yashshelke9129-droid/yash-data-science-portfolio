import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "yashshelke9129@gmail.com",
        // Note: Use your 16-character App Password here
        pass: "YOUR_GMAIL_APP_PASSWORD", 
      },
    });

    const mailOptions = {
      from: email,
      to: "yashshelke9129@gmail.com",
      subject: `[Matrix Payload] - ${subject}`,
      html: `
        <div style="font-family: monospace; padding: 20px; background-color: #020617; color: #f8fafc;">
          <h2 style="color: #22d3ee;">// Inbound Matrix Payload</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success" }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}