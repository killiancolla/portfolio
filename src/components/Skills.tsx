"use client"

import Image from "next/image";
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion'

const categories = [
    {
        key: 'category_frontend' as const,
        skills: [
            { name: "TypeScript", image: "typescript", color: "" },
            { name: "JavaScript", image: "javascript", color: "" },
            { name: "ReactJS", image: "react", color: "" },
            { name: "HTML5", image: "html5", color: "" },
            { name: "CSS3", image: "css", color: "" },
            { name: "Tailwind", image: "tailwindcss", color: "" },
            { name: "Next.js", image: "nextdotjs", color: "white" },
        ]
    },
    {
        key: 'category_backend' as const,
        skills: [
            { name: "NodeJS", image: "nodedotjs", color: "" },
            { name: "Express", image: "express", color: "white" },
            { name: "PHP", image: "php", color: "" },
            { name: "Python", image: "python", color: "" },
        ]
    },
    {
        key: 'category_database' as const,
        skills: [
            { name: "PostgreSQL", image: "postgresql", color: "" },
            { name: "MySQL", image: "mysql", color: "" },
            { name: "MongoDB", image: "mongodb", color: "" },
            { name: "Firebase", image: "firebase", color: "" },
        ]
    },
    {
        key: 'category_tools' as const,
        skills: [
            { name: "Git", image: "git", color: "" },
            { name: "GitHub", image: "github", color: "white" },
            { name: "Vercel", image: "vercel", color: "white" },
        ]
    },
];

export default function Skills() {

    const t = useTranslations('Skills')

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div id='skills' className="part flex flex-col items-center text-center pt-20 w-4/5">
            <motion.div className='mb-10' variants={itemVariants} viewport={{ once: true, margin: "-75px 0px" }} initial="hidden" whileInView="visible">
                <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">{t('skills')}</p>
                <h2 className='text-sm font-bold text-primary'>{t('skills_title1')}</h2>
                <h2 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
                    {t('skills_title2')}
                </h2>
            </motion.div>

            <motion.div
                className="flex flex-col gap-8 w-full"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px 0px" }}
            >
                {categories.map((category) => (
                    <motion.div key={category.key} variants={itemVariants} className="text-left">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">
                                {t(category.key)}
                            </span>
                            <div className="flex-1 h-px bg-border" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill.image}
                                    className="flex items-center gap-2 bg-card border border-border hover:border-primary/60 rounded-sm px-3 py-2 transition-colors duration-200 cursor-default"
                                >
                                    <Image
                                        unoptimized
                                        width={18}
                                        height={18}
                                        alt={skill.name}
                                        src={`https://cdn.simpleicons.org/${skill.image}${skill.color ? `/${skill.color}` : ""}`}
                                        className="w-[18px] h-[18px] object-contain"
                                    />
                                    <span className="text-sm">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
