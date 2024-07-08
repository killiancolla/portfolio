import { CpuIcon, Flag, FolderOpenDot, House, Moon, ScanSearch, School, Sun } from 'lucide-react';
import { Dock, DockIcon } from "@/components/magicui/dock";
import { useEffect, useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { useTheme } from "next-themes"
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation';

export default function NavBar() {

    const router = useRouter()

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

    const { setTheme } = useTheme()

    return (
        <>
            <div className='flex flex-col gap-2 fixed top-2 right-2 z-10'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className=''>
                        <Button variant="outline" size="icon">
                            <Flag className="h-[1.2rem] w-[1.2rem]" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => router.push('/fr')}>
                            Français
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => router.push('/en')}>
                            English
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => router.push('/jp')}>
                            日本語
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className=''>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">{t('toggle')}</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            {t('light')}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            {t('dark')}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            {t('system')}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
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
        </>
    )
}