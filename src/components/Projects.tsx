import { useState } from "react";
import Image from 'next/image';
import React from "react";
import { Button } from "./ui/button";
import { Calendar, LoaderCircle, Users, WorkflowIcon } from 'lucide-react';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useTranslations } from 'next-intl';

export default function Projects() {

    const t = useTranslations('Projects')

    const projects = [
        {
            code: "youbotbuster",
            title: 'YouBotBuster',
            image: 'youbotbuster.png',
            techno: ["SaaS", "IA", "YouTube API", "Stripe API"],
            date: '2024',
            status: 'end_status',
            people: 2,
            link: "https://socialnetwork-six.vercel.app/"
        },
        {
            code: "socnet",
            title: 'Social Network',
            image: 'socialnewtork.png',
            techno: ["NextJS", "FireBase", "TailWind"],
            date: '2020',
            status: 'wip_status',
            people: 1,
            link: "https://socialnetwork-six.vercel.app/"
        },
        {
            code: 'pomodoro',
            title: 'Pomodoro',
            image: 'pomodoro.png',
            techno: ["ReactJS", "NodeJS"],
            date: '2020',
            status: 'wip_status',
            people: 1,
            link: "https://pomodoro-seven-lemon.vercel.app/"
        }
    ];

    const [activeItemProj, setActiveItemProj] = useState('all');
    const [isClicked, setIsClicked] = useState(false);

    const filtered_projects = projects.filter(project => {
        return activeItemProj == "all" || project.techno.some(tech => tech.toLowerCase() === activeItemProj.toLowerCase());
    })
    const columnCount = 3;
    const projectsPerColumn = Math.ceil(filtered_projects.length / columnCount);

    const columns = [];

    for (let i = 0; i < columnCount; i++) {
        const start = i * projectsPerColumn;
        const end = start + projectsPerColumn;
        columns.push(filtered_projects.slice(start, end));
    }

    const handleRedirect = (link: string) => {
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
            window.open(link, "_blank");
        }, 2000);
    }

    return (
        <div id='projects' className="part flex flex-col text-center pt-20 w-4/5">
            <div className='mb-10'>
                <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">{t('projects')}</p>
                <h3 className='text-xs font-bold text-primary'>{t('projects_title1')}</h3>
                <h3 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
                    {t('projects_title2')}
                </h3>
            </div>
            <ul className='flex gap-7'>
                <li className={`cursor-pointer py-2 px-8 rounded-sm ${activeItemProj === 'all' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('all')}>{t('all_projects')}</li>
                <li className={`cursor-pointer py-2 px-8 rounded-sm ${activeItemProj === 'reactjs' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('reactjs')}>ReactJS</li>
                <li className={`cursor-pointer py-2 px-8 rounded-sm ${activeItemProj === 'nextjs' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('nextjs')}>NextJS</li>
                <li className={`cursor-pointer py-2 px-8 rounded-sm ${activeItemProj === 'ia' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('ia')}>A.I</li>
            </ul>
            <p className="text-left font-thin italic text-sm mb-10 mt-2">{t('hover_project')}</p>
            <div className="flex gap-6">
                {columns.map((column, index) => (
                    <div key={'col' + index} className="w-1/3 text-left">
                        {column.map((project, index) => (
                            <div key={'proj' + index} className="">
                                <div className="group w-full relative">
                                    <Image
                                        className="rounded-sm transition-all duration-300 group-hover:brightness-50 w-full"
                                        width={500}
                                        height={500}
                                        src={`/${project.image}`}
                                        alt={project.title}
                                    />
                                    <Button
                                        onClick={() => handleRedirect(project.link)}
                                        className={`${isClicked ? 'w-10 h-10 rounded-full p-0' : 'w-1/2'}
                                        absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
                                        transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center
                                        `}
                                    >
                                        {isClicked ? <LoaderCircle className="animate-spin" /> : t('see_project')}
                                    </Button>
                                </div>
                                <HoverCard>
                                    <HoverCardTrigger>
                                        <h2 className="font-semibold text-xl mt-1 hover:underline">{project.title}</h2>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="flex justify-between space-x-4">
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-semibold">{project.title} {t('project')}</h4>
                                            <p className="text-sm">
                                                {t(project.code + '_desc')}
                                            </p>
                                            <div className="flex flex-col items-start pt-2 gap-1">
                                                <span className="text-xs text-muted-foreground flex justify-center items-center">
                                                    <Calendar className="mr-2" />{t('created_in') + project.date}
                                                </span>
                                                <span className="text-xs text-muted-foreground flex justify-center items-center">
                                                    <WorkflowIcon className="mr-2 " />{t(project.status)}
                                                </span>
                                                <span className="text-xs text-muted-foreground flex justify-center items-center">
                                                    <Users className="mr-2 " />{project.people}
                                                </span>
                                            </div>
                                        </div>
                                    </HoverCardContent>
                                </HoverCard>
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
        </div>
    )
}