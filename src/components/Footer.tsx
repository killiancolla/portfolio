"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, MessageCircle, Twitter } from "lucide-react"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"

export default function Footer({ className }: { className?: string }) {
    const pathName = usePathname();
    const locale = pathName.split('/')[1] || 'fr';
    const t = useTranslations('Footer');
    const tNav = useTranslations('NavBar');

    const navLinks = [
        { section: 'home', label: tNav('home') },
        { section: 'about', label: tNav('about') },
        { section: 'services', label: tNav('service') },
        { section: 'skills', label: tNav('skills') },
        { section: 'projects', label: tNav('projects') },
        { section: 'portfolio', label: tNav('portfolio') },
    ];

    const socialLinks = [
        { href: "https://wa.me/33695041166", icon: <MessageCircle className="w-4 h-4" />, label: "WhatsApp" },
        { href: "https://x.com/_killiandev", icon: <Twitter className="w-4 h-4" />, label: "X / Twitter" },
        { href: "https://www.linkedin.com/in/killian-colla-46b48b207/", icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
        { href: "https://github.com/killiancolla", icon: <Github className="w-4 h-4" />, label: "GitHub" },
    ];

    return (
        <footer className={`w-full bg-card border-t border-border mt-10 ${className ?? ''}`}>
            <div className="max-w-screen-2xl mx-auto px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/logo.png"
                                width={40}
                                height={40}
                                alt="Killian Colla logo"
                                className="w-10 h-10 rounded-sm"
                            />
                            <div>
                                <p className="font-bold text-sm">Killian Colla</p>
                                <p className="text-xs text-muted-foreground">Développeur Web Freelance</p>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-6 max-w-xs">
                            {t('tagline')}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="font-semibold text-xs uppercase tracking-widest text-primary">{t('nav_title')}</p>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                            {navLinks.map(link => (
                                <Link
                                    key={link.section}
                                    href={`/${locale}#${link.section}`}
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="font-semibold text-xs uppercase tracking-widest text-primary">{t('social_title')}</p>
                        <div className="flex flex-col gap-2.5">
                            {socialLinks.map(link => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                                >
                                    {link.icon}
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <div className="border-t border-border">
                <div className="max-w-screen-2xl mx-auto px-8 py-4 flex justify-between items-center max-sm:flex-col max-sm:gap-1 max-sm:text-center">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Killian Colla — {t('rights')}
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Built with Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
