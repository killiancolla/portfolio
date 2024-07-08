import Image from "next/image";
import IconCloud from "@/components/magicui/icon-cloud";
import { useTranslations } from 'next-intl';

export default function Skills() {

    const t = useTranslations('Skills')

    const skills = [
        {
            name: "ReactJS",
            image: "react"
        },
        {
            name: "NextJS",
            image: "nextdotjs"
        },
        {
            name: "TailWind CSS",
            image: "tailwindcss"
        },
        {
            name: "PHP",
            image: "php"
        },
        {
            name: "Python",
            image: "python"
        },
        {
            name: "NodeJS",
            image: "nodedotjs"
        },
        {
            name: "MySQL",
            image: "mysql"
        },
    ];

    const slugs = [
        "typescript",
        "javascript",
        "react",
        "html5",
        "css3",
        "tailwindcss",
        "php",
        "nodedotjs",
        "express",
        "nextdotjs",
        "postgresql",
        "mysql",
        "mongodb",
        "firebase",
        "vercel",
        "git",
        "github",
        "visualstudiocode",
        "python"
    ];

    return (
        <div id='skills' className="part flex flex-col items-center text-center pt-20 w-4/5">
            <div className='mb-10'>
                <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">{t('skills')}</p>
                <h3 className='text-xs font-bold text-primary'>{t('skills_title1')}</h3>
                <h3 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
                    {t('skills_title2')}
                </h3>
            </div>
            <div className="flex justify-center flex-wrap">
                <IconCloud iconSlugs={slugs} />
            </div>
        </div>
    )
}