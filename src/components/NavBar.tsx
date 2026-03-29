"use client"

import { Briefcase, CpuIcon, Flag, FolderOpenDot, House, Moon, ScanSearch, School, Sun } from 'lucide-react';
import { Dock, DockIcon } from "@/components/magicui/dock";
import { useTranslations } from 'next-intl'
import { handleMouseEnter } from '../../utils/handleMouseEnter';
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

const navItems = [
    { icon: House, section: 'home', labelKey: 'home' as const },
    { icon: ScanSearch, section: 'about', labelKey: 'about' as const },
    { icon: Briefcase, section: 'services', labelKey: 'service' as const },
    { icon: CpuIcon, section: 'skills', labelKey: 'skills' as const },
    { icon: FolderOpenDot, section: 'projects', labelKey: 'projects' as const },
    { icon: School, section: 'portfolio', labelKey: 'portfolio' as const },
];

export default function NavBar() {

    const pathName = usePathname();
    const router = useRouter();
    const { setTheme } = useTheme();
    const t = useTranslations('NavBar');
    const [activeSection, setActiveSection] = useState('home');

    const currentPath = pathName.split('/').slice(2).join('/');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + window.innerHeight * 0.35;
            let current = 'home';
            for (const { section } of navItems) {
                const el = document.getElementById(section);
                if (el && el.offsetTop <= scrollY) {
                    current = section;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNav = (section: string) => {
        if (pathName.split('/').length === 3) {
            router.push('/' + pathName.split('/')[1] + '#' + section);
        } else {
            handleMouseEnter(section);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <Dock className="fixed top-0 h-10 left-1/2 -translate-x-1/2 z-10">
                {navItems.map(({ icon: Icon, section, labelKey }) => (
                    <DockIcon
                        key={section}
                        className={`group relative transition-colors ${activeSection === section ? 'text-primary' : ''}`}
                        onClick={() => handleNav(section)}
                    >
                        <Icon />
                        <p className='whitespace-nowrap transition-all duration-300 group-hover:opacity-100 opacity-0 absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs'>
                            {t(labelKey)}
                        </p>
                    </DockIcon>
                ))}

                {/* Séparateur */}
                <DockIcon className="w-px h-5 bg-border pointer-events-none rounded-none bg-transparent" style={{ width: '1px' }}>
                    <div className="w-px h-5 bg-border" />
                </DockIcon>

                {/* Langue */}
                <DockIcon className="group relative">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center justify-center w-full h-full outline-none">
                            <Flag className="w-4 h-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="mt-2">
                            <DropdownMenuItem onClick={() => router.push('/fr/' + currentPath)}>🇫🇷 Français</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => router.push('/en/' + currentPath)}>🇬🇧 English</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => router.push('/ja/' + currentPath)}>🇯🇵 日本語</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </DockIcon>

                {/* Thème */}
                <DockIcon className="group relative">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center justify-center w-full h-full outline-none relative">
                            <Sun className="w-4 h-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="mt-2">
                            <DropdownMenuItem onClick={() => setTheme("light")}>{t('light')}</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>{t('dark')}</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>{t('system')}</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </DockIcon>
            </Dock>
        </motion.div>
    );
}
