"use client";

import { useTranslations } from 'next-intl';
import WordRotate from '@/components/ui/word-rotate';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormEvent, useState } from 'react';
import { BorderBeam } from '@/components/ui/border-beam';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Turnstile } from '@marsidev/react-turnstile';
import { ArrowUpRight, Clock, Github, Linkedin, MessageCircle, Twitter } from 'lucide-react';

export default function ContactClient() {

  const t = useTranslations('Contact')
  const wordsArray = t('words').split(',').map(word => word.trim());

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [back, setBack] = useState("")
  const [loading, setLoading] = useState(false)
  const [honeypot, setHoneypot] = useState("")
  const [turnstileToken, setTurnstileToken] = useState("")

  const pathName = usePathname();

  const socialLinks = [
    { href: "https://wa.me/33695041166", icon: <MessageCircle className="w-4 h-4" />, label: "WhatsApp", color: "text-green-400" },
    { href: "https://x.com/_killiandev", icon: <Twitter className="w-4 h-4" />, label: "X / Twitter", color: "" },
    { href: "https://www.linkedin.com/in/killian-colla-46b48b207/", icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", color: "text-blue-400" },
    { href: "https://github.com/killiancolla", icon: <Github className="w-4 h-4" />, label: "GitHub", color: "" },
  ];

  async function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!turnstileToken) {
      setBack(t("contact_captcha"))
      return;
    }

    setLoading(true)

    const response = await fetch('/api/send-mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, subject, message, honeypot, turnstileToken }),
    });

    setLoading(false)

    if (response.ok) {
      setBack(t("contact_success"))
      setEmail(""); setName(""); setSubject(""); setMessage(""); setTurnstileToken("")
    } else if (response.status === 429) {
      setBack(t("contact_rate_limit"))
    } else {
      setBack(t("contact_error"))
    }
  }

  return (
    <div className="flex flex-col items-center text-center pt-20 max-w-5xl w-11/12 min-h-screen gap-4 mx-auto pb-10">
      <div className="flex justify-center items-center max-sm:flex-col gap-2">
        <p className="text-xl text-muted-foreground">{t('prompt')}</p>
        <WordRotate
          className="text-xl font-bold text-primary"
          words={wordsArray}
        />
      </div>
      <Card className="w-full relative overflow-hidden">
        <CardContent className='overflow-hidden relative p-0'>
          <div className='p-8 flex gap-16 w-full h-full max-sm:flex-col'>

            {/* Colonne gauche */}
            <div className='max-sm:w-full sm:w-1/2 text-left flex flex-col justify-start gap-8'>
              <div className='flex flex-col gap-3'>
                <h2 className='font-bold text-3xl'>{t('discuss')}</h2>
                <p className='text-muted-foreground text-sm leading-6'>{t('text')}</p>
                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <Clock className='w-3.5 h-3.5 text-primary' />
                  <span>{t('response_time')}</span>
                </div>
              </div>

              <div className='flex flex-col gap-3'>
                <p className='font-semibold text-sm uppercase tracking-widest text-primary'>{t('link')}</p>
                <div className='flex flex-col gap-2'>
                  {socialLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target='_blank'
                      rel="noopener noreferrer"
                      className='flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group w-fit'
                    >
                      <span className={link.color}>{link.icon}</span>
                      <span>{link.label}</span>
                      <ArrowUpRight className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
                    </Link>
                  ))}
                </div>
                <Link href={pathName.replace('/contact', '')}>
                  <Button className='w-fit p-0 mt-1 text-xs' variant='link'>{t('portfolio')}</Button>
                </Link>
              </div>
            </div>

            {/* Colonne droite — formulaire */}
            <form className='max-sm:w-full sm:w-1/2 flex flex-col gap-4 text-left' onSubmit={sendEmail}>
              <p className='font-bold text-xl text-left'>{t('form_title')}</p>

              {/* Honeypot anti-bot */}
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ position: 'absolute', left: '-9999px' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className='flex flex-col gap-1.5'>
                <label htmlFor='email' className='text-xs font-medium text-muted-foreground'>
                  {t('email')} <span className='text-primary'>*</span>
                </label>
                <Input id='email' type="email" placeholder="you@example.com" className='w-full' value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>

              <div className='flex flex-col gap-1.5'>
                <label htmlFor='name' className='text-xs font-medium text-muted-foreground'>{t('name')}</label>
                <Input id='name' type="text" placeholder="Killian Colla" className='w-full' value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className='flex flex-col gap-1.5'>
                <label htmlFor='subject' className='text-xs font-medium text-muted-foreground'>{t('subject')}</label>
                <Input id='subject' type="text" placeholder="Mon projet" value={subject} onChange={(e) => setSubject(e.target.value)} />
              </div>

              <div className='flex flex-col gap-1.5'>
                <label htmlFor='message' className='text-xs font-medium text-muted-foreground'>{t('message')}</label>
                <Textarea id='message' placeholder={t('message_placeholder')} className='min-h-[100px]' value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>

              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA'}
                onSuccess={(token) => setTurnstileToken(token)}
                onError={() => setTurnstileToken("")}
              />

              <Button className='w-full' disabled={loading}>
                {loading ? (
                  <Image className='h-5 w-auto' src='/loader_dark.svg' width={100} height={100} alt='Loader' />
                ) : t('send')}
              </Button>

              {back && (
                <p className={`text-sm ${back === t("contact_success") ? 'text-green-400' : 'text-red-400'}`}>
                  {back}
                </p>
              )}
            </form>
          </div>
        </CardContent>
        <BorderBeam size={250} duration={12} delay={9} colorFrom="orange" colorTo="#ffffff" />
      </Card>
    </div>
  )
}
