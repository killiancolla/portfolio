import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

setInterval(() => {
    const now = Date.now();
    for (const [ip, data] of rateLimitStore.entries()) {
        if (now > data.resetTime) {
            rateLimitStore.delete(ip);
        }
    }
}, 3600000);

function sanitizeInput(input: string): string {
    if (!input) return '';
    return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
}

// Validation email
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
}

// Rate limiting
function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const limit = rateLimitStore.get(ip);

    if (!limit || now > limit.resetTime) {
        rateLimitStore.set(ip, {
            count: 1,
            resetTime: now + 3600000, 
        });
        return true;
    }

    if (limit.count >= 3) {
        return false;
    }

    limit.count++;
    return true;
}

export async function POST(req: Request) {
    try {
        const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ||
                   req.headers.get('x-real-ip') ||
                   'unknown';

        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { message: 'Trop de tentatives. Veuillez réessayer dans 1 heure.' },
                { status: 429 }
            );
        }

        const { subject, email, message, name, honeypot, turnstileToken } = await req.json();

        if (honeypot) {
            return NextResponse.json({ message: 'Email sent successfully' });
        }

        if (process.env.TURNSTILE_SECRET_KEY) {
            const turnstileResponse = await fetch(
                'https://challenges.cloudflare.com/turnstile/v0/siteverify',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        secret: process.env.TURNSTILE_SECRET_KEY,
                        response: turnstileToken,
                    }),
                }
            );

            const turnstileResult = await turnstileResponse.json();
            console.log('[Turnstile] token reçu:', turnstileToken, '| résultat:', turnstileResult);
            if (!turnstileResult.success) {
                return NextResponse.json(
                    { message: 'Vérification de sécurité échouée. Veuillez réessayer.' },
                    { status: 403 }
                );
            }
        }

        if (!subject || !email || !message || !name) {
            return NextResponse.json(
                { message: 'Tous les champs sont requis.' },
                { status: 400 }
            );
        }

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { message: 'Email invalide.' },
                { status: 400 }
            );
        }

        if (subject.length > 200 || message.length > 5000 || name.length > 100) {
            return NextResponse.json(
                { message: 'Les champs dépassent la longueur maximale autorisée.' },
                { status: 400 }
            );
        }

        const sanitizedSubject = sanitizeInput(subject);
        const sanitizedEmail = sanitizeInput(email);
        const sanitizedMessage = sanitizeInput(message);
        const sanitizedName = sanitizeInput(name);

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
            to: process.env.EMAIL_USER, 
            subject: `[Contact] : ${sanitizedSubject}`,
            html: `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nouvelle Réponse du Formulaire de Contact</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #333333;
      font-size: 24px;
      margin-bottom: 20px;
    }
    .info {
      font-size: 16px;
      color: #555555;
      margin-bottom: 10px;
    }
    .message {
      font-size: 16px;
      color: #333333;
      margin-top: 20px;
      padding: 15px;
      background-color: #f1f1f1;
      border-radius: 5px;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .footer {
      font-size: 12px;
      color: #888888;
      text-align: center;
      margin-top: 30px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Nouvelle Réponse au Formulaire de Contact</h1>

    <div class="info">
      <strong>Nom :</strong> ${sanitizedName}<br>
      <strong>Sujet :</strong> ${sanitizedSubject} <br>
      <strong>Date et Heure :</strong> ${new Date().toLocaleString()} <br>
      <strong>Email du Demandeur :</strong> ${sanitizedEmail} <br>
      <strong>IP :</strong> ${ip} <br>
    </div>

    <div class="message">
      <strong>Message :</strong> <br>
      ${sanitizedMessage}
    </div>

    <div class="footer">
      <p>Ce message a été généré automatiquement. Merci de ne pas répondre à cet email.</p>
    </div>
  </div>
</body>
</html>`,
        });

        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
            { message: 'Failed to send email' },
            { status: 500 }
        );
    }
}
