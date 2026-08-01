import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const siteUrl = 'https://www.killian-colla.com';
const pageSlug = 'application-web-sur-mesure';

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }, { locale: 'ja' }];
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === 'fr';

  const title = isFr
    ? 'Développement d\'Application Web Sur Mesure | Killian Colla'
    : 'Custom Web Application Development | Killian Colla';
  const description = isFr
    ? "Développeur freelance spécialisé en applications web sur mesure. Outils internes, espaces clients, plateformes métier. Stack React, Next.js, Node.js. Devis gratuit."
    : 'Freelance developer building custom web applications: internal tools, client portals, business platforms. React, Next.js, Node.js.';

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}/${pageSlug}`,
      languages: {
        'x-default': `${siteUrl}/en/${pageSlug}`,
        fr: `${siteUrl}/fr/${pageSlug}`,
        en: `${siteUrl}/en/${pageSlug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/${pageSlug}`,
      siteName: 'Killian Colla',
      images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: title }],
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

export default async function ApplicationWebSurMesurePage(
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;
  const isFr = locale === 'fr';

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden pt-24 pb-12 px-6 border-b border-border">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[250px] bg-primary/8 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[150px] bg-violet-500/5 blur-[80px] rounded-full" />
        </div>
        <div className="max-w-3xl mx-auto">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            {isFr ? "Retour à l'accueil" : 'Back to home'}
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            {isFr
              ? 'Développement d\'application web sur mesure — Des outils taillés pour votre métier'
              : 'Custom Web Application Development — Tools Built for Your Business'}
          </h1>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl">
            {isFr
              ? "Votre activité nécessite un outil spécifique que les solutions du marché ne couvrent pas ? Je développe des applications web sur mesure, conçues précisément pour vos processus métier, votre équipe et vos utilisateurs."
              : "Does your business need a tool that off-the-shelf solutions can't provide? I build custom web applications designed precisely for your workflows, your team, and your users."}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose-blog">
          {isFr ? (
            <>
              <h2>Quand choisir une application web sur mesure ?</h2>
              <p>
                Les solutions génériques (Excel, outils no-code, logiciels standardisés)
                ont leurs limites. Une application web sur mesure est le bon choix quand :
              </p>
              <ul>
                <li>
                  Vos processus sont trop spécifiques pour les outils standards
                </li>
                <li>
                  Vous perdez du temps à faire communiquer entre eux des outils qui ne
                  s&apos;intègrent pas
                </li>
                <li>
                  Vous avez besoin d&apos;un espace client ou d&apos;un portail partenaire
                  personnalisé
                </li>
                <li>
                  Votre équipe utilise des spreadsheets complexes qu&apos;il faudrait
                  transformer en vrai outil
                </li>
                <li>
                  Vous voulez automatiser des tâches répétitives et réduire les erreurs
                  humaines
                </li>
              </ul>

              <h2>Types d&apos;applications web développées</h2>
              <p>
                <strong>Outils internes</strong> — Tableaux de bord de gestion, outils de
                suivi, interfaces d&apos;administration. Conçus pour vos équipes, optimisés
                pour l&apos;efficacité et la rapidité.
              </p>
              <p>
                <strong>Espaces clients et portails partenaires</strong> — Zone sécurisée
                où vos clients ou partenaires accèdent à leurs données, documents,
                commandes ou statut de projet. Authentification sécurisée, droits
                d&apos;accès granulaires.
              </p>
              <p>
                <strong>Systèmes de réservation et de planification</strong> — Applications
                de prise de rendez-vous, gestion de planning, réservation de ressources.
                Intégration calendrier (Google Calendar, Cal.com).
              </p>
              <p>
                <strong>Plateformes de contenu</strong> — CMS sur mesure, plateformes
                éditoriales, outils de gestion de contenu adaptés à vos besoins
                spécifiques.
              </p>
              <p>
                <strong>Applications avec IA</strong> — Intégration d&apos;intelligence
                artificielle pour l&apos;analyse de données, la génération de contenu, les
                recommandations ou les chatbots. Utilisation des APIs OpenAI et Anthropic.
              </p>

              <h2>Mon processus de développement</h2>
              <p>
                Je travaille en <strong>développement agile</strong> avec des sprints courts
                (1-2 semaines) et des démonstrations régulières. Vous voyez
                l&apos;avancement en temps réel et pouvez ajuster les priorités à chaque
                étape.
              </p>
              <p>Étapes d&apos;un projet type :</p>
              <ol>
                <li>
                  <strong>Atelier de cadrage</strong> — cartographie des besoins, des user
                  stories, de l&apos;architecture
                </li>
                <li>
                  <strong>Maquettes UX</strong> — validation des interfaces avant le
                  développement
                </li>
                <li>
                  <strong>Développement par sprints</strong> — fonctionnalités livrées
                  progressivement
                </li>
                <li>
                  <strong>Tests et recette</strong> — validation avec vos utilisateurs
                  finaux
                </li>
                <li>
                  <strong>Déploiement et formation</strong> — mise en production et prise
                  en main
                </li>
              </ol>

              <h2>Stack technique</h2>
              <ul>
                <li>
                  <strong>Frontend</strong> : React, Next.js, TypeScript, Tailwind CSS
                </li>
                <li>
                  <strong>Backend</strong> : Node.js, API REST, tRPC, Prisma
                </li>
                <li>
                  <strong>Base de données</strong> : PostgreSQL, MySQL, MongoDB
                </li>
                <li>
                  <strong>Auth</strong> : Clerk, Auth.js, JWT
                </li>
                <li>
                  <strong>Infra</strong> : Vercel, Railway, AWS
                </li>
                <li>
                  <strong>Tests</strong> : Jest, Playwright
                </li>
              </ul>

              <h2>Pourquoi travailler avec un freelance ?</h2>
              <p>
                Contrairement à une agence, vous avez un{' '}
                <strong>interlocuteur unique</strong> qui comprend l&apos;ensemble du projet
                — du design à l&apos;infrastructure. Pas de réunions de &quot;brief&quot;
                interminables, pas de perte d&apos;information entre les équipes. Je deviens
                un partenaire technique de votre équipe.
              </p>
              <p>
                Je travaille avec des entreprises de toutes tailles, de la startup aux PME
                régionales des Alpes-Maritimes et au-delà.
              </p>
            </>
          ) : (
            <>
              <h2>When to choose custom development</h2>
              <p>
                Custom web apps are the right choice when off-the-shelf tools don&apos;t
                fit your workflow, you need a client portal, you want to automate repetitive
                tasks, or your team is drowning in complex spreadsheets.
              </p>

              <h2>What I build</h2>
              <ul>
                <li>
                  <strong>Internal tools</strong> — Management dashboards, tracking tools,
                  admin interfaces
                </li>
                <li>
                  <strong>Client portals</strong> — Secure areas for customers to access
                  their data and documents
                </li>
                <li>
                  <strong>Booking systems</strong> — Appointment scheduling, resource
                  reservation, calendar integration
                </li>
                <li>
                  <strong>Content platforms</strong> — Custom CMS and editorial tools
                </li>
                <li>
                  <strong>AI-powered apps</strong> — OpenAI/Claude integration for
                  analysis, generation, and automation
                </li>
              </ul>

              <h2>Process</h2>
              <p>
                I work in agile sprints with regular demos. You see progress in real time
                and can adjust priorities at each stage.
              </p>

              <h2>Tech stack</h2>
              <p>
                React, Next.js, TypeScript, Node.js, PostgreSQL, Prisma, Clerk auth,
                Vercel/Railway deployment.
              </p>
              <p>
                Need a custom tool for your business? Let&apos;s define your requirements
                together.
              </p>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-sm border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-violet-500/5 p-8">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-3xl rounded-full -z-0" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              {isFr ? 'Votre projet' : 'Your project'}
            </p>
            <p className="text-2xl font-bold mb-2">
              {isFr ? 'Un projet web à Nice ?' : 'A web project in Nice?'}
            </p>
            <p className="text-muted-foreground text-sm mb-6 max-w-md">
              {isFr
                ? 'Je suis développeur web freelance basé dans les Alpes-Maritimes. Discutons de votre projet, devis gratuit sous 24h.'
                : "Freelance web developer based in Nice, France. Let's discuss your project — free quote within 24h."}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {isFr ? 'Discutons de votre projet' : "Let's discuss your project"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
