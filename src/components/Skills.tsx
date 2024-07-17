import Image from "next/image";
import IconCloud from "./magicui/icon-cloud";
import { useTranslations } from 'next-intl';
import { Switch } from "./ui/switch"
import { Label } from "./ui/label";
import { useState } from "react";

export default function Skills() {

    const t = useTranslations('Skills')
    const [showList, setShowList] = useState(false)

    const skillsFromSlugs = [
        { name: "TypeScript", image: "typescript", light: "_", dark: "_" },
        { name: "JavaScript", image: "javascript", light: "_", dark: "_" },
        { name: "ReactJS", image: "react", light: "_", dark: "_" },
        { name: "HTML5", image: "html5", light: "_", dark: "_" },
        { name: "CSS3", image: "css3", light: "_", dark: "_" },
        { name: "TailWind CSS", image: "tailwindcss", light: "_", dark: "_" },
        { name: "PHP", image: "php", light: "_", dark: "_" },
        { name: "NodeJS", image: "nodedotjs", light: "_", dark: "_" },
        { name: "Express", image: "express", light: "_", dark: "white" },
        { name: "NextJS", image: "nextdotjs", light: "_", dark: "white" },
        { name: "PostgreSQL", image: "postgresql", light: "_", dark: "_" },
        { name: "MySQL", image: "mysql", light: "_", dark: "_" },
        { name: "MongoDB", image: "mongodb", light: "_", dark: "_" },
        { name: "Firebase", image: "firebase", light: "_", dark: "_" },
        { name: "Vercel", image: "vercel", light: "_", dark: "white" },
        { name: "Git", image: "git", light: "_", dark: "_" },
        { name: "GitHub", image: "github", light: "_", dark: "white" },
        { name: "Python", image: "python", light: "_", dark: "_" }
    ];

    const slugs = skillsFromSlugs.map(skill => skill.image);

    return (
        <div id='skills' className="part flex flex-col items-center text-center pt-20 w-4/5">
            <div className='mb-10'>
                <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">{t('skills')}</p>
                <h3 className='text-xs font-bold text-primary'>{t('skills_title1')}</h3>
                <h3 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
                    {t('skills_title2')}
                </h3>
            </div>
            <div className="flex items-center space-x-2">
                <Switch checked={showList} onCheckedChange={() => setShowList(show => !show)} id="list-mode" />
                <Label htmlFor="list-mode">{t('show_list')}</Label>
            </div>
            {showList ? (
                <div className="flex flex-wrap justify-center items-center w-full gap-2 mt-10">
                    {skillsFromSlugs.map((slug) => (
                        <div className="flex flex-row px-10 py-4 rounded-sm bg-card w-48 h-16 justify-center items-center gap-4 border">
                            <img className="w-1/3" alt="logo" src={`https://cdn.simpleicons.org/${slug.image}/${slug.light}/${slug.dark}`} />
                            <p className="w-2/3 text-left">{slug.name}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex justify-center flex-wrap">
                    <IconCloud iconSlugs={slugs} />
                </div>
            )
            }
        </div >
    )
}