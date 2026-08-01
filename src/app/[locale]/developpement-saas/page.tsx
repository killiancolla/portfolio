import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const siteUrl = 'https://www.killian-colla.com';
const pageSlug = 'developpement-saas';

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }, { locale: 'ja' }];
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === 'fr';

  const title = isFr
    ? 'Développement SaaS Freelance — Créez votre plateforme sur mesure | Killian Colla'
    : 'Freelance SaaS Development — Build Your Custom Platform | Killian Colla';
  const description = isFr
    ? "Développeur freelance spécialisé en SaaS. Je crée des plateformes web performantes, des outils d'automatisation et des applications SaaS sur mesure. Basé à Nice."
    : 'Freelance developer specialized in SaaS platforms. I build high-performance web applications, automation tools, and custom SaaS products.';

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

export default async function DeveloppementSaasPage(
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
              ? 'Développement SaaS freelance — Transformez votre idée en plateforme'
              : 'Freelance SaaS Development — Turn Your Idea Into a Product'}
          </h1>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl">
            {isFr
              ? "Vous avez une idée de produit SaaS, un outil d'automatisation ou une plateforme web à créer ? Je suis développeur freelance spécialisé dans la conception et le développement de solutions SaaS, de la maquette à la mise en production."
              : "Have an idea for a SaaS product, automation tool, or web platform? I'm a freelance developer specialized in building SaaS solutions from concept to production."}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose-blog">
          {isFr ? (
            <>
              <h2>Qu&apos;est-ce qu&apos;un SaaS et pourquoi en développer un ?</h2>
              <p>
                Un <strong>SaaS</strong> (Software as a Service) est une application web
                accessible depuis un navigateur, sans installation — pensez à Notion, Slack,
                Stripe ou Figma. C&apos;est le modèle dominant du logiciel moderne :
                abonnement mensuel, mises à jour automatiques, accessibilité depuis
                n&apos;importe quel appareil.
              </p>
              <p>Développer un SaaS permet de :</p>
              <ul>
                <li>Créer une source de revenus récurrents (MRR)</li>
                <li>Automatiser des processus métier coûteux en temps</li>
                <li>
                  Proposer un outil différenciateur à vos clients ou collaborateurs
                </li>
                <li>
                  Scaler votre activité sans multiplier les coûts linéairement
                </li>
              </ul>

              <h2>Ce que je développe</h2>
              <p>
                <strong>Plateformes SaaS B2B et B2C</strong> — Outils métier, espaces
                clients, tableaux de bord analytiques, plateformes de gestion. Développés
                avec React, Next.js et Node.js pour des performances maximales.
              </p>
              <p>
                <strong>Systèmes d&apos;authentification et de paiement</strong> —
                Intégration de Stripe pour les abonnements, gestion des rôles utilisateurs,
                portails clients sécurisés.
              </p>
              <p>
                <strong>Automatisations et intégrations API</strong> — Connexion à des
                services tiers (CRM, emailing, webhooks, APIs REST). J&apos;automatise les
                processus répétitifs pour vous faire gagner du temps.
              </p>
              <p>
                <strong>Tableaux de bord et analytics</strong> — Interfaces de suivi des
                données, reportings en temps réel, visualisations interactives.
              </p>
              <p>
                <strong>Intelligence artificielle intégrée</strong> — Intégration
                d&apos;IA (OpenAI, Anthropic) pour enrichir vos fonctionnalités : génération
                de contenu, analyse de données, chatbots, recommandations.
              </p>

              <h2>Mon approche du développement SaaS</h2>
              <p>
                Je travaille en mode <strong>MVP-first</strong> : on définit le périmètre
                minimal viable, on le développe rapidement, on le met en production — et on
                itère en fonction des retours utilisateurs. Cette approche réduit les risques
                et accélère le time-to-market.
              </p>
              <p>Chaque projet suit ces étapes :</p>
              <ol>
                <li>
                  <strong>Cadrage</strong> — définition des fonctionnalités, des user
                  stories, de l&apos;architecture technique
                </li>
                <li>
                  <strong>Design UI/UX</strong> — prototypage des interfaces principales
                </li>
                <li>
                  <strong>Développement</strong> — itérations en sprints avec démos
                  régulières
                </li>
                <li>
                  <strong>Déploiement</strong> — mise en production sur Vercel, Railway ou
                  votre infrastructure
                </li>
                <li>
                  <strong>Suivi</strong> — maintenance, évolutions et support post-lancement
                </li>
              </ol>

              <h2>Stack technique</h2>
              <p>Pour les projets SaaS, j&apos;utilise :</p>
              <ul>
                <li>
                  <strong>Frontend</strong> : Next.js, React, TypeScript, Tailwind CSS
                </li>
                <li>
                  <strong>Backend</strong> : Node.js, API REST, tRPC
                </li>
                <li>
                  <strong>Base de données</strong> : PostgreSQL (Neon, Supabase), MongoDB
                </li>
                <li>
                  <strong>Auth</strong> : Clerk, NextAuth, Auth.js
                </li>
                <li>
                  <strong>Paiement</strong> : Stripe (abonnements, one-shot, facturation)
                </li>
                <li>
                  <strong>IA</strong> : OpenAI API, Anthropic Claude API
                </li>
                <li>
                  <strong>Infra</strong> : Vercel, Railway, Docker
                </li>
              </ul>

              <h2>Exemples de projets réalisés</h2>
              <p>
                <strong>YouBotBuster</strong> — SaaS de détection de bots YouTube.
                Interface client, abonnements Stripe, API YouTube, tableau de bord
                analytique. Développé avec 2 personnes en 2024.
              </p>
              <p>
                <strong>MeetSponsors</strong> — Plateforme d&apos;algorithme IA pour
                matcher sponsors et événements. Python, machine learning, interface React.
              </p>
              <p>
                <strong>Qovery AI DevOps Copilot</strong> — Copilote IA pour les équipes
                DevOps. TypeScript, React, intégration LLM.
              </p>
              <p>
                Ces projets illustrent ma capacité à livrer des produits SaaS complets, de
                l&apos;idée initiale à la mise en production.
              </p>

              <h2>Tarifs</h2>
              <p>
                Le développement SaaS est facturé selon la complexité du projet. Pour un MVP
                fonctionnel (authentification, paiement Stripe, 3-5 fonctionnalités core),
                comptez généralement entre 3 000 € et 10 000 €.
              </p>
              <p>
                Je propose également un accompagnement en régie (taux journalier) pour les
                projets en cours nécessitant des évolutions régulières.
              </p>
            </>
          ) : (
            <>
              <h2>What I build</h2>
              <p>
                I specialize in building complete SaaS products: B2B/B2C platforms, client
                portals, automation tools, dashboards, and AI-powered applications.
              </p>

              <h2>Tech stack</h2>
              <ul>
                <li>
                  <strong>Frontend</strong>: Next.js, React, TypeScript, Tailwind CSS
                </li>
                <li>
                  <strong>Backend</strong>: Node.js, REST APIs, tRPC
                </li>
                <li>
                  <strong>Database</strong>: PostgreSQL (Neon, Supabase), MongoDB
                </li>
                <li>
                  <strong>Auth</strong>: Clerk, NextAuth
                </li>
                <li>
                  <strong>Payments</strong>: Stripe (subscriptions, one-time, billing)
                </li>
                <li>
                  <strong>AI</strong>: OpenAI API, Anthropic Claude API
                </li>
                <li>
                  <strong>Infra</strong>: Vercel, Railway, Docker
                </li>
              </ul>

              <h2>My approach</h2>
              <p>
                I work MVP-first: define the minimal scope, build it fast, ship it, then
                iterate based on user feedback. This reduces risk and accelerates
                time-to-market.
              </p>

              <h2>Previous SaaS projects</h2>
              <p>
                <strong>YouBotBuster</strong> — YouTube bot detection SaaS with Stripe
                subscriptions and analytics dashboard.
              </p>
              <p>
                <strong>MeetSponsors</strong> — AI-powered platform matching sponsors and
                events.
              </p>
              <p>
                <strong>Qovery AI Copilot</strong> — AI assistant for DevOps teams built
                with TypeScript and React.
              </p>
              <p>Interested in building your SaaS? Let&apos;s discuss your idea.</p>
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
