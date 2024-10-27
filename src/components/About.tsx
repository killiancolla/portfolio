import { ArrowDownFromLine } from "lucide-react";
import { Button } from "./ui/button"
import { useTranslations } from 'next-intl';

export default function About() {

    const t = useTranslations('About')

    return (
        <div id='about' className='part flex flex-col items-center text-center pt-20'>
            <div className='mb-10'>
                <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">{t('about')}</p>
                <h3 className='text-xs font-bold text-primary'>{t('about-title1')}</h3>
                <h3 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
                    {t('about-title2')}
                </h3>
            </div>
            <p className="w-2/5 italic font-thin leading-7 mb-5">{t('about_desc')}</p>
            <Button className=''>{t('cv-download')}<ArrowDownFromLine className="py-1" /></Button>
        </div>
    )
}