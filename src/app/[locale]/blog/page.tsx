import { getBlogPosts } from '@/lib/blog';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const siteUrl = 'https://www.killian-colla.com';

const titles: Record<string, string> = {
  fr: "Blog - Développeur Web Freelance Nice | Killian Colla",
  en: "Blog - Freelance Web Developer Nice | Killian Colla",
  ja: "ブログ - Killian Colla",
};

const descriptions: Record<string, string> = {
  fr: "Articles et conseils sur la création de site internet à Nice et dans les Alpes-Maritimes. Développeur web freelance, SEO, tarifs et conseils pour votre projet web.",
  en: "Articles and tips on web development, SEO and digital presence. Freelance web developer based in Nice, France.",
  ja: "ウェブ開発に関する記事とヒント。",
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
      canonical: `${siteUrl}/${locale}/blog`,
      languages: {
        'x-default': `${siteUrl}/en/blog`,
        'fr': `${siteUrl}/fr/blog`,
        'en': `${siteUrl}/en/blog`,
        'ja': `${siteUrl}/ja/blog`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/blog`,
      siteName: 'Killian Colla',
      images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
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

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const posts = getBlogPosts(locale);
  const t = await getTranslations({ locale, namespace: 'Blog' });

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 px-6">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full" />
        </div>
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4 border border-primary/30 px-3 py-1 rounded-full">
            {t('title')}
          </span>
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            {locale === 'fr' ? (
              <>Conseils & <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:200%_100%] bg-clip-text text-transparent">ressources web</span></>
            ) : locale === 'ja' ? (
              <>ウェブ <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:200%_100%] bg-clip-text text-transparent">開発ブログ</span></>
            ) : (
              <>Web <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:200%_100%] bg-clip-text text-transparent">dev & tips</span></>
            )}
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">{t('subtitle')}</p>
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        {posts.length === 0 ? (
          <p className="text-muted-foreground">{t('empty')}</p>
        ) : (
          <div className="flex flex-col gap-5">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/${locale}/blog/${post.slug}`}
                className="group relative bg-card border border-border hover:border-primary/40 rounded-sm p-6 transition-all hover:shadow-[0_0_30px_-5px] hover:shadow-primary/20 overflow-hidden"
              >
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Number */}
                <span className="absolute top-5 right-5 text-5xl font-black text-border/40 select-none leading-none group-hover:text-primary/10 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors pr-12 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all">
                      {locale === 'fr' ? 'Lire' : 'Read'}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
