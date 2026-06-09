"use client"

import { BookOpen, Briefcase, CpuIcon, Flag, FolderOpenDot, House, Menu, Moon, ScanSearch, School, Sun, X } from 'lucide-react';
import { Dock, DockIcon } from "@/components/magicui/dock";
import { useTranslations } from 'next-intl'
import { handleMouseEnter } from '../../utils/handleMouseEnter';
import { motion, AnimatePresence } from 'framer-motion'
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
    const { setTheme, theme } = useTheme();
    const t = useTranslations('NavBar');
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    // Close mobile menu on scroll
    useEffect(() => {
        const handleScroll = () => setMobileMenuOpen(false);
        if (mobileMenuOpen) {
            window.addEventListener('scroll', handleScroll, { passive: true });
        }
        return () => window.removeEventListener('scroll', handleScroll);
    }, [mobileMenuOpen]);

    const handleNav = (section: string) => {
        setMobileMenuOpen(false);
        if (pathName.split('/').length === 3) {
            router.push('/' + pathName.split('/')[1] + '#' + section);
        } else {
            handleMouseEnter(section);
        }
    };

    return (
        <>
            {/* Desktop dock */}
            <motion.div
                className="hidden md:block"
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

                    <DockIcon className="w-px h-5 bg-border pointer-events-none rounded-none bg-transparent" style={{ width: '1px' }}>
                        <div className="w-px h-5 bg-border" />
                    </DockIcon>

                    <DockIcon
                        className="group relative transition-colors"
                        onClick={() => router.push('/' + pathName.split('/')[1] + '/blog')}
                    >
                        <BookOpen className="w-4 h-4" />
                        <p className='whitespace-nowrap transition-all duration-300 group-hover:opacity-100 opacity-0 absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs'>
                            {t('blog')}
                        </p>
                    </DockIcon>

                    <DockIcon className="w-px h-5 bg-border pointer-events-none rounded-none bg-transparent" style={{ width: '1px' }}>
                        <div className="w-px h-5 bg-border" />
                    </DockIcon>

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

            {/* Mobile burger nav */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50">
                <motion.div
                    className="flex items-center justify-between px-4 py-3 bg-background/90 backdrop-blur-md border-b border-border"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <span className="font-bold text-sm text-primary">Killian Colla</span>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 rounded-md hover:bg-card transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </motion.div>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
                        >
                            <div className="px-4 py-3 flex flex-col gap-1">
                                {navItems.map(({ icon: Icon, section, labelKey }) => (
                                    <button
                                        key={section}
                                        onClick={() => handleNav(section)}
                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors text-left w-full ${
                                            activeSection === section
                                                ? 'text-primary bg-primary/10'
                                                : 'text-foreground hover:bg-card'
                                        }`}
                                    >
                                        <Icon className="w-4 h-4 shrink-0" />
                                        {t(labelKey)}
                                    </button>
                                ))}

                                <button
                                    onClick={() => { router.push('/' + pathName.split('/')[1] + '/blog'); setMobileMenuOpen(false); }}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-foreground hover:bg-card transition-colors text-left w-full"
                                >
                                    <BookOpen className="w-4 h-4 shrink-0" />
                                    {t('blog')}
                                </button>

                                <div className="h-px bg-border my-2" />

                                {/* Language switcher */}
                                <div className="flex gap-2 px-3">
                                    {[
                                        { code: 'fr', flag: '🇫🇷', label: 'FR' },
                                        { code: 'en', flag: '🇬🇧', label: 'EN' },
                                        { code: 'ja', flag: '🇯🇵', label: 'JA' },
                                    ].map(({ code, flag, label }) => (
                                        <button
                                            key={code}
                                            onClick={() => { router.push('/' + code + '/' + currentPath); setMobileMenuOpen(false); }}
                                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs border transition-colors ${
                                                pathName.startsWith('/' + code)
                                                    ? 'border-primary text-primary bg-primary/10'
                                                    : 'border-border hover:border-primary/50'
                                            }`}
                                        >
                                            {flag} {label}
                                        </button>
                                    ))}
                                </div>

                                {/* Theme switcher */}
                                <div className="flex gap-2 px-3 pb-2">
                                    {[
                                        { value: 'light', label: t('light') },
                                        { value: 'dark', label: t('dark') },
                                        { value: 'system', label: t('system') },
                                    ].map(({ value, label }) => (
                                        <button
                                            key={value}
                                            onClick={() => { setTheme(value); setMobileMenuOpen(false); }}
                                            className={`px-3 py-1.5 rounded-md text-xs border transition-colors ${
                                                theme === value
                                                    ? 'border-primary text-primary bg-primary/10'
                                                    : 'border-border hover:border-primary/50'
                                            }`}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
