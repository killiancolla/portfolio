"use client"

import { projects } from '../../../../data/projects';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Calendar, Users } from 'lucide-react';

export default function ProjectClient() {
    const { projectid } = useParams();
    const t = useTranslations('Projects');

    const project = projects.find(p => p.code === projectid);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Projet non trouvé</h1>
                    <Link href="/">
                        <Button>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Retour à l&apos;accueil
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link href="/">
                        <Button variant="outline" className="mb-6">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Retour
                        </Button>
                    </Link>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    {project.date}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4" />
                                    {project.people} {project.people > 1 ? 'personnes' : 'personne'}
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">{project.title} — Description</h2>
                            <p className="text-lg leading-relaxed">{t(project.code + '_desc')}</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">{project.title} — Technologies</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.techno.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {project.link && (
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">{project.title} — Lien</h2>
                                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                    <Button>
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Voir le projet
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>

                    <div className="lg:sticky lg:top-12">
                        <div className="space-y-4">
                            {project.media && project.media.length > 0 ? (
                                project.media.map((media, index) => (
                                    <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                                        {media.type === 'video' ? (
                                            media.src.includes('youtube.com') || media.src.includes('youtu.be') ? (
                                                <iframe
                                                    className="w-full aspect-video"
                                                    src={media.src}
                                                    title={media.alt}
                                                    style={{ border: 0 }}
                                                    allowFullScreen
                                                />
                                            ) : (
                                                <video
                                                    className="w-full aspect-video object-cover"
                                                    controls
                                                    muted
                                                    playsInline
                                                >
                                                    <source src={`/${media.src}`} type="video/mp4" />
                                                    Votre navigateur ne supporte pas la balise vidéo.
                                                </video>
                                            )
                                        ) : (
                                            <Image
                                                className="w-full aspect-video object-cover"
                                                width={800}
                                                height={450}
                                                src={media.src.startsWith('http') ? media.src : `/${media.src}`}
                                                alt={media.alt}
                                                priority={index === 0}
                                            />
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div className="rounded-lg bg-gray-100 aspect-video flex items-center justify-center">
                                    <p className="text-gray-500">Aucun média disponible</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
