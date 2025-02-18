import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { to, subject, text, html } = await req.json();

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
            text,
            html,
        });

        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Failed to send email', error }, { status: 500 });
    }
}
