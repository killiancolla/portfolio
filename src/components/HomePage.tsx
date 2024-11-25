import { Button } from "./ui/button"
import { Avatar } from '@readyplayerme/visage';
import { useTranslations } from 'next-intl';
import { useRouter, useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { handleMouseEnter } from "../../utils/handleMouseEnter";

export default function HomePage() {

  const router = useRouter();
  const params = useParams()

  const t = useTranslations('HomePage')

  return (
    <div className="relative">
      <div id='home' className='part min-h-screen w-full flex flex-col items-center justify-center gap-4'>
        <Image className="w-32 rounded-full bg-white aspect-square object-cover object-center" src={"/me.jpg"} alt="picture of me" width={200} height={200} />
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          {t('hello')}
        </span>
        <h2 className="font-bold sm:text-5xl max-sm:text-4xl">{t('title')}</h2>
        <p className='sm:w-1/2 max-sm:w-5/6 text-center'>
          {t('intro')}
        </p>
        <h2 className="text-primary font-bold">Vous avez un projet ?</h2>
        <Button onClick={() => handleMouseEnter('contact')}>{t('contact')}</Button>
        <div className="flex gap-4">
          <Link href="https://github.com/killiancolla" target="_blank"><Github className="hover:text-primary" /></Link>
          <Link href="https://www.linkedin.com/in/killian-colla-46b48b207/" target="_blank"><Linkedin className="hover:text-primary" /></Link>
        </div>
      </div>
    </div>
  )
}