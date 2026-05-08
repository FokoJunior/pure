import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, company, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // 1. Email to the company (Pure Work Spaces)
    const mailOptionsToCompany = {
      from: `"PWS Webmaster" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Enquiry from ${name}`,
      text: `Name: ${name}\nCompany: ${company || 'N/A'}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 0; background-color: #f9fafb;">
          <div style="background-color: #283524; padding: 20px; text-align: left;">
            <h2 style="color: #f4efe6; margin: 0; font-size: 18px; letter-spacing: 1px;">NEW WEBSITE ENQUIRY</h2>
          </div>
          <div style="padding: 30px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 12px; width: 120px;">CONTACT NAME</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 12px;">COMPANY</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 12px;">WORK EMAIL</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #2563eb;">${email}</td>
              </tr>
            </table>
            
            <div style="margin-top: 30px;">
              <h3 style="color: #6b7280; font-size: 12px; margin-bottom: 10px; text-transform: uppercase;">Requirement Brief</h3>
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 4px; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>
            
            <div style="margin-top: 30px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background-color: #283524; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 14px;">Reply Directly</a>
            </div>
          </div>
          <div style="padding: 20px; text-align: center; color: #9ca3af; font-size: 11px;">
            This email was sent from the contact form on pureworkspaces.uk
          </div>
        </div>
      `,
    }

    // 2. Acknowledgment email to the sender
    const mailOptionsToSender = {
      from: `"Pure Work Spaces" <${process.env.CONTACT_EMAIL}>`,
      to: email,
      subject: `We've received your message | Pure Work Spaces`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #2C2C2C; line-height: 1.6; background-color: #ffffff; border: 1px solid #e5e7eb;">
          <div style="background-color: #283524; padding: 50px 20px; text-align: center;">
             <img src="https://pureworkspaces.uk/PWS-Logo/PWS-Webp-Files/PWS%20wordmark%20-%20off%20white.webp" alt="Pure Work Spaces" style="height: 40px; width: auto;" />
          </div>
          <div style="padding: 40px 30px;">
            <p style="font-size: 16px; margin-bottom: 24px;">Hello ${name},</p>
            <p style="font-size: 16px; margin-bottom: 24px; color: #4B5563;">Thank you for getting in touch with <strong>Pure Work Spaces</strong>.</p>
            <p style="font-size: 16px; margin-bottom: 24px; color: #4B5563;">We've received your enquiry regarding your workspace requirements. Our management team is currently reviewing the details you provided, and we will get back to you shortly to schedule a site assessment or discuss your needs further.</p>
            <p style="font-size: 16px; margin-bottom: 32px; color: #4B5563;">In the meantime, if you have any urgent questions, feel free to reply directly to this email.</p>
            
            <div style="background-color: #f4efe6; padding: 25px; border-radius: 4px; margin-bottom: 32px;">
              <h3 style="margin: 0 0 10px 0; font-size: 14px; color: #283524; text-transform: uppercase; letter-spacing: 1px;">Pure Spaces, Peace of Mind</h3>
              <p style="margin: 0; font-size: 14px; color: #283524; opacity: 0.8;">Professional Workspaces. Pure Reliability.</p>
            </div>

            <div style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 25px;">
               <p style="margin: 0; font-weight: bold; color: #283524;">Pure Work Spaces Team</p>
               <p style="margin: 5px 0 0 0; font-size: 14px; color: #9CA3AF;">Oxfordshire & Swindon | hello@pureworkspaces.uk</p>
            </div>
          </div>
          <div style="background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #9CA3AF;">
            © 2026 Pure Work Spaces Ltd. All rights reserved.
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptionsToCompany),
      transporter.sendMail(mailOptionsToSender),
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email Error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
