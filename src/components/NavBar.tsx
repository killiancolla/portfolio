import { CpuIcon, FolderOpenDot, House, Moon, ScanSearch, School, Sun } from 'lucide-react';
import { Dock, DockIcon } from "@/components/magicui/dock";
import { useEffect, useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { useTheme } from "next-themes"

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

    const { setTheme } = useTheme()

    return (
        <>
            <div className='fixed top-2 right-2 z-10'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className=''>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
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
        </>
    )
}