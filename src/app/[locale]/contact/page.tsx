import type { Metadata } from "next";
import ContactClient from "./ContactClient";

const siteUrl = 'https://killian-colla.com';

const titles: Record<string, string> = {
  fr: "Contact - Killian Colla | Développeur Web Freelance",
  en: "Contact - Killian Colla | Freelance Web Developer",
  ja: "お問い合わせ - Killian Colla | フリーランスウェブ開発者",
};

const descriptions: Record<string, string> = {
  fr: "Contactez Killian Colla, développeur web freelance. Discutons de votre projet web, site vitrine, SaaS ou application sur mesure.",
  en: "Contact Killian Colla, freelance web developer. Let's discuss your web project, showcase site, SaaS or custom application.",
  ja: "フリーランスウェブ開発者のKillian Collaにお問い合わせください。",
};

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: titles[locale] ?? titles['en'],
    description: descriptions[locale] ?? descriptions['en'],
    alternates: {
      canonical: `${siteUrl}/${locale}/contact`,
      languages: {
        'fr': `${siteUrl}/fr/contact`,
        'en': `${siteUrl}/en/contact`,
        'ja': `${siteUrl}/ja/contact`,
      },
    },
  };
}

export default function ContactPage() {
  return <ContactClient />;
}
