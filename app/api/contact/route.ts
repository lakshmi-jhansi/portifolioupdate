import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, subject, message } = body;

        // Validate inputs
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required.' },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address.' },
                { status: 400 }
            );
        }

        // Save to MongoDB
        const client = await clientPromise;
        const db = client.db('portfolio');
        await db.collection('contact_messages').insertOne({
            name,
            email,
            subject,
            message,
            createdAt: new Date(),
        });

        // Send email via Nodemailer
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: `Portfolio Contact: ${subject}`,
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0A0A0F; color: #fff; border-radius: 12px; border: 1px solid #7C3AED;">
            <h2 style="color: #C084FC; margin-bottom: 20px;">New Portfolio Contact Message</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #9CA3AF; width: 80px;">Name:</td><td style="padding: 8px 0; color: #fff; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #9CA3AF;">Email:</td><td style="padding: 8px 0; color: #C084FC;">${email}</td></tr>
              <tr><td style="padding: 8px 0; color: #9CA3AF;">Subject:</td><td style="padding: 8px 0; color: #fff;">${subject}</td></tr>
            </table>
            <div style="margin-top: 20px; padding: 16px; background: rgba(124, 58, 237, 0.1); border-radius: 8px; border: 1px solid rgba(124, 58, 237, 0.3);">
              <p style="color: #9CA3AF; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <p style="color: #fff; margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            <p style="margin-top: 20px; color: #6B7280; font-size: 12px;">Sent from your portfolio website contact form.</p>
          </div>
        `,
            });
        }

        return NextResponse.json({ success: true, message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json({ error: 'Internal server error. Please try again later.' }, { status: 500 });
    }
}
