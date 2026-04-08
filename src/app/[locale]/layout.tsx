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

  return {
    title: titles[locale] ?? titles['en'],
    description: descriptions[locale] ?? descriptions['en'],
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        'x-default': `${siteUrl}/en`,
        'fr': `${siteUrl}/fr`,
        'en': `${siteUrl}/en`,
        'ja': `${siteUrl}/ja`,
      },
    },
  };
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { children } = props;

  const { locale } = await props.params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="dark" style={{ colorScheme: "dark" }}>
      <GoogleTagManager gtmId="GTM-52DG8CCK" />
      <GoogleAnalytics gaId="G-LDVMHZZR03" />

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
