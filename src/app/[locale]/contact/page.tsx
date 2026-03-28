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

export default function Contact() {

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

  async function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!turnstileToken) {
      setBack("Veuillez compléter la vérification de sécurité.")
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
      setBack("Merci pour votre message ! Nous vous ferons un retour d'ici 48 heures.")
      setEmail(""); setName(""); setSubject(""); setMessage(""); setTurnstileToken("")
    } else if (response.status === 429) {
      setBack("Trop de tentatives. Veuillez réessayer plus tard.")
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
                  <Link href={"https://wa.me/33695041166"} className="h-full w-fit aspect-square object-contain hover:-translate-y-2 hover:rotate-12 hover:transition-all transition-all" target='_blank'>
                    <Image alt='Whatsapp logo' src={"/whatsapp.webp"} height={100} width={100} />
                  </Link>
                  <Link className="h-full w-fit aspect-square object-contain hover:-translate-y-2 hover:rotate-12 hover:transition-all transition-all" href={"https://x.com/_killiandev"} target='_blank'>
                    <Image alt='X logo' src={"/x.webp"} height={100} width={100} />
                  </Link>
                  <Link className="h-full w-fit aspect-square object-contain hover:-translate-y-2 hover:rotate-12 hover:transition-all transition-all" href={"https://www.linkedin.com/in/killian-colla-46b48b207/"} target='_blank'>
                    <Image alt='LinkedIn logo' src={"/linkedin.webp"} height={100} width={100} />
                  </Link>
                  <Link className="h-full w-fit aspect-square object-contain hover:-translate-y-2 hover:rotate-12 hover:transition-all transition-all" href={"https://github.com/killiancolla"} target='_blank'>
                    <Image alt='GitHub logo' src={"/github.png"} height={100} width={100} />
                  </Link>
                </div>
                <Link href={pathName.replace('/contact', '')}>
                  <Button className='w-fit text-left p-0' variant={'link'}>{t('portfolio')}</Button>
                </Link>
              </div>
            </div>
            <form className='max-sm:w-full w-1/2 flex flex-col my-auto gap-5' onSubmit={(e) => sendEmail(e)}>
              <p className='font-bold text-xl text-left'>Formulaire de contact</p>
              {/* Honeypot anti-bot */}
              <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} style={{ position: 'absolute', left: '-9999px' }} tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className='w-full'>
                <Input id='email' type="email" placeholder={`${t('email')}*`} className='w-full' value={email} onChange={(e) => setEmail(e.target.value)} required />
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
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA'}
                onSuccess={(token) => setTurnstileToken(token)}
                onError={() => setTurnstileToken("")}
              />
              <div className='w-full'>
                <Button className='w-full' disabled={loading}>{loading ?
                  <div className='h-full'>
                    <Image className='dark:hidden h-full' src={'/loader_light.svg'} width={100} height={100} alt='Loader' />
                    <Image className='dark:flex hidden h-full' src={'/loader_dark.svg'} width={100} height={100} alt='Loader' />
                  </div>
                  : t('send')}</Button>
              </div>
              <p className={back.includes('erreur') || back.includes('Trop') ? 'text-red-400' : back ? 'text-green-400' : ''}>{back}</p>
            </form>
          </div>
        </CardContent>
        <BorderBeam size={250} duration={12} delay={9} colorFrom="orange" colorTo="#ffffff" />
      </Card>
    </div>
  )
}
