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
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"] });

const siteUrl = 'https://www.killian-colla.com';

const titles: Record<string, string> = {
  fr: "Killian Colla - Développeur Web Freelance | Nice, Alpes-Maritimes (06)",
  en: "Killian Colla - Freelance Web Developer | Nice, France",
  ja: "Killian Colla - フリーランスウェブ開発者 | ニース",
};

const descriptions: Record<string, string> = {
  fr: "Développeur web freelance basé à Nice (06), spécialisé en ReactJS, NextJS et NodeJS. Création de sites vitrine, SaaS et applications web sur mesure pour les Alpes-Maritimes et au-delà.",
  en: "Freelance web developer based in Nice, France, specialized in ReactJS, NextJS and NodeJS. I build modern, high-performance and SEO-optimized websites.",
  ja: "フランス・ニース在住のKillianです。ReactJS、NextJS、NodeJSを専門とするフリーランスのウェブ開発者です。",
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
    "@type": "ProfessionalService",
    "name": "Killian Colla",
    "description": descriptions[locale] ?? descriptions['en'],
    "url": `${siteUrl}/${locale}`,
    "image": `${siteUrl}/me.webp`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nice",
      "addressRegion": "Alpes-Maritimes",
      "postalCode": "06000",
      "addressCountry": "FR",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7102,
      "longitude": 7.2620,
    },
    "areaServed": [
      { "@type": "City", "name": "Nice" },
      { "@type": "AdministrativeArea", "name": "Alpes-Maritimes" },
      { "@type": "Country", "name": "France" },
    ],
    "employee": {
      "@type": "Person",
      "name": "Killian Colla",
      "jobTitle": jobTitles[locale] ?? jobTitles['en'],
      "image": `${siteUrl}/me.webp`,
      "sameAs": [
        "https://github.com/killiancolla",
        "https://www.linkedin.com/in/killian-colla-46b48b207/",
        "https://x.com/_killiandev",
      ],
      "knowsAbout": ["React", "Next.js", "Node.js", "TypeScript", "JavaScript"],
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": jobTitles[locale] ?? jobTitles['en'],
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": locale === 'fr' ? "Création de site vitrine" : "Showcase Website" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": locale === 'fr' ? "Développement SaaS" : "SaaS Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": locale === 'fr' ? "Application web sur mesure" : "Custom Web Application" } },
      ],
    },
  };

  return (
    <html lang={locale} className="dark" style={{ colorScheme: "dark" }}>
      <GoogleTagManager gtmId="GTM-52DG8CCK" />
      <GoogleAnalytics gaId="G-LDVMHZZR03" />

      <body className={`${poppins.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
        <Analytics />
      </body>
    </html>
  );
}
