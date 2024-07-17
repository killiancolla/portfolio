import { CpuIcon, Flag, FolderOpenDot, House, Moon, ScanSearch, School, Sun } from 'lucide-react';
import { Dock, DockIcon } from "@/components/magicui/dock";
import { useEffect, useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { useTheme } from "next-themes"
import { useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation';

export default function NavBar() {

    const t = useTranslations('NavBar')

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
                <p className='whitespace-nowrap transition-all duration-300 group-hover:opacity-100 opacity-0 absolute -bottom-6 left-1/2 -translate-x-1/2'>{t('home')}</p>
            </DockIcon>
            <DockIcon className='group relative' onClick={() => handleMouseEnter('about')}>
                <ScanSearch />
                <p className='whitespace-nowrap transition-all duration-300 group-hover:opacity-100 opacity-0 absolute -bottom-6 left-1/2 -translate-x-1/2'>{t('about')}</p>
            </DockIcon>
            <DockIcon className='group relative' onClick={() => handleMouseEnter('skills')}>
                <CpuIcon />
                <p className='whitespace-nowrap transition-all duration-300 group-hover:opacity-100 opacity-0 absolute -bottom-6 left-1/2 -translate-x-1/2'>{t('skills')}</p>
            </DockIcon>
            <DockIcon className='group relative' onClick={() => handleMouseEnter('projects')}>
                <FolderOpenDot />
                <p className='whitespace-nowrap transition-all duration-300 group-hover:opacity-100 opacity-0 absolute -bottom-6 left-1/2 -translate-x-1/2'>{t('projects')}</p>
            </DockIcon>
            <DockIcon className='group relative' onClick={() => handleMouseEnter('portfolio')}>
                <School />
                <p className='whitespace-nowrap transition-all duration-300 group-hover:opacity-100 opacity-0 absolute -bottom-6 left-1/2 -translate-x-1/2'>{t('portfolio')}</p>
            </DockIcon>
        </Dock>
    )
}