import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const siteUrl = 'https://www.killian-colla.com';
const pageSlug = 'creation-site-vitrine-nice';

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }, { locale: 'ja' }];
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === 'fr';

  const title = isFr
    ? 'Création de site vitrine à Nice — Alpes-Maritimes (06) | Killian Colla'
    : 'Showcase Website Creation in Nice, France | Killian Colla';
  const description = isFr
    ? 'Développeur freelance à Nice, je crée des sites vitrines modernes et optimisés SEO pour les entreprises des Alpes-Maritimes (06). Design sur mesure, devis gratuit sous 24h.'
    : 'Freelance web developer in Nice creating modern, SEO-optimized showcase websites for businesses on the French Riviera. Free quote within 24h.';

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

export default async function CreationSiteVitrineNicePage(
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
              ? 'Création de site vitrine à Nice et dans les Alpes-Maritimes'
              : 'Showcase Website Creation in Nice, French Riviera'}
          </h1>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl">
            {isFr
              ? "Vous êtes entrepreneur, artisan, commerçant ou professionnel libéral dans le 06 ? Un site vitrine professionnel est votre meilleure carte de visite en ligne. Découvrez comment je conçois des sites vitrines modernes, rapides et optimisés pour le référencement local à Nice et dans toutes les Alpes-Maritimes."
              : "Are you a business owner or freelancer on the French Riviera? A professional showcase website is your best online business card. Here's how I create modern, fast, and SEO-optimized showcase websites in Nice and across the Côte d'Azur."}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose-blog">
          {isFr ? (
            <>
              <h2>Pourquoi un site vitrine est indispensable à Nice en 2025</h2>
              <p>
                La région Alpes-Maritimes concentre des milliers de TPE, artisans et
                indépendants — restaurateurs sur la Promenade des Anglais, artisans à Vence,
                avocats à Antibes, thérapeutes à Cannes. Pourtant, beaucoup restent
                invisibles en ligne.
              </p>
              <p>
                97% des consommateurs recherchent une entreprise sur Google avant de la
                contacter. Sans site web, vous laissez ces clients à vos concurrents. Un
                site vitrine professionnel vous rend visible 24h/24, 7j/7, et crédibilise
                immédiatement votre activité.
              </p>
              <p>
                <Link
                  href="/fr/blog/creation-site-internet-nice"
                  className="text-primary underline hover:opacity-80"
                >
                  Lire notre guide complet sur la création de site web à Nice
                </Link>
              </p>

              <h2>Ce qu&apos;inclut votre site vitrine</h2>
              <p>
                <strong>Design sur mesure</strong> — Chaque site est conçu spécifiquement
                pour votre activité et votre identité visuelle. Pas de template générique,
                pas de site qui ressemble à celui du voisin.
              </p>
              <p>
                <strong>SEO local optimisé</strong> — J&apos;intègre vos mots-clés cibles
                (votre métier + Nice, votre métier + 06, votre métier + Alpes-Maritimes)
                dans la structure, les balises meta et les contenus. Votre site sera indexé
                et positionné sur Google pour vos requêtes locales.
              </p>
              <p>
                <strong>Adapté aux mobiles</strong> — Plus de 60% des recherches locales se
                font depuis un smartphone. Votre site sera parfaitement responsive et rapide
                sur tous les appareils.
              </p>
              <p>
                <strong>Formulaire de contact</strong> — Vos prospects vous contactent
                directement depuis le site. Les demandes arrivent dans votre boîte mail en
                temps réel.
              </p>
              <p>
                <strong>Hébergement et mise en ligne inclus</strong> — Je m&apos;occupe de
                tout : domaine, hébergement performant, certificat SSL.
              </p>

              <h2>Technologies utilisées</h2>
              <p>
                Je développe les sites vitrines avec <strong>Next.js</strong> et{' '}
                <strong>React</strong>, les technologies les plus modernes du marché pour
                créer des sites ultra-rapides, sécurisés et excellents en SEO. Ces
                technologies sont utilisées par Vercel, Netflix, GitHub et des milliers
                d&apos;entreprises dans le monde.
              </p>
              <p>
                Résultat : des scores Google PageSpeed proches de 100/100, un chargement
                quasi-instantané, et un avantage concurrentiel réel sur le référencement.
              </p>

              <h2>Tarifs pour un site vitrine à Nice</h2>
              <p>
                Travailler avec un développeur freelance local est généralement 30 à 50%
                moins cher qu&apos;une agence web de Nice, à qualité équivalente ou
                supérieure — car vous travaillez directement avec le développeur, sans
                intermédiaire.
              </p>
              <p>Fourchettes indicatives :</p>
              <ul>
                <li>
                  <strong>Site vitrine simple</strong> (5-10 pages) : à partir de 800 €
                </li>
                <li>
                  <strong>Site vitrine avec blog SEO</strong> : à partir de 1 500 €
                </li>
                <li>
                  <strong>Site vitrine avec fonctionnalités avancées</strong> (réservation
                  en ligne, galerie, multilingue) : sur devis
                </li>
              </ul>

              <h2>Pour qui ?</h2>
              <p>Ce service s&apos;adresse aux :</p>
              <ul>
                <li>Restaurateurs, hôteliers, cafés, bars dans le 06</li>
                <li>
                  Artisans (plombiers, électriciens, peintres…) dans les Alpes-Maritimes
                </li>
                <li>
                  Professions libérales (médecins, avocats, architectes, coaches)
                </li>
                <li>
                  Boutiques locales souhaitant une présence en ligne sans e-commerce
                </li>
                <li>
                  Consultants et freelances basés à Nice ou sur la Côte d&apos;Azur
                </li>
              </ul>

              <h2>Comment ça se passe ?</h2>
              <ol>
                <li>
                  <strong>Appel découverte</strong> (30 min gratuit) — on discute de votre
                  activité, vos objectifs, vos concurrents locaux
                </li>
                <li>
                  <strong>Devis détaillé</strong> — vous recevez une proposition chiffrée
                  sous 24h
                </li>
                <li>
                  <strong>Design et développement</strong> — je crée votre site avec vos
                  retours à chaque étape
                </li>
                <li>
                  <strong>Mise en ligne</strong> — votre site est lancé avec toutes les
                  bases SEO en place
                </li>
              </ol>
              <p>
                Vous êtes basé à Nice, Cannes, Antibes, Monaco, Menton, Grasse, Vence ou
                ailleurs dans le 06 ? Discutons de votre projet.
              </p>
            </>
          ) : (
            <>
              <h2>Why a showcase website matters</h2>
              <p>
                In today&apos;s digital landscape, a professional website is essential for
                any business. Whether you&apos;re a restaurant owner in Nice, a consultant
                in Cannes, or a craftsman in Antibes, having a modern, fast website makes
                you visible to potential customers searching online.
              </p>

              <h2>What&apos;s included</h2>
              <ul>
                <li>
                  <strong>Custom design</strong> tailored to your brand and business
                </li>
                <li>
                  <strong>Local SEO optimization</strong> targeting relevant keywords for
                  your area
                </li>
                <li>
                  <strong>Mobile-first</strong> development for optimal performance on all
                  devices
                </li>
                <li>
                  <strong>Contact form</strong> so leads can reach you directly
                </li>
                <li>
                  <strong>Hosting and deployment</strong> handled end-to-end
                </li>
              </ul>

              <h2>Technologies</h2>
              <p>
                Built with Next.js and React — the industry standard for fast, SEO-friendly
                websites. Expect near-perfect Google PageSpeed scores and excellent search
                engine visibility.
              </p>

              <h2>Pricing</h2>
              <p>
                Working with a freelance developer is typically 30–50% more cost-effective
                than an agency, with the same or better quality. Prices start from €800 for
                a simple showcase site.
              </p>
              <p>Ready to build your showcase website? Let&apos;s discuss your project.</p>
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
