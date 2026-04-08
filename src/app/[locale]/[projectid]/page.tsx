import type { Metadata } from "next";
import { getTranslations } from 'next-intl/server';
import { projects } from '../../../../data/projects';
import ProjectClient from "./ProjectClient";

const siteUrl = 'https://www.killian-colla.com';

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string; projectid: string }> }
): Promise<Metadata> {
  const { locale, projectid } = await params;
  const project = projects.find(p => p.code === projectid);

  if (!project) {
    return { title: 'Projet non trouvé - Killian Colla' };
  }

  const t = await getTranslations({ locale, namespace: 'Projects' });
  const descKey = project.code + '_desc';
  const description = t(descKey);

  const title = `${project.title} | Portfolio - Killian Colla`;
  const imageUrl = project.media?.[0]?.src?.startsWith('http')
    ? project.media[0].src
    : `${siteUrl}/${project.media?.[0]?.src ?? 'og-image.png'}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}/${projectid}`,
      languages: {
        'x-default': `${siteUrl}/en/${projectid}`,
        'fr': `${siteUrl}/fr/${projectid}`,
        'en': `${siteUrl}/en/${projectid}`,
        'ja': `${siteUrl}/ja/${projectid}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/${projectid}`,
      siteName: 'Killian Colla',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.media?.[0]?.alt ?? project.title,
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
      images: [imageUrl],
    },
  };
}

export default function ProjectPage() {
  return <ProjectClient />;
}
