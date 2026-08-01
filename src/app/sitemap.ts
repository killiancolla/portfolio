import { MetadataRoute } from 'next';
import { projects } from '../../data/projects';
import { getBlogPosts } from '../lib/blog';

const siteUrl = 'https://www.killian-colla.com';
const locales = ['fr', 'en', 'ja'];

const serviceSlugs = [
  'creation-site-vitrine-nice',
  'developpement-saas',
  'site-e-commerce-nice',
  'application-web-sur-mesure',
  'refonte-optimisation-site-web',
  'conseil-accompagnement-digital',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const homePages = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 1.0,
  }));

  const contactPages = locales.map((locale) => ({
    url: `${siteUrl}/${locale}/contact`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.8,
  }));

  const projectPages = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${siteUrl}/${locale}/${project.code}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  const blogListingPages = locales.map((locale) => ({
    url: `${siteUrl}/${locale}/blog`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const blogPostPages = locales.flatMap((locale) =>
    getBlogPosts(locale).map((post) => ({
      url: `${siteUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  const servicePages = locales.flatMap((locale) =>
    serviceSlugs.map((slug) => ({
      url: `${siteUrl}/${locale}/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: locale === 'fr' ? 0.9 : 0.7,
    }))
  );

  return [...homePages, ...servicePages, ...contactPages, ...projectPages, ...blogListingPages, ...blogPostPages];
}
