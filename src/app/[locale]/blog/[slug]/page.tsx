import { getBlogPost, getBlogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { marked } from 'marked';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';

const siteUrl = 'https://www.killian-colla.com';

export async function generateStaticParams() {
  const locales = ['fr', 'en', 'ja'];
  return locales.flatMap(locale =>
    getBlogPosts(locale).map(post => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string; slug: string }> }
): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(locale, slug);
  if (!post) return { title: 'Article introuvable - Killian Colla' };

  return {
    title: `${post.title} | Killian Colla`,
    description: post.description,
    alternates: {
      canonical: `${siteUrl}/${locale}/blog/${slug}`,
      languages: {
        'x-default': `${siteUrl}/en/blog/${slug}`,
        'fr': `${siteUrl}/fr/blog/${slug}`,
        'en': `${siteUrl}/en/blog/${slug}`,
        'ja': `${siteUrl}/ja/blog/${slug}`,
      },
    },
    openGraph: {
      title: `${post.title} | Killian Colla`,
      description: post.description,
      url: `${siteUrl}/${locale}/blog/${slug}`,
      siteName: 'Killian Colla',
      images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: post.title }],
      locale,
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Killian Colla`,
      description: post.description,
      creator: '@_killiandev',
      images: [`${siteUrl}/og-image.png`],
    },
  };
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ locale: string; slug: string }> }
) {
  const { locale, slug } = await params;
  const post = getBlogPost(locale, slug);
  if (!post) notFound();

  const htmlContent = await marked(post.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": "Killian Colla",
      "url": `${siteUrl}/${locale}`,
    },
    "publisher": {
      "@type": "Person",
      "name": "Killian Colla",
      "url": siteUrl,
    },
    "url": `${siteUrl}/${locale}/blog/${slug}`,
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section className="relative overflow-hidden pt-24 pb-12 px-6 border-b border-border">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[250px] bg-primary/8 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[150px] bg-violet-500/5 blur-[80px] rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            {locale === 'fr' ? 'Retour au blog' : 'Back to blog'}
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl">
            {post.description}
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              {new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
              <Clock className="w-3.5 h-3.5 text-primary" />
              {post.readTime}
            </span>
            <span className="text-sm text-muted-foreground bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium border border-primary/20">
              Killian Colla
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose-blog" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-sm border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-violet-500/5 p-8">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-3xl rounded-full -z-0" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              {locale === 'fr' ? 'Votre projet' : 'Your project'}
            </p>
            <p className="text-2xl font-bold mb-2">
              {locale === 'fr' ? 'Un projet web à Nice ?' : 'A web project in Nice?'}
            </p>
            <p className="text-muted-foreground text-sm mb-6 max-w-md">
              {locale === 'fr'
                ? 'Je suis développeur web freelance basé dans les Alpes-Maritimes. Discutons de votre projet, devis gratuit sous 24h.'
                : 'Freelance web developer based in Nice, France. Let\'s discuss your project — free quote within 24h.'}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {locale === 'fr' ? 'Discutons de votre projet' : "Let's discuss your project"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
