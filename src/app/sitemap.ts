import { MetadataRoute } from 'next';
import { projects } from '../../data/projects';

const siteUrl = 'https://www.killian-colla.com';
const locales = ['fr', 'en', 'ja'];

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
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    }))
  );

  return [...homePages, ...contactPages, ...projectPages];
}
