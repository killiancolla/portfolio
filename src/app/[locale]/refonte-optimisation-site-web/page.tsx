import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const siteUrl = 'https://www.killian-colla.com';
const pageSlug = 'refonte-optimisation-site-web';

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }, { locale: 'ja' }];
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === 'fr';

  const title = isFr
    ? 'Refonte et Optimisation de Site Web à Nice | Killian Colla'
    : 'Website Redesign & Optimization in Nice, France | Killian Colla';
  const description = isFr
    ? "Refonte de site internet, audit SEO et optimisation des performances web à Nice et dans les Alpes-Maritimes. Améliorez votre référencement et votre expérience utilisateur."
    : 'Website redesign, SEO audit, and performance optimization services. Improve your search rankings and user experience.';

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

export default async function RefonteOptimisationSiteWebPage(
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
              ? 'Refonte et optimisation de site web — Auditez, améliorez, performez'
              : 'Website Redesign & Optimization — Audit, Improve, Perform'}
          </h1>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl">
            {isFr
              ? "Votre site existe déjà mais il est lent, mal référencé ou visuellement dépassé ? Une refonte ou une optimisation ciblée peut transformer vos performances sans repartir de zéro. J'audite, je diagnostique et j'améliore les sites web des entreprises à Nice et dans les Alpes-Maritimes."
              : "Your site already exists but it's slow, poorly ranked, or visually outdated? A redesign or targeted optimization can transform your performance without starting from scratch. I audit, diagnose, and improve websites."}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose-blog">
          {isFr ? (
            <>
              <h2>Pourquoi refondre ou optimiser votre site ?</h2>
              <p>
                Un site web n&apos;est pas statique. Les technologies évoluent, les
                algorithmes Google changent, les habitudes des utilisateurs se transforment.
                Si votre site a plus de 3-4 ans, il est probablement :
              </p>
              <ul>
                <li>
                  <strong>Lent</strong> : un site qui met plus de 3 secondes à charger perd
                  50% de ses visiteurs
                </li>
                <li>
                  <strong>Non optimisé mobile</strong> : Google pénalise les sites qui ne
                  s&apos;adaptent pas aux smartphones
                </li>
                <li>
                  <strong>Mal référencé</strong> : absence de balises meta, structure HTML
                  incorrecte, pas de données structurées
                </li>
                <li>
                  <strong>Visuellement daté</strong> : design qui date des années
                  2010-2015, pas de cohérence avec votre image de marque actuelle
                </li>
              </ul>

              <h2>Ce que comprend un audit de site web</h2>
              <p>
                Avant toute refonte, je réalise un audit complet de votre site existant :
              </p>
              <p>
                <strong>Audit technique</strong> — Vitesse de chargement (Core Web Vitals),
                erreurs 404, redirections, sécurité HTTPS, crawlabilité.
              </p>
              <p>
                <strong>Audit SEO</strong> — Analyse des mots-clés positionnés, des pages
                indexées, des backlinks, de la structure des URLs, des balises title/meta.
              </p>
              <p>
                <strong>Audit UX</strong> — Parcours utilisateur, taux de rebond, pages de
                sortie, clarté des calls-to-action.
              </p>
              <p>
                <strong>Audit concurrentiel</strong> — Comparaison avec les sites
                concurrents qui se positionnent sur vos mots-clés cibles.
              </p>
              <p>
                Vous recevez un rapport détaillé avec toutes les problématiques identifiées,
                classées par priorité d&apos;impact.
              </p>

              <h2>Optimisation des performances (sans refonte)</h2>
              <p>
                Parfois, il n&apos;est pas nécessaire de tout refaire. Une optimisation
                ciblée peut suffire à améliorer significativement vos performances :
              </p>
              <ul>
                <li>Compression et optimisation des images (WebP, lazy loading)</li>
                <li>Minification du CSS et JavaScript</li>
                <li>Mise en cache et optimisation du serveur</li>
                <li>Correction des Core Web Vitals (LCP, FID, CLS)</li>
                <li>Amélioration du maillage interne</li>
                <li>Ajout des balises Schema.org manquantes</li>
                <li>Optimisation des balises title et meta description</li>
              </ul>

              <h2>Refonte complète de site</h2>
              <p>
                Pour les sites qui nécessitent une refonte profonde, je prends en charge
                l&apos;ensemble du projet :
              </p>
              <ol>
                <li>
                  <strong>Analyse de l&apos;existant</strong> — audit + benchmark
                  concurrentiel
                </li>
                <li>
                  <strong>Stratégie de contenu</strong> — quelles pages garder, modifier,
                  créer ou supprimer
                </li>
                <li>
                  <strong>Design</strong> — nouvelle charte graphique ou respect de
                  l&apos;existante
                </li>
                <li>
                  <strong>Développement</strong> — migration technique vers Next.js,
                  optimisation de chaque page
                </li>
                <li>
                  <strong>Redirection 301</strong> — préservation du SEO existant pendant
                  la migration
                </li>
                <li>
                  <strong>Suivi post-lancement</strong> — monitoring des positions et
                  corrections
                </li>
              </ol>
              <p>
                La migration d&apos;un site existant vers Next.js entraîne systématiquement
                une amélioration des performances (PageSpeed) et du référencement naturel.
              </p>

              <h2>Résultats attendus</h2>
              <p>
                Selon l&apos;état de départ de votre site, une refonte ou optimisation bien
                menée peut entraîner :
              </p>
              <ul>
                <li>Amélioration du score PageSpeed de 30 à 90+ points</li>
                <li>Gain de positions sur les mots-clés cibles en 2-4 mois</li>
                <li>Réduction du taux de rebond de 15 à 30%</li>
                <li>Augmentation des demandes de contact entrantes</li>
              </ul>
              <p>
                Vous êtes basé à Nice ou dans les Alpes-Maritimes et souhaitez faire
                auditer votre site ? Contactez-moi pour un diagnostic gratuit.
              </p>
              <p>
                Pour en savoir plus sur ce que comprend un bon site web professionnel,
                consultez notre guide :{' '}
                <Link
                  href="/fr/blog/creation-site-internet-nice"
                  className="text-primary underline hover:opacity-80"
                >
                  Créer un site internet à Nice : guide complet 2025
                </Link>
                .
              </p>
            </>
          ) : (
            <>
              <h2>Why redesign or optimize your website?</h2>
              <p>
                A website has a lifespan. If your site is 3-4 years old, it&apos;s likely
                slow, poorly ranked on mobile searches, and visually outdated. A redesign or
                targeted optimization can transform results without starting from scratch.
              </p>

              <h2>What a site audit covers</h2>
              <ul>
                <li>
                  <strong>Technical audit</strong> — Page speed (Core Web Vitals), 404
                  errors, HTTPS, crawlability
                </li>
                <li>
                  <strong>SEO audit</strong> — Keyword rankings, indexed pages, backlink
                  profile, URL structure, meta tags
                </li>
                <li>
                  <strong>UX audit</strong> — Bounce rate, user journeys, call-to-action
                  clarity
                </li>
                <li>
                  <strong>Competitor analysis</strong> — Benchmarking against sites ranking
                  for your target keywords
                </li>
              </ul>

              <h2>Optimization without full redesign</h2>
              <p>Sometimes targeted improvements are enough:</p>
              <ul>
                <li>Image optimization (WebP, lazy loading)</li>
                <li>Core Web Vitals fixes (LCP, FID, CLS)</li>
                <li>Schema.org structured data</li>
                <li>Internal linking improvements</li>
                <li>Title and meta description optimization</li>
              </ul>

              <h2>Full website redesign</h2>
              <p>
                For sites needing a complete overhaul, I manage the entire project: audit,
                content strategy, design, development in Next.js, 301 redirects to preserve
                SEO, and post-launch monitoring.
              </p>
              <p>
                Have a site that needs improvement? Let&apos;s start with a free diagnostic.
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
