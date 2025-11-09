import { useState } from "react";
import Image from 'next/image';
import React from "react";
import { useTranslations } from 'next-intl';
import { projects } from '../../data/projects'
import Link from "next/link";
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion'

export default function Projects() {

    const t = useTranslations('Projects')
    const locale = useLocale()


    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const [rotations, setRotations] = useState<{ [key: number]: number }>({});

    const handleMouseEnter = (index: number) => {

        let angle = 0
        while (angle < 1 && angle > -1) {
            angle = Math.random() * 10 - 5
        }



        setRotations(prev => ({
            ...prev,
            [index]: angle,
        }));
    };

    const handleMouseLeave = (index: number) => {
        setRotations(prev => ({
            ...prev,
            [index]: 0,
        }));
    };

    return (
        <div id='projects' className="part flex flex-col text-center pt-20 w-4/5">
            <motion.div className='mb-10' variants={itemVariants} viewport={{ once: true, margin: "-75px 0px" }} initial="hidden" whileInView="visible">
                <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">{t('projects')}</p>
                <h3 className='text-sm font-bold text-primary'>{t('projects_title1')}</h3>
                <h3 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
                    {t('projects_title2')}
                </h3>
            </motion.div>
            {/* <ul className='flex max-sm:flex-col max-sm:gap-2 sm:gap-4 flex-wrap'>
                <li className={`flex justify-center items-center cursor-pointer py-2 px-8 rounded-sm ${activeItemProj === 'all' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('all')}>{t('all_projects')}</li>
                <li className={`flex justify-center items-center cursor-pointer py-2 px-8 rounded-sm ${activeItemProj === 'reactjs' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('reactjs')}>ReactJS</li>
                <li className={`flex justify-center items-center cursor-pointer py-2 px-8 rounded-sm ${activeItemProj === 'nextjs' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('nextjs')}>NextJS</li>
                <li className={`flex justify-center items-center cursor-pointer py-2 px-8 rounded-sm ${activeItemProj === 'ia' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('ia')}>A.I</li>
            </ul> */}
            <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 sm:grid-auto-rows gap-2 mt-4">
                {projects.map((project, index) => (
                    <div key={index} className="p-1">
                        <Link href={`/${locale}/${project.code}`}>
                            <div
                                className="h-full bg-card hover:border hover:transition-all border-primary p-5 group rounded-sm relative w-full flex flex-col justify-between transition-all gap-4"
                                style={{ transform: `rotate(${rotations[index] || 0}deg)`, transition: "transform 0.3s ease-in-out" }}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                            >
                            <div className="w-full flex flex-col gap-4">
                                <div className="absolute top-0 left-0 bg-card w-full h-full -z-10 rounded-sm"></div>
                                <div className="w-full relative rounded-sm overflow-hidden">
                                    {project.media[0].type === 'video' ? (
                                        project.media[0].src.includes('youtube.com') || project.media[0].src.includes('youtu.be') ? (
                                            <iframe
                                                className="rounded-sm w-full aspect-video group-hover:opacity-100 opacity-70 group-hover:scale-105 group-hover:transition-all"
                                                src={project.media[0].src}
                                                title={project.media[0].alt}
                                                frameBorder="0"
                                                allowFullScreen
                                            />
                                        ) : (
                                            <video
                                                className="rounded-sm w-full aspect-video object-cover group-hover:opacity-100 opacity-70 group-hover:scale-105 group-hover:transition-all"
                                                controls
                                                muted
                                                playsInline
                                            >
                                                <source src={`/${project.media[0].src}`} type="video/mp4" />
                                                Votre navigateur ne supporte pas la balise vidéo.
                                            </video>
                                        )
                                    ) : (
                                        <Image
                                            className="rounded-sm w-full aspect-video object-cover group-hover:opacity-100 opacity-70 group-hover:scale-105 group-hover:transition-all"
                                            width={500}
                                            height={500}
                                            src={project.media[0].src.startsWith('http') ? project.media[0].src : `/${project.media[0].src}`}
                                            alt={project.media[0].alt}
                                        />
                                    )}
                                </div>
                                <h2 className="pl-4 italic font-semibold text-xl mt-1 flex gap-2 items-center">{project.title}</h2>
                                <div className="flex flex-col">
                                    <p className="text-left font-thin">{t(project.code + '_desc')}</p>
                                </div>
                            </div>
                            <h3 className="text-primary font-thin text-lg text-left">
                                {project.techno.map((tech, index) => (
                                    <React.Fragment key={index}>
                                        {index > 0 && ' • '}
                                        {tech}
                                    </React.Fragment>
                                ))}
                            </h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div >
    )
}