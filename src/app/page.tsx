"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import React from "react";
import { Activity, CpuIcon, FolderOpenDot, House, LoaderCircle, ScanSearch, School } from 'lucide-react';
import { Dock, DockIcon } from "@/components/magicui/dock";

export default function Home() {

  const [activeItem, setActiveItem] = useState<String>('');

  const handleMouseEnter = (itemName: string) => {
    const section = document.getElementById(itemName);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.part');

      sections.forEach(section => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.clientHeight;

        if (window.pageYOffset + 0.5 >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
          setActiveItem(sectionElement.id);
        }
      });
    };

    handleScroll()
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  const workCards = [
    {
      title: 'Unicancer',
      position: 'FullStack Developer',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque deleniti nemo beatae debitis suscipit sapiente dolorum voluptatum. Incidunt, possimus illum iure ducimus natus eum pariatur repudiandae eaque dicta fuga.',
      date: '2022 - 2024'
    },
    {
      title: "Université d'Evry Val d'Essonne",
      position: 'FullStack Developer',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque deleniti nemo beatae debitis suscipit sapiente dolorum voluptatum. Incidunt, possimus illum iure ducimus natus eum pariatur repudiandae eaque dicta fuga.',
      date: '2021 - 2022'
    }
  ];

  const educationCards = [
    {
      title: 'Unicancer',
      position: 'FullStack Developer',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque deleniti nemo beatae debitis suscipit sapiente dolorum voluptatum. Incidunt, possimus illum iure ducimus natus eum pariatur repudiandae eaque dicta fuga.',
      date: '2022 - 2024'
    },
    {
      title: "Université d'Evry Val d'Essonne",
      position: 'FullStack Developer',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam doloremque deleniti nemo beatae debitis suscipit sapiente dolorum voluptatum. Incidunt, possimus illum iure ducimus natus eum pariatur repudiandae eaque dicta fuga.',
      date: '2021 - 2022'
    }
  ];


  const [activeItemProj, setActiveItemProj] = useState('all');

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

  const [isClicked, setIsClicked] = useState(false);

  const handleRedirect = (link: string) => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      window.open(link, "_blank");
    }, 2000);
  }

  return (
    <div className="dark flex flex-col justify-center items-center">
      {/* <nav className="rounded-full px-4 py-2 flex h-12 bg-foreground text-background w-4/5 fixed left-1/2 top-5 -translate-x-1/2 justify-between items-center z-10">
        <img className="w-auto h-full" src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png' />
        <ul className="flex items-center h-full gap-4">
          <li>
            <a className={`relative ${activeItem === 'home' ? "before:bg-secondary before:content-[''] before:w-2 before:h-2 before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-2 before:rounded-full" : ''}`} onClick={() => handleMouseEnter('home')} >Home</a>
          </li>
          <li>
            <a className={`relative ${activeItem === 'about' ? "before:bg-secondary before:content-[''] before:w-2 before:h-2 before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-2 before:rounded-full" : ''}`} onClick={() => handleMouseEnter('about')} >About</a>
          </li>
          <li>
            <a className={`relative ${activeItem === 'skills' ? "before:bg-secondary before:content-[''] before:w-2 before:h-2 before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-2 before:rounded-full" : ''}`} onClick={() => handleMouseEnter('skills')} >Skills</a>
          </li>
          <li>
            <a className={`relative ${activeItem === 'projects' ? "before:bg-secondary before:content-[''] before:w-2 before:h-2 before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-2 before:rounded-full" : ''}`} onClick={() => handleMouseEnter('projects')} >Projects</a>
          </li>
          <li>
            <a className={`relative ${activeItem === 'portfolio' ? "before:bg-secondary before:content-[''] before:w-2 before:h-2 before:absolute before:left-1/2 before:-translate-x-1/2 before:-bottom-2 before:rounded-full" : ''}`} onClick={() => handleMouseEnter('portfolio')} >Portfolio</a>
          </li>
        </ul>
        <Button className="h-full" variant={"secondary"}>Contact Me</Button>
      </nav> */}
      <Dock className="fixed top-5 left-1/2 -translate-x-1/2 z-10">
        <DockIcon onClick={() => handleMouseEnter('home')}>
          <House />
        </DockIcon>
        <DockIcon onClick={() => handleMouseEnter('about')}>
          <ScanSearch />
        </DockIcon>
        <DockIcon onClick={() => handleMouseEnter('skills')}>
          <CpuIcon />
        </DockIcon>
        <DockIcon onClick={() => handleMouseEnter('projects')}>
          <FolderOpenDot />
        </DockIcon>
        <DockIcon onClick={() => handleMouseEnter('portfolio')}>
          <School />
        </DockIcon>
      </Dock>
      <div id='home' className='part min-h-screen w-4/5 flex items-center justify-center'>
        <div className='w-1/2 flex flex-col items-end'>
          <h1 className="text-5xl font-bold">Killian Colla</h1>
          <h2 className="font-bold">Web Developer</h2>
          <p className='text-end my-14'>
            Je suis Killian, un développeur web passionné par la création d'expériences en ligne innovantes. Explorez mon portfolio pour voir comment je fusionne la technologie et la créativité.
          </p>
          <Button>Contact me</Button>
        </div>
        <div className="w-1/2">
          <p className="text-center">Image</p>
        </div>
      </div>
      <div id='about' className='part flex flex-col items-center text-center pt-20'>
        <div className='mb-10'>
          <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">About</p>
          <h3 className='text-xs font-bold text-primary'>My stories and</h3>
          <h3 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
            Feelings
          </h3>
        </div>
        <p className="w-2/5 italic font-thin leading-7 mb-5">Avec [X] années d'expérience dans le développement web, j'ai travaillé sur une variété de projets allant des sites vitrines aux applications web complexes. Apprenez-en plus sur mon parcours et ma passion pour le développement.</p>
        <Button className=''>Download CV</Button>
      </div>
      <div id='skills' className="part flex flex-col items-center text-center pt-20 w-4/5">
        <div className='mb-10'>
          <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">Skills</p>
          <h3 className='text-xs font-bold text-primary'>Skills and</h3>
          <h3 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
            Experience
          </h3>
        </div>
        <div className="flex justify-center flex-wrap">
          {[...Array(6)].map((_, index) => (
            <div className="w-40 bg-card flex items-center mt-4 p-4 m-8 rounded">
              <Image width={50} height={50} alt="logo" className="w-1/3 object-cover" src='/react.svg' />
              <h3 className="w-2/3">ReactJS</h3>
            </div>
          ))}
        </div>
      </div>
      <div id='projects' className="part flex flex-col text-center pt-20 w-4/5">
        <div className='mb-10'>
          <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">Projects</p>
          <h3 className='text-xs font-bold text-primary'>My Creative</h3>
          <h3 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
            Works
          </h3>
        </div>
        <ul className='flex gap-7 mb-10'>
          <li className={`py-2 px-8 rounded-sm ${activeItemProj === 'all' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('all')}>All Projects</li>
          <li className={`py-2 px-8 rounded-sm ${activeItemProj === 'reactjs' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('reactjs')}>ReactJS</li>
          <li className={`py-2 px-8 rounded-sm ${activeItemProj === 'nextjs' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('nextjs')}>NextJS</li>
          <li className={`py-2 px-8 rounded-sm ${activeItemProj === 'python' ? 'bg-primary' : 'bg-card'}`} onClick={() => setActiveItemProj('python')}>Python</li>
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
                      className={`
          ${isClicked ? 'w-10 h-10 rounded-full p-0' : 'w-1/2'}
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
      <div id='portfolio' className="part flex items-center flex-col text-center w-4/5 pt-20">
        <div className='mb-16'>
          <p className="mb-4 before:content-['\002605'] before:text-[#FB6423] before:mr-2.5 before:text-[15px] before:align-middle">Portfolio</p>
          <h3 className='text-xs font-bold text-primary'>Most Important</h3>
          <h3 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
            Experience
          </h3>
        </div>
        <div className='relative'>
          <div className="absolute w-0.5 h-full bg-foreground left-1/2 -translate-x-1/2 top-0 
          before:bg-[#FB6423] before:content-[''] before:w-5 before:h-5 before:absolute before:rounded-full before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:-top-4 before:animate-pulse
          after:border-2 after:border-[#FB6423] after:content-[''] after:w-8 after:h-8 after:absolute after:rounded-full after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:-top-4"></div>
          <div className='grid grid-cols-2 gap-24'>
            {workCards.map((work, index) => (
              <React.Fragment key={index}>
                {(index + 1) % 2 === 0 && <p key={`p_${index}`} className='flex w-full items-center justify-end'>{work.date}</p>}
                <div className={`relative border-2 border-primary p-6 rounded-sm ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h2 className="text-2xl font-bold text-primary">{work.title}</h2>
                  <h3 className="font-bold mb-4">{work.position}</h3>
                  <p className="leading-7">{work.description}</p>
                  <div className={`absolute top-1/2 right-0 w-12 h-px bg-foreground ${(index + 1) % 2 !== 0 ? '-right-px translate-x-full' : '-left-px -translate-x-full'}`}></div>
                </div>
                {(index + 1) % 2 !== 0 && <p key={`p_${index}`} className='flex items-center justify-start'>{work.date}</p>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className='mb-16 pt-10'>
          <h3 className='text-xs font-bold text-primary'>Most Important</h3>
          <h3 className="font-bold text-2xl after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FB6423] after:relative after:-bottom-1.5 after:ml-auto after:mr-auto">
            Education
          </h3>
        </div>
        <div className='relative'>
          <div className="absolute w-0.5 h-full bg-foreground left-1/2 -translate-x-1/2 top-0 
          before:bg-[#FB6423] before:content-[''] before:w-5 before:h-5 before:absolute before:rounded-full before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:-top-4
          after:border-2 after:border-[#FB6423] after:content-[''] after:w-8 after:h-8 after:absolute after:rounded-full after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:-top-4 before:animate-pulse"></div>
          <div className='grid grid-cols-2 gap-24'>
            {educationCards.map((education, index) => (
              <React.Fragment key={index}>
                {(index + 1) % 2 === 0 && <p key={`p_${index}`} className='flex w-full items-center justify-end'>{education.date}</p>}
                <div className={`relative border-2 border-primary p-6 rounded-sm ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h2 className="text-2xl font-bold text-primary">{education.title}</h2>
                  <h3 className="font-bold mb-4">{education.position}</h3>
                  <p className="leading-7">{education.description}</p>
                  <div className={`absolute top-1/2 right-0 w-12 h-px bg-foreground ${(index + 1) % 2 !== 0 ? '-right-px translate-x-full' : '-left-px -translate-x-full'}`}></div>
                </div>
                {(index + 1) % 2 !== 0 && <p key={`p_${index}`} className='flex items-center justify-start'>{education.date}</p>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}
