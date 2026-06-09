import type { Metadata } from "next";
import BookingClient from "./BookingClient";

const siteUrl = 'https://www.killian-colla.com';

const titles: Record<string, string> = {
    fr: "Réserver un appel - Killian Colla | Développeur Web Freelance",
    en: "Book a call - Killian Colla | Freelance Web Developer",
    ja: "通話を予約 - Killian Colla | フリーランスウェブ開発者",
};

const descriptions: Record<string, string> = {
    fr: "Réservez un appel gratuit de 30 minutes avec Killian Colla, développeur web freelance. Discutons de votre projet.",
    en: "Book a free 30-minute call with Killian Colla, freelance web developer. Let's talk about your project.",
    ja: "Killian Collaとの無料30分通話を予約しましょう。",
};

const headings: Record<string, { title: string; subtitle: string }> = {
    fr: { title: "Réservez un appel gratuit", subtitle: "30 minutes pour parler de votre projet — sans engagement." },
    en: { title: "Book a free call", subtitle: "30 minutes to talk about your project — no commitment." },
    ja: { title: "無料通話を予約", subtitle: "プロジェクトについて話す30分 — コミットメントなし。" },
};

export async function generateMetadata(
    { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
    const { locale } = await params;

    return {
        title: titles[locale] ?? titles['en'],
        description: descriptions[locale] ?? descriptions['en'],
        alternates: {
            canonical: `${siteUrl}/${locale}/booking`,
            languages: {
                'x-default': `${siteUrl}/en/booking`,
                'fr': `${siteUrl}/fr/booking`,
                'en': `${siteUrl}/en/booking`,
                'ja': `${siteUrl}/ja/booking`,
            },
        },
    };
}

export default async function BookingPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const h = headings[locale] ?? headings['en'];

    return (
        <div className="flex flex-col items-center pt-20 pb-10 w-11/12 max-w-3xl mx-auto gap-6 min-h-screen">
            <div className="text-center">
                <h1 className="text-3xl font-bold">{h.title}</h1>
                <p className="text-muted-foreground text-sm mt-2">{h.subtitle}</p>
            </div>
            <div className="w-full">
                <BookingClient />
            </div>
        </div>
    );
}
