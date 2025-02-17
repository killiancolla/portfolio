"use client";

import { useTranslations } from 'next-intl';
import WordRotate from '@/components/ui/word-rotate';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { BorderBeam } from '@/components/ui/border-beam';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MailCheck, MailCheckIcon, MailIcon, Twitter, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import path from 'path';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Contact() {

  const t = useTranslations('Contact')
  const wordsArray = t('words').split(',').map(word => word.trim());

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [back, setBack] = useState("")

  const pathName = usePathname();

  async function sendEmail() {
    const response = await fetch('/api/send-mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: 'contact@killian-colla.com',
        subject: "[Contact] : " + subject,
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
          <strong>Sujet :</strong> ${subject} <br>
          <strong>Date et Heure :</strong> ${new Date().toLocaleString()} <br>
          <strong>Email du Demandeur :</strong> ${email} <br>
        </div>
    
        <div class="message">
          <strong>Message :</strong> <br>
          ${message}
        </div>
    
        <div class="footer">
          <p>Ce message a été généré automatiquement. Merci de ne pas répondre à cet email.</p>
        </div>
      </div>
    </body>
    </html>`
      }),
    });

    if (response.ok) {
      setBack("Merci pour votre message ! Nous vous ferons un retour d'ici 48 heures.")
    } else {
      setBack("Une erreur s'est produite lors de l'envoi, merci de réessayer plus tard.")
    }
  }

  return (
    <div className="flex flex-col items-center  text-center pt-20 max-w-5xl w-11/12 sm:h-screen gap-4 mx-auto">
      <div className="flex justify-center items-center max-sm:flex-col">
        <p className="mr-2 text-xl">{t('prompt')}</p>
        <WordRotate
          className="text-xl font-bold text-primary dark:text-primary"
          words={wordsArray}
        />
      </div>
      <Card className="w-full max-sm:w-11/12 relative overflow-hidden">
        <CardContent className='overflow-hidden relative p-0'>
          <div className='p-6 flex gap-20 w-full h-full max-sm:flex-col'>
            <div className='max-sm:w-full w-1/2 text-left flex flex-col justify-center gap-10'>
              <div className='flex gap-4 flex-col'>
                <h2 className='font-bold text-3xl'>{t('discuss')}</h2>
                <p className='text-neutral-500 font-normal text-base'>{t('text')}</p>
              </div>
              <div className='flex gap-4 flex-col'>
                <h2 className='font-bold text-xl'>{t('link')}</h2>
                <div className='flex items-start gap-2 h-12'>
                  <Link
                    href={"https://wa.me/33695041166"}
                    className="h-full w-fit aspect-square object-contain hover:-translate-y-2 hover:rotate-12 hover:transition-all transition-all"
                    target='_blank'
                  >
                    <Image alt='Whatsapp logo' src={"/whatsapp.webp"} height={100} width={100} />
                  </Link>
                  <Link
                    className="h-full w-fit aspect-square object-contain hover:-translate-y-2 hover:rotate-12 hover:transition-all transition-all"
                    href={"https://x.com/_killiandev"}
                    target='_blank'
                  >
                    <Image alt='X logo' src={"/x.webp"} height={100} width={100} />
                  </Link>
                  <Link
                    className="h-full w-fit aspect-square object-contain hover:-translate-y-2 hover:rotate-12 hover:transition-all transition-all"
                    href={"https://www.linkedin.com/in/killian-colla-46b48b207/"}
                    target='_blank'
                  >
                    <Image alt='LinkedIn logo' src={"/linkedin.webp"} height={100} width={100} />
                  </Link>
                  <Link
                    className="h-full w-fit aspect-square object-contain hover:-translate-y-2 hover:rotate-12 hover:transition-all transition-all"
                    href={"https://github.com/killiancolla"}
                    target='_blank'
                  >
                    <Image alt='GitHub logo' src={"/github.png"} height={100} width={100} />
                  </Link>
                </div>
                <Link href={pathName.replace('/contact', '')}>
                  <Button className='w-fit text-left p-0' variant={'link'}>{t('portfolio')}</Button>
                </Link>
              </div>
            </div>
            <div className='max-sm:w-full w-1/2 flex flex-col my-auto gap-5'>
              <p className='font-bold text-xl text-left'>Formulaire de contact</p>
              <div className='w-full'>
                <Input id='email' type="email" placeholder={t('email')} className='w-full' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='w-full'>
                <Input id='name' type="text" placeholder={t('name')} className='w-full' value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='w-full'>
                <Input id='subject' type="text" placeholder={t('subject')} value={subject} onChange={(e) => setSubject(e.target.value)} />
              </div>
              <div className='w-full'>
                <Textarea id='message' placeholder={t('message_placeholder')} value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              <div className='w-full'>
                <Button className='w-full' onClick={sendEmail}>{t('send')}</Button>
              </div>
            </div>
          </div>
        </CardContent>
        <BorderBeam size={250} duration={12} delay={9} colorFrom="orange" colorTo="#ffffff" />
      </Card>
    </div>
  )
}