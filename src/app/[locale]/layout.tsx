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

export const metadata: Metadata = {
  title: "Killian Colla - Développeur Web",
  description: "Je m'appelle Killian et je suis développeur web spécialisé dans les technologies ReactJS, NextJS, NodeJS.",
};

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
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
