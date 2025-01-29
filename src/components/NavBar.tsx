import { Briefcase, CpuIcon, FolderOpenDot, House, ScanSearch, School } from 'lucide-react';
import { Dock, DockIcon } from "@/components/magicui/dock";
import { useTranslations } from 'next-intl'
import { handleMouseEnter } from '../../utils/handleMouseEnter';
import { motion } from 'framer-motion'

export default function NavBar() {

    const t = useTranslations('NavBar')

    return (
        <motion.div initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}>
            <Dock className="fixed top-0 h-10 left-1/2 -translate-x-1/2 z-10">
                <DockIcon className='group relative' onClick={() => handleMouseEnter('home')}>
                    <House />
                    <p className='whitespace-nowrap transition-all duration-300 group-hover:opacity-100 opacity-0 absolute -bottom-6 left-1/2 -translate-x-1/2'>{t('home')}</p>
                </DockIcon>
                <DockIcon className='group relative' onClick={() => handleMouseEnter('about')}>
                    <ScanSearch />
                    <p className='whitespace-nowrap transition-all duration-300 group-hover:opacity-100 opacity-0 absolute -bottom-6 left-1/2 -translate-x-1/2'>{t('about')}</p>
                </DockIcon>
                <DockIcon className='group relative' onClick={() => handleMouseEnter('services')}>
                    <Briefcase />
                    <p className='whitespace-nowrap transition-all duration-300 group-hover:opacity-100 opacity-0 absolute -bottom-6 left-1/2 -translate-x-1/2'>{t('service')}</p>
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
        </motion.div >
    )
}