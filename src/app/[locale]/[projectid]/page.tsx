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

  return {
    title: `${project.title} - Killian Colla`,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}/${projectid}`,
      languages: {
        'fr': `${siteUrl}/fr/${projectid}`,
        'en': `${siteUrl}/en/${projectid}`,
        'ja': `${siteUrl}/ja/${projectid}`,
      },
    },
  };
}

export default function ProjectPage() {
  return <ProjectClient />;
}
