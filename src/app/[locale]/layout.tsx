import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import ClientLayout from "@/components/ClientLayout";
import NavBar from "@/components/NavBar";
import { Poppins } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"] });

const siteUrl = 'https://www.killian-colla.com';

const titles: Record<string, string> = {
  fr: "Killian Colla - Développeur Web Freelance",
  en: "Killian Colla - Freelance Web Developer",
  ja: "Killian Colla - フリーランスウェブ開発者",
};

const descriptions: Record<string, string> = {
  fr: "Je m'appelle Killian, développeur web freelance spécialisé en ReactJS, NextJS et NodeJS. Création de sites modernes, performants et optimisés SEO.",
  en: "I'm Killian, a freelance web developer specialized in ReactJS, NextJS and NodeJS. I build modern, high-performance and SEO-optimized websites.",
  ja: "私はKillianです。ReactJS、NextJS、NodeJSを専門とするフリーランスのウェブ開発者です。",
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
      canonical: `${siteUrl}/${locale}`,
      languages: {
        'x-default': `${siteUrl}/en`,
        'fr': `${siteUrl}/fr`,
        'en': `${siteUrl}/en`,
        'ja': `${siteUrl}/ja`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}`,
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

const jobTitles: Record<string, string> = {
  fr: "Développeur Web Freelance",
  en: "Freelance Web Developer",
  ja: "フリーランスウェブ開発者",
};

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { children } = props;

  const { locale } = await props.params;
  const messages = await getMessages({ locale });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Killian Colla",
    "jobTitle": jobTitles[locale] ?? jobTitles['en'],
    "url": `${siteUrl}/${locale}`,
    "image": `${siteUrl}/me.webp`,
    "sameAs": [
      "https://github.com/killiancolla",
      "https://www.linkedin.com/in/killian-colla-46b48b207/",
      "https://x.com/_killiandev",
    ],
    "knowsAbout": ["React", "Next.js", "Node.js", "TypeScript", "JavaScript"],
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": jobTitles[locale] ?? jobTitles['en'],
        "description": descriptions[locale] ?? descriptions['en'],
      },
    },
  };

  return (
    <html lang={locale} className="dark" style={{ colorScheme: "dark" }}>
      <GoogleTagManager gtmId="GTM-52DG8CCK" />
      <GoogleAnalytics gaId="G-LDVMHZZR03" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <body className={`${poppins.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <ClientLayout>
              <NavBar />
              {children}
              <Footer />
            </ClientLayout>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
