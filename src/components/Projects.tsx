import { useState } from "react";
import Image from 'next/image';
import React from "react";
import { Button } from "./ui/button";
import { LoaderCircle } from 'lucide-react';

export default function Projects() {

    const projects = [
        {
            title: 'Pomodoro',
            image: 'project1.png',
            techno: ["ReactJS", "NodeJS"],
            link: "https://pomodoro-seven-lemon.vercel.app/"
        },
        {
            title: 'Social Network',
            image: 'project2.jpg',
            techno: ["NextJS", "FireBase"],
            link: "https://socialnetwork-six.vercel.app/"
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
                <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">Projects</p>
                <h3 className='text-xs font-bold text-primary'>My Creative</h3>
                <h3 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
                    Works
                </h3>
            </div>
            <ul className='flex gap-7 mb-10'>
                <li className={`cursor-pointer py-2 px-8 rounded-sm ${activeItemProj === 'all' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('all')}>All Projects</li>
                <li className={`cursor-pointer py-2 px-8 rounded-sm ${activeItemProj === 'reactjs' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('reactjs')}>ReactJS</li>
                <li className={`cursor-pointer py-2 px-8 rounded-sm ${activeItemProj === 'nextjs' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('nextjs')}>NextJS</li>
                <li className={`cursor-pointer py-2 px-8 rounded-sm ${activeItemProj === 'python' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('python')}>Python</li>
            </ul>
            <div className="flex gap-6">
                {columns.map((column, index) => (
                    <div key={'col' + index} className="w-1/3 text-left">
                        {column.map((project, index) => (
                            <div key={'proj' + index} className="">
                                <div className="group w-full relative">
                                    <Image
                                        className="transition-all duration-300 group-hover:brightness-50 w-full"
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
                                        {isClicked ? <LoaderCircle className="animate-spin" /> : 'See project'}
                                    </Button>
                                </div>
                                <h2 className="font-semibold text-xl mt-1">{project.title}</h2>
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