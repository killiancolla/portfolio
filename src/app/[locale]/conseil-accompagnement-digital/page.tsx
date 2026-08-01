import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const siteUrl = 'https://www.killian-colla.com';
const pageSlug = 'conseil-accompagnement-digital';

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }, { locale: 'ja' }];
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === 'fr';

  const title = isFr
    ? 'Conseil et Accompagnement Digital Freelance | Killian Colla — Nice'
    : 'Digital Consulting & Technical Advisory | Killian Colla';
  const description = isFr
    ? "Développeur freelance à Nice proposant conseil technique, audit digital et accompagnement sur mesure pour vos projets web. Cadrage, architecture, choix technologiques."
    : 'Freelance technical consultant based in Nice. Strategy, architecture consulting, technology choices, and project support for web projects.';

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

export default async function ConseilAccompagnementDigitalPage(
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
              ? 'Conseil et accompagnement digital — Votre partenaire technique freelance'
              : 'Digital Consulting & Technical Advisory — Your Freelance Tech Partner'}
          </h1>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl">
            {isFr
              ? "Vous avez un projet web mais ne savez pas par où commencer ? Votre équipe a besoin d'un regard externe sur son architecture technique ? Je propose des missions de conseil, d'audit et d'accompagnement pour vous aider à prendre les bonnes décisions et avancer avec confiance."
              : "Have a web project but don't know where to start? Your team needs an external technical perspective? I offer consulting, auditing, and advisory services to help you make the right decisions and move forward with confidence."}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose-blog">
          {isFr ? (
            <>
              <h2>Pourquoi faire appel à un consultant technique freelance ?</h2>
              <p>
                Les projets web échouent rarement à cause de mauvaises intentions — ils
                échouent à cause de mauvaises décisions techniques prises trop tôt, de
                technologies mal choisies, d&apos;architectures qui ne tiennent pas à
                l&apos;échelle, ou d&apos;un manque de vision claire sur les priorités.
              </p>
              <p>Un consultant technique freelance vous apporte :</p>
              <ul>
                <li>
                  Un regard <strong>neutre et indépendant</strong>, sans conflit
                  d&apos;intérêt avec un outil ou un fournisseur particulier
                </li>
                <li>
                  Une <strong>expertise technique généraliste</strong> (frontend, backend,
                  architecture, SEO, performance)
                </li>
                <li>
                  Une <strong>disponibilité flexible</strong> adaptée à vos besoins
                  ponctuels ou récurrents
                </li>
                <li>
                  Un <strong>langage accessible</strong> pour traduire les enjeux techniques
                  en décisions business
                </li>
              </ul>

              <h2>Types de missions de conseil</h2>
              <p>
                <strong>Cadrage de projet</strong> — Vous avez une idée et souhaitez
                structurer votre projet web avant de recruter ou de faire appel à une
                agence. Je vous aide à définir le périmètre, les fonctionnalités
                prioritaires, l&apos;architecture technique et le budget réaliste.
              </p>
              <p>
                <strong>Audit de stratégie digitale</strong> — Analyse de votre présence en
                ligne : site web, SEO, présence sur les réseaux, cohérence de marque.
                Identification des priorités pour améliorer votre visibilité et votre
                conversion.
              </p>
              <p>
                <strong>Choix technologiques</strong> — Vous hésitez entre Next.js et
                Gatsby, entre Shopify et WooCommerce, entre SQL et NoSQL ? Je vous aide à
                choisir la stack la plus adaptée à vos contraintes et objectifs.
              </p>
              <p>
                <strong>Revue de code et architecture</strong> — Analyse du code existant
                de votre équipe, identification des dettes techniques, recommandations
                d&apos;amélioration. Idéal avant un recrutement ou une refonte.
              </p>
              <p>
                <strong>Accompagnement à la mise en œuvre</strong> — Je reste disponible
                pendant votre projet pour répondre aux questions techniques de votre équipe
                ou de votre prestataire, valider les choix d&apos;implémentation et
                anticiper les problèmes.
              </p>
              <p>
                <strong>Formation et montée en compétences</strong> — Sessions de formation
                sur React, Next.js, TypeScript ou les bonnes pratiques web pour vos équipes
                techniques.
              </p>

              <h2>Mon profil</h2>
              <p>
                5 ans d&apos;expérience en développement web full-stack, spécialisé React,
                Next.js et Node.js. Diplômé d&apos;un Master en IA &amp; Big Data (IPSSI
                Paris). J&apos;ai travaillé sur des projets variés : SaaS, e-commerce,
                applications d&apos;entreprise, sites vitrines — ce qui me donne une vision
                large des enjeux techniques.
              </p>
              <p>
                Basé à Nice, je travaille en présentiel dans les Alpes-Maritimes (Nice,
                Cannes, Antibes, Monaco) et en remote pour le reste de la France et
                l&apos;international.
              </p>

              <h2>Modalités</h2>
              <p>
                <strong>Mission ponctuelle</strong> — Audit, cadrage ou conseil sur une
                question spécifique. Facturation à la demi-journée ou à la journée.
              </p>
              <p>
                <strong>Accompagnement récurrent</strong> — Disponibilité hebdomadaire ou
                mensuelle pour répondre aux questions, valider les choix et guider votre
                équipe. Forfait mensuel.
              </p>
              <p>
                <strong>Mission en régie</strong> — Intégration dans votre équipe à temps
                partiel ou plein pour la durée d&apos;un projet. TJM selon profil et
                complexité.
              </p>
              <p>
                Vous avez un projet à cadrer, une architecture à valider, ou une équipe à
                accompagner ? Discutons de vos besoins.
              </p>
            </>
          ) : (
            <>
              <h2>Types of consulting missions</h2>
              <ul>
                <li>
                  <strong>Project scoping</strong> — Define scope, priority features,
                  technical architecture, and realistic budget before you hire or build
                </li>
                <li>
                  <strong>Digital strategy audit</strong> — Review your online presence:
                  website, SEO, brand consistency, conversion funnel
                </li>
                <li>
                  <strong>Technology choices</strong> — Next.js vs alternatives, headless
                  CMS options, database selection, deployment strategies
                </li>
                <li>
                  <strong>Code &amp; architecture review</strong> — Analyze existing code,
                  identify technical debt, recommend improvements
                </li>
                <li>
                  <strong>Implementation support</strong> — Available during your project to
                  answer technical questions and validate decisions
                </li>
                <li>
                  <strong>Team training</strong> — React, Next.js, TypeScript, and web best
                  practices
                </li>
              </ul>

              <h2>My background</h2>
              <p>
                5 years of full-stack web development experience, specialized in React,
                Next.js, and Node.js. MSc in AI &amp; Big Data (IPSSI Paris). Experience
                across SaaS, e-commerce, enterprise apps, and showcase sites.
              </p>
              <p>
                Based in Nice, available in-person across the French Riviera and remotely
                across France and internationally.
              </p>

              <h2>Engagement models</h2>
              <ul>
                <li>
                  <strong>One-off mission</strong> — Audit, scoping, or specific advisory.
                  Billed per half-day or day.
                </li>
                <li>
                  <strong>Recurring advisory</strong> — Weekly or monthly availability.
                  Monthly retainer.
                </li>
                <li>
                  <strong>Staff augmentation</strong> — Part-time or full-time integration
                  in your team for a project duration.
                </li>
              </ul>
              <p>
                Need a technical partner for your project? Let&apos;s discuss your needs.
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
