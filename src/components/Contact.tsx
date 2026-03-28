import { Label } from "./ui/label";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import WordRotate from "./ui/word-rotate";
import { useState, useEffect, useRef } from "react";
import { useTranslations } from 'next-intl';
import { BorderBeam } from "./../components/ui/border-beam";

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
      }) => void;
      reset: () => void;
    };
  }
}

export default function About() {

  const t = useTranslations('Contact')
  const wordsArray = t('words').split(',').map(word => word.trim());

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [back, setBack] = useState("")
  const [honeypot, setHoneypot] = useState("") 
  const [turnstileToken, setTurnstileToken] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const turnstileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!siteKey) return;

    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: siteKey,
          callback: (token: string) => {
            setTurnstileToken(token);
          },
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  async function sendEmail() {
    if (isLoading) return;

    if (!email || !name || !subject || !message) {
      setBack("Tous les champs sont requis.")
      return;
    }

    if (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken) {
      setBack("Veuillez compléter la vérification de sécurité.")
      return;
    }

    setIsLoading(true);
    setBack("");

    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          subject,
          message,
          honeypot, 
          turnstileToken, 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setBack("Merci pour votre message ! Nous vous ferons un retour d'ici 48 heures.")
        setEmail("")
        setName("")
        setSubject("")
        setMessage("")
        setTurnstileToken("")
        if (window.turnstile) {
          window.turnstile.reset();
        }
      } else if (response.status === 429) {
        setBack(data.message || "Trop de tentatives. Veuillez réessayer plus tard.")
      } else {
        setBack(data.message || "Une erreur s'est produite lors de l'envoi, merci de réessayer plus tard.")
      }
    } catch (error) {
      setBack("Une erreur s'est produite lors de l'envoi, merci de réessayer plus tard.")
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div id='contact' className="part flex flex-col items-center text-center pt-20 w-full mb-20">
      <div className='mb-4'>
        <p className="before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">{t('contact')}</p>
      </div>
      <div className="flex justify-center items-center max-sm:flex-col mb-4">
        <p className="mr-2 text-xl">{t('prompt')}</p>
        <WordRotate
          className="text-xl font-bold text-primary dark:text-primary"
          words={wordsArray}
        />
      </div>
      <Card className="w-4/5 max-sm:w-11/12 relative">
        <CardContent className='flex p-4'>
          <div className='w-full flex flex-wrap gap-4'>
            <div className='flex gap-2 w-full'>
              <div className='w-1/2 space-y-2'>
                <Label htmlFor="email">{t('email')}</Label>
                <Input
                  id='email'
                  type="email"
                  placeholder={t('email')}
                  className='w-full'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
              <div className='w-1/2 space-y-2'>
                <Label htmlFor="name">{t('name')}</Label>
                <Input
                  id='name'
                  type="text"
                  placeholder={t('name')}
                  className='w-full'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

            <Input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="absolute -left-[9999px]"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className='w-full space-y-2'>
              <Label htmlFor="subject">{t('subject')}</Label>
              <Input
                id='subject'
                type="text"
                placeholder={t('subject')}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>
            <div className='w-full space-y-2'>
              <Label htmlFor='message'>{t('message')}</Label>
              <Textarea
                id='message'
                placeholder={t('message_placeholder')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
              <div className='w-full flex justify-center'>
                <div ref={turnstileRef}></div>
              </div>
            )}

            <div className='w-full space-y-2'>
              <Button
                onClick={sendEmail}
                disabled={isLoading}
              >
                {isLoading ? t('sending') || 'Envoi en cours...' : t('send')}
              </Button>
            </div>
            <p className={`text-center w-full ${back.includes("erreur") || back.includes("Trop") ? "text-red-500" : back ? "text-green-500" : ""}`}>{back}</p>
          </div>
        </CardContent>
        <BorderBeam size={250} duration={12} delay={9} colorFrom="orange" colorTo="#ffffff" />
      </Card>
    </div>

  )
}