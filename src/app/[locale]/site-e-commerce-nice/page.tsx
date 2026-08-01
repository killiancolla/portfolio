import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const siteUrl = 'https://www.killian-colla.com';
const pageSlug = 'site-e-commerce-nice';

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }, { locale: 'ja' }];
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === 'fr';

  const title = isFr
    ? 'Création de site e-commerce à Nice — Boutique en ligne Alpes-Maritimes | Killian Colla'
    : 'E-commerce Website Creation in Nice, France | Killian Colla';
  const description = isFr
    ? 'Développeur e-commerce freelance à Nice. Je crée des boutiques en ligne performantes et sécurisées pour les commerçants des Alpes-Maritimes (06). Devis gratuit.'
    : 'Freelance e-commerce developer in Nice. I build fast, secure online stores for businesses on the French Riviera.';

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

export default async function SiteECommerceNicePage(
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
              ? 'Création de site e-commerce à Nice — Vendez en ligne dans les Alpes-Maritimes'
              : 'E-commerce Website Creation in Nice, French Riviera'}
          </h1>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl">
            {isFr
              ? 'Vous souhaitez vendre vos produits en ligne ? Je crée des boutiques e-commerce performantes, sécurisées et optimisées pour le référencement à Nice et dans tout le département des Alpes-Maritimes.'
              : 'Looking to sell your products online? I build fast, secure, and SEO-optimized e-commerce stores for businesses across the French Riviera.'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose-blog">
          {isFr ? (
            <>
              <h2>Pourquoi créer une boutique en ligne dans le 06 ?</h2>
              <p>
                Le commerce en ligne ne cesse de croître : en France, plus de 42 millions
                de consommateurs achètent sur internet. Pour les commerçants de Nice,
                Cannes, Antibes ou ailleurs dans les Alpes-Maritimes, une boutique en ligne
                permet de :
              </p>
              <ul>
                <li>
                  Vendre 24h/24, 7j/7, même quand votre boutique physique est fermée
                </li>
                <li>
                  Toucher des clients au-delà du département ou de la région PACA
                </li>
                <li>Réduire les coûts liés aux points de vente physiques</li>
                <li>
                  Gérer votre stock et vos commandes depuis un tableau de bord centralisé
                </li>
              </ul>

              <h2>Ce qu&apos;inclut votre site e-commerce</h2>
              <p>
                <strong>Catalogue produits</strong> — Fiches produits optimisées SEO,
                gestion des variantes (tailles, couleurs), galerie photo, descriptions.
              </p>
              <p>
                <strong>Panier et tunnel d&apos;achat</strong> — Expérience d&apos;achat
                fluide et optimisée pour maximiser le taux de conversion. Panier persistant,
                codes promo, frais de port configurables.
              </p>
              <p>
                <strong>Paiement sécurisé</strong> — Intégration Stripe pour les cartes
                bancaires, Apple Pay, Google Pay. Paiements 3D Secure, factures
                automatiques.
              </p>
              <p>
                <strong>Gestion des commandes</strong> — Tableau de bord pour suivre vos
                commandes, gérer les retours, mettre à jour les stocks.
              </p>
              <p>
                <strong>SEO e-commerce</strong> — Structure optimisée pour le référencement
                : URLs propres, métadonnées produits, Schema.org Product, sitemap XML
                automatique.
              </p>
              <p>
                <strong>Design responsive</strong> — Votre boutique est parfaitement
                utilisable sur mobile et tablette, car la majorité des achats en ligne se
                font depuis un smartphone.
              </p>

              <h2>Quelles technologies pour votre e-commerce ?</h2>
              <p>
                Selon votre budget et vos besoins, deux approches :
              </p>
              <p>
                <strong>Next.js + Stripe</strong> (recommandé pour les boutiques sur
                mesure) — Développement entièrement personnalisé, performances maximales,
                contrôle total. Idéal si vous avez des besoins spécifiques (location,
                réservation, produits configurables).
              </p>
              <p>
                <strong>Shopify</strong> (idéal pour démarrer rapidement) — Solution clé en
                main, gestion simplifiée, centaines d&apos;apps. Idéal pour les boutiques
                classiques avec un catalogue de produits standard.
              </p>
              <p>
                Je vous conseille la solution la plus adaptée à votre situation lors de
                notre premier appel.
              </p>

              <h2>Pour quel type de boutique ?</h2>
              <p>Ce service s&apos;adresse aux :</p>
              <ul>
                <li>
                  Artisans et créateurs vendant des produits faits main (poterie, bijoux,
                  textile…)
                </li>
                <li>
                  Commerçants de Nice souhaitant digitaliser leur activité
                </li>
                <li>
                  Producteurs locaux (vins, huiles, produits régionaux des
                  Alpes-Maritimes)
                </li>
                <li>Boutiques de mode, décoration, accessoires</li>
                <li>
                  Marques locales souhaitant vendre directement sans marketplace
                </li>
              </ul>

              <h2>Tarifs e-commerce</h2>
              <ul>
                <li>
                  <strong>Boutique simple</strong> (moins de 50 produits, Stripe) : à
                  partir de 2 000 €
                </li>
                <li>
                  <strong>Boutique avancée</strong> (Shopify personnalisé, intégrations,
                  SEO approfondi) : à partir de 3 500 €
                </li>
                <li>
                  <strong>E-commerce sur mesure</strong> (fonctionnalités spécifiques,
                  abonnements, configurateur) : sur devis
                </li>
              </ul>
              <p>
                Vous êtes commerçant à Nice, Cannes, Antibes, Grasse ou ailleurs dans le 06
                et souhaitez lancer votre boutique en ligne ? Contactez-moi pour un devis
                gratuit.
              </p>
            </>
          ) : (
            <>
              <h2>What&apos;s included in your e-commerce site</h2>
              <ul>
                <li>
                  <strong>Product catalog</strong> with SEO-optimized product pages
                </li>
                <li>
                  <strong>Shopping cart and checkout</strong> optimized for conversions
                </li>
                <li>
                  <strong>Secure payment</strong> via Stripe (cards, Apple Pay, Google Pay)
                </li>
                <li>
                  <strong>Order management</strong> dashboard
                </li>
                <li>
                  <strong>SEO optimization</strong> for product pages and categories
                </li>
                <li>
                  <strong>Mobile-first</strong> design
                </li>
              </ul>

              <h2>Technologies</h2>
              <p>
                <strong>Next.js + Stripe</strong> for fully custom stores with maximum
                performance and control.
              </p>
              <p>
                <strong>Shopify</strong> for quick launch with standard catalog management.
              </p>
              <p>
                I&apos;ll recommend the right solution for your needs during our discovery
                call.
              </p>

              <h2>Pricing</h2>
              <ul>
                <li>Simple store (under 50 products): from €2,000</li>
                <li>
                  Advanced store (custom integrations, deep SEO): from €3,500
                </li>
                <li>
                  Custom e-commerce (subscriptions, configurators): quote on request
                </li>
              </ul>
              <p>Ready to launch your online store? Let&apos;s talk.</p>
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
