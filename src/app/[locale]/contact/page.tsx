import type { Metadata } from "next";
import ContactClient from "./ContactClient";

const siteUrl = 'https://www.killian-colla.com';

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

  const title = titles[locale] ?? titles['en'];
  const description = descriptions[locale] ?? descriptions['en'];

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}/contact`,
      languages: {
        'x-default': `${siteUrl}/en/contact`,
        'fr': `${siteUrl}/fr/contact`,
        'en': `${siteUrl}/en/contact`,
        'ja': `${siteUrl}/ja/contact`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/contact`,
      siteName: 'Killian Colla',
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'Killian Colla - Freelance Web Developer',
        },
      ],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@_killiandev',
      images: [`${siteUrl}/og-image.png`],
    },
  };
}

export default function ContactPage() {
  return <ContactClient />;
}
