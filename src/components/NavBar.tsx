import { CpuIcon, FolderOpenDot, House, ScanSearch, School } from 'lucide-react';
import { Dock, DockIcon } from "@/components/magicui/dock";
import { useEffect, useState } from 'react';

export default function NavBar() {

    const [activeItem, setActiveItem] = useState('');

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

    return (
        <Dock className="fixed top-0 h-10 left-1/2 -translate-x-1/2 z-10">
            <DockIcon className='group relative' onClick={() => handleMouseEnter('home')}>
                <House />
                <p className='transition-all duration-300 group-hover:opacity-100 opacity-0 absolute -bottom-6 left-1/2 -translate-x-1/2'>Home</p>
            </DockIcon>
            <DockIcon className='group relative' onClick={() => handleMouseEnter('about')}>
                <ScanSearch />
                <p className='transition-all duration-300 group-hover:opacity-100 opacity-0 absolute -bottom-6 left-1/2 -translate-x-1/2'>About</p>
            </DockIcon>
            <DockIcon className='group relative' onClick={() => handleMouseEnter('skills')}>
                <CpuIcon />
                <p className='transition-all duration-300 group-hover:opacity-100 opacity-0 absolute -bottom-6 left-1/2 -translate-x-1/2'>Skills</p>
            </DockIcon>
            <DockIcon className='group relative' onClick={() => handleMouseEnter('projects')}>
                <FolderOpenDot />
                <p className='transition-all duration-300 group-hover:opacity-100 opacity-0 absolute -bottom-6 left-1/2 -translate-x-1/2'>Projects</p>
            </DockIcon>
            <DockIcon className='group relative' onClick={() => handleMouseEnter('portfolio')}>
                <School />
                <p className='transition-all duration-300 group-hover:opacity-100 opacity-0 absolute -bottom-6 left-1/2 -translate-x-1/2'>Portfolio</p>
            </DockIcon>
        </Dock>
    )
}