import { Flag, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useTranslations } from 'next-intl'

export default function ModeBar() {

    const t = useTranslations('NavBar')

    const router = useRouter();
    const pathname = usePathname();
    const currentPath = pathname.split('/').slice(2).join('/');
    const { setTheme } = useTheme()


    return (
        <div className='flex flex-col gap-2 fixed top-2 right-2 z-10'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild className=''>
                    <Button aria-label="Language toggle" variant="outline" size="icon">
                        <Flag className="h-[1.2rem] w-[1.2rem]" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => router.push('/fr/' + currentPath)}>
                        Français
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push('/en/' + currentPath)}>
                        English
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push('/ja/' + currentPath)}>
                        日本語
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger asChild className=''>
                    <Button variant="outline" size="icon" aria-label="Theme toggle">
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
    )
}