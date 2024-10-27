import { Button } from "./ui/button"
import { Avatar } from '@readyplayerme/visage';
import { useTranslations } from 'next-intl';
import { useRouter, useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";


export default function HomePage() {

  const router = useRouter();
  const params = useParams()

  const t = useTranslations('HomePage')

  return (
    <div className="relative">
      {/* <svg className="absolute top-10 left-23 w-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="blue" d="M36.5,-1.2C36.5,22.7,18.2,45.4,-6.9,45.4C-32,45.4,-64,22.7,-64,-1.2C-64,-25.2,-32,-50.3,-6.9,-50.3C18.2,-50.3,36.5,-25.2,36.5,-1.2Z" transform="translate(100 100)" />
      </svg> */}
      <div id='home' className='part min-h-screen w-full flex flex-col items-center justify-center gap-4'>
        <Image className="w-32 rounded-full bg-white aspect-square object-cover object-center" src={"/me.jpg"} alt="picture of me" width={1000} height={1000} />
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          {t('hello')}
        </span>
        <h2 className="font-bold text-5xl">{t('title')}</h2>
        <p className='w-1/2 text-center'>
          {t('intro')}
        </p>
        {/* <Button onClick={() => router.push('/' + params.locale + '/contact')}>{t('contact')}</Button> */}
        <Link href="mailto:contact@killian-colla.com">
          <Button>{t('contact')}</Button>
        </Link>
      </div>
    </div>
  )
}