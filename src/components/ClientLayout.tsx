"use client";

import React, { ReactNode } from 'react';
import ModeBar from './ModeBar';
import { Button } from './ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface ClientLayoutProps {
    children: ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
    const pathName = usePathname();
    const t = useTranslations("Contact");

    return (
        <div className=''>
            <ModeBar />
            <Link className="max-sm:right-1/2 max-sm:translate-x-1/2 max-sm:bottom-4 fixed sm:top-4 sm:right-4 z-50" href={`/${pathName.split('/')[1]}/contact`}>
                <Button variant={'secondary'}>{t('contact-button')}</Button>
            </Link>
            {children}
        </div>
    );
};

export default ClientLayout;
