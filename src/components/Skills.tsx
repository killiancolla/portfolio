import Image from "next/image";
import IconCloud from "./magicui/icon-cloud";
import { useTranslations } from 'next-intl';
import { Switch } from "./ui/switch"
import { Label } from "./ui/label";
import { useState } from "react";
import { motion } from 'framer-motion'
import { OrbitingCircles } from "./magicui/orbiting-circles";

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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div id='skills' className="part flex flex-col items-center text-center pt-20 w-4/5">
            <motion.div className='mb-10' variants={itemVariants} viewport={{ once: true, margin: "-75px 0px" }} initial="hidden" whileInView="visible">
                <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">{t('skills')}</p>
                <h3 className='text-sm font-bold text-primary'>{t('skills_title1')}</h3>
                <h3 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
                    {t('skills_title2')}
                </h3>
            </motion.div>
            <div className="flex items-center space-x-2">
                <Switch checked={showList} onCheckedChange={() => setShowList(show => !show)} id="list-mode" />
                <Label htmlFor="list-mode">{t('show_list')}</Label>
            </div>
            {showList ? (
                <div className="flex flex-wrap justify-center items-center w-full gap-2 mt-10">
                    {skillsFromSlugs.map((slug, index) => (
                        <div key={index} className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center sm:flex-row sm:px-10 max-sm:py-2 sm:py-4 rounded-sm bg-card max-sm:w-36 sm:w-48 h-16 justify-center items-center sm:gap-4 border">
                            <Image width={100} height={100} className="max-sm:h-2/3 sm:w-1/3" alt="logo" src={`https://cdn.simpleicons.org/${slug.image}/${slug.light}/${slug.dark}`} />
                            <p className="max-sm:items-center max-sm:justify-center max-sm:flex max-sm:text-base sm:w-2/3 sm:text-left">{slug.name}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <div className="max-sm:hidden relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
                        <OrbitingCircles iconSize={60} radius={180}>
                            {skillsFromSlugs.slice(0, 10).map((slug, index) => (
                                <Image
                                    key={index}
                                    width={100}
                                    height={100}
                                    alt="logo"
                                    src={`https://cdn.simpleicons.org/${slug.image}/${slug.light}/${slug.dark}`}
                                />
                            ))}
                        </OrbitingCircles>

                        <OrbitingCircles iconSize={50} radius={110} reverse>
                            {skillsFromSlugs.slice(10, 18).map((slug, index) => (
                                <Image
                                    key={index + 10}
                                    width={100}
                                    height={100}
                                    alt="logo"
                                    src={`https://cdn.simpleicons.org/${slug.image}/${slug.light}/${slug.dark}`}
                                />
                            ))}
                        </OrbitingCircles>
                    </div>
                    <div className="sm:hidden relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden">
                        <OrbitingCircles iconSize={40} radius={130}>
                            {skillsFromSlugs.slice(0, 10).map((slug, index) => (
                                <Image
                                    key={index}
                                    width={100}
                                    height={100}
                                    alt="logo"
                                    src={`https://cdn.simpleicons.org/${slug.image}/${slug.light}/${slug.dark}`}
                                />
                            ))}
                        </OrbitingCircles>

                        <OrbitingCircles iconSize={40} radius={80} reverse>
                            {skillsFromSlugs.slice(10, 18).map((slug, index) => (
                                <Image
                                    key={index + 10}
                                    width={100}
                                    height={100}
                                    alt="logo"
                                    src={`https://cdn.simpleicons.org/${slug.image}/${slug.light}/${slug.dark}`}
                                />
                            ))}
                        </OrbitingCircles>
                    </div>
                </>
            )
            }
        </div >
    )
}