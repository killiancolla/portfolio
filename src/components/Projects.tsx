import { useEffect, useState } from "react";
import Image from 'next/image';
import React from "react";
import { Calendar, MoveUpRight, Users, WorkflowIcon } from 'lucide-react';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useTranslations } from 'next-intl';
import { projects } from '../../data/projects'
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from 'framer-motion'

export default function Projects() {

    const t = useTranslations('Projects')

    const [activeItemProj, setActiveItemProj] = useState('all');
    const [isClicked, setIsClicked] = useState(false);
    const [columnCount, setColumnCount] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setColumnCount(2);
            } else {
                setColumnCount(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const filtered_projects = projects.filter(project => {
        return activeItemProj === "all" || project.techno.some(tech => tech.toLowerCase() === activeItemProj.toLowerCase());
    });

    const totalProjects = filtered_projects.length;
    const columns = [];
    let start = 0;

    for (let i = 0; i < columnCount; i++) {
        const remainingColumns = columnCount - i;
        const projectsLeft = totalProjects - start;
        const projectsPerCurrentColumn = Math.ceil(projectsLeft / remainingColumns);

        const end = start + projectsPerCurrentColumn;
        columns.push(filtered_projects.slice(start, end));

        start = end;
    }

    const handleRedirect = (link: string) => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
            window.open(link, "_blank");
        }, 2000);
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div id='projects' className="part flex flex-col text-center pt-20 w-4/5">
            <motion.div className='mb-10' variants={itemVariants} viewport={{ once: true, margin: "-75px 0px" }} initial="hidden" whileInView="visible">
                <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">{t('projects')}</p>
                <h3 className='text-xs font-bold text-primary'>{t('projects_title1')}</h3>
                <h3 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
                    {t('projects_title2')}
                </h3>
            </motion.div>
            <ul className='flex max-sm:flex-col max-sm:gap-2 sm:gap-4 flex-wrap'>
                <li className={`flex justify-center items-center cursor-pointer py-2 px-8 rounded-sm ${activeItemProj === 'all' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('all')}>{t('all_projects')}</li>
                <li className={`flex justify-center items-center cursor-pointer py-2 px-8 rounded-sm ${activeItemProj === 'reactjs' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('reactjs')}>ReactJS</li>
                <li className={`flex justify-center items-center cursor-pointer py-2 px-8 rounded-sm ${activeItemProj === 'nextjs' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('nextjs')}>NextJS</li>
                <li className={`flex justify-center items-center cursor-pointer py-2 px-8 rounded-sm ${activeItemProj === 'ia' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('ia')}>A.I</li>
            </ul>
            {/* <p className="text-left font-thin italic text-sm mb-10 mt-2">{t('hover_project')}</p> */}
            <div className="sm:flex gap-2 mt-5">
                {columns.map((column, index) => (
                    <div key={'col' + index} className="max-sm:w-full sm:w-1/3 text-left">
                        {column.map((project, index) => (
                            <div key={project.code} className="hover:bg-card hover:border border-primary p-2 group rounded-sm relative">
                                <div className="hidden group-hover:flex w-full h-full bg-red-500 absolute top-0 left-0 -z-10 background rounded-full blur-2xl scale-150"></div>
                                <div className="w-full relative rounded-sm overflow-hidden">
                                    <div className="group-hover:flex flex-col gap-2 hidden w-3/4 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                                        <p className="text-center font-light leading-relaxed mt-2 mb-4">
                                            {t(project.code + '_desc')}
                                        </p>
                                        {project.link && (
                                            <Link href={project.link} className="flex justify-center items-center">
                                                <Button variant={'link'}>{t('see_project')}</Button>
                                            </Link>
                                        )}
                                    </div>
                                    <Image
                                        className="rounded-sm w-full group-hover:opacity-30 group-hover:scale-105 group-hover:transition-all"
                                        width={500}
                                        height={500}
                                        src={`/${project.image}`}
                                        alt={project.title}
                                    />
                                </div>
                                <h2 className="font-semibold text-xl mt-1 flex gap-2 items-center">{project.title}{project.link && (<MoveUpRight className="size-5 group-hover:bg-primary" />)}</h2>
                                <h3 className="text-primary font-thin text-lg">
                                    {project.techno.map((tech, index) => (
                                        <React.Fragment key={index}>
                                            {index > 0 && ' • '}
                                            {tech}
                                        </React.Fragment>
                                    ))}
                                </h3>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div >
    )
}