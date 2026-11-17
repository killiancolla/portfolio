import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const siteUrl = 'https://www.killian-colla.com';
const pageSlug = 'politique-de-confidentialite';

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }, { locale: 'ja' }];
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === 'fr';

  const title = isFr
    ? 'Politique de confidentialité | Killian Colla'
    : 'Privacy Policy | Killian Colla';
  const description = isFr
    ? 'Politique de confidentialité du site killian-colla.com — Comment vos données personnelles sont collectées et utilisées.'
    : 'Privacy policy for killian-colla.com — How your personal data is collected and used.';

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}/${pageSlug}`,
      languages: {
        'x-default': `${siteUrl}/fr/${pageSlug}`,
        fr: `${siteUrl}/fr/${pageSlug}`,
        en: `${siteUrl}/en/${pageSlug}`,
      },
    },
    robots: { index: false },
  };
}

export default async function PolitiqueConfidentialitePage(
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
        </div>
        <div className="max-w-3xl mx-auto">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            {isFr ? "Retour à l'accueil" : 'Back to home'}
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            {isFr ? 'Politique de confidentialité' : 'Privacy Policy'}
          </h1>
          <p className="text-muted-foreground text-sm">
            {isFr ? 'Dernière mise à jour : novembre 2026' : 'Last updated: November 2026'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose-blog">
          {isFr ? (
            <>
              <h2>1. Responsable du traitement</h2>
              <p>
                Le responsable du traitement des données personnelles collectées sur ce site est :
              </p>
              <ul>
                <li><strong>Killian Colla</strong> — Entrepreneur individuel (micro-entreprise)</li>
                <li><strong>SIRET :</strong> 931 385 421 00025</li>
                <li><strong>Adresse :</strong> 31 rue de la Villette, 06200 Nice, France</li>
                <li><strong>Email :</strong> contact@killian-colla.com</li>
              </ul>

              <h2>2. Données collectées</h2>
              <p>Ce site collecte les données suivantes :</p>
              <ul>
                <li>
                  <strong>Formulaire de contact</strong> — Nom, adresse email, sujet et message.
                  Ces données sont utilisées uniquement pour répondre à votre demande et ne sont
                  jamais transmises à des tiers.
                </li>
                <li>
                  <strong>Données de navigation</strong> — Adresse IP, pages visitées, durée de
                  visite, type de navigateur. Ces données sont collectées de manière anonyme via
                  Google Analytics et Vercel Analytics à des fins statistiques.
                </li>
                <li>
                  <strong>Cookies</strong> — Ce site utilise des cookies nécessaires au bon
                  fonctionnement du site et des cookies analytiques (Google Analytics, Google Tag
                  Manager, Vercel Analytics).
                </li>
              </ul>

              <h2>3. Finalités du traitement</h2>
              <p>Vos données sont traitées pour les finalités suivantes :</p>
              <ul>
                <li>Répondre aux demandes de contact</li>
                <li>Analyser le trafic et améliorer le site (données anonymisées)</li>
                <li>Assurer le bon fonctionnement technique du site</li>
              </ul>

              <h2>4. Durée de conservation</h2>
              <ul>
                <li>
                  <strong>Données du formulaire de contact :</strong> conservées le temps nécessaire
                  au traitement de votre demande, et supprimées au plus tard 1 an après le dernier échange.
                </li>
                <li>
                  <strong>Données analytiques :</strong> conservées selon les politiques de Google
                  Analytics (26 mois par défaut) et Vercel Analytics.
                </li>
              </ul>

              <h2>5. Vos droits (RGPD)</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez
                des droits suivants concernant vos données personnelles :
              </p>
              <ul>
                <li><strong>Droit d&apos;accès</strong> — Obtenir une copie de vos données</li>
                <li><strong>Droit de rectification</strong> — Corriger des données inexactes</li>
                <li><strong>Droit à l&apos;effacement</strong> — Demander la suppression de vos données</li>
                <li><strong>Droit d&apos;opposition</strong> — Vous opposer au traitement de vos données</li>
                <li><strong>Droit à la portabilité</strong> — Recevoir vos données dans un format structuré</li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-moi à l&apos;adresse :{' '}
                <a href="mailto:contact@killian-colla.com" className="text-primary hover:underline">
                  contact@killian-colla.com
                </a>
              </p>
              <p>
                En cas de litige, vous pouvez introduire une réclamation auprès de la{' '}
                <strong>CNIL</strong> (Commission Nationale de l&apos;Informatique et des Libertés) :{' '}
                <span className="text-muted-foreground">www.cnil.fr</span>
              </p>

              <h2>6. Cookies</h2>
              <p>
                Ce site utilise les cookies suivants :
              </p>
              <ul>
                <li>
                  <strong>Google Analytics / Google Tag Manager</strong> — Mesure d&apos;audience,
                  analyse du comportement des visiteurs. Vous pouvez vous y opposer via les paramètres
                  de votre navigateur ou en installant le module de désactivation de Google Analytics.
                </li>
                <li>
                  <strong>Vercel Analytics</strong> — Statistiques d&apos;utilisation anonymisées
                  du site.
                </li>
              </ul>
              <p>
                Vous pouvez désactiver les cookies dans les paramètres de votre navigateur. Cela
                peut toutefois affecter certaines fonctionnalités du site.
              </p>

              <h2>7. Services tiers</h2>
              <ul>
                <li>
                  <strong>Google Analytics</strong> — Politique de confidentialité :{' '}
                  <span className="text-muted-foreground">policies.google.com/privacy</span>
                </li>
                <li>
                  <strong>Vercel</strong> — Politique de confidentialité :{' '}
                  <span className="text-muted-foreground">vercel.com/legal/privacy-policy</span>
                </li>
                <li>
                  <strong>Cloudflare Turnstile</strong> — Utilisé pour la protection anti-spam
                  du formulaire de contact. Politique de confidentialité :{' '}
                  <span className="text-muted-foreground">cloudflare.com/privacypolicy</span>
                </li>
              </ul>

              <h2>8. Modifications</h2>
              <p>
                Cette politique de confidentialité peut être mise à jour à tout moment. La date de
                dernière modification est indiquée en haut de cette page.
              </p>
            </>
          ) : (
            <>
              <h2>1. Data Controller</h2>
              <p>The data controller for personal data collected on this site is:</p>
              <ul>
                <li><strong>Killian Colla</strong> — Sole trader (micro-entreprise)</li>
                <li><strong>SIRET:</strong> 931 385 421 00025</li>
                <li><strong>Address:</strong> 31 rue de la Villette, 06200 Nice, France</li>
                <li><strong>Email:</strong> contact@killian-colla.com</li>
              </ul>

              <h2>2. Data Collected</h2>
              <p>This site collects the following data:</p>
              <ul>
                <li>
                  <strong>Contact form</strong> — Name, email address, subject, and message.
                  This data is used solely to respond to your inquiry and is never shared with third parties.
                </li>
                <li>
                  <strong>Browsing data</strong> — IP address, pages visited, session duration, browser type.
                  Collected anonymously via Google Analytics and Vercel Analytics for statistical purposes.
                </li>
                <li>
                  <strong>Cookies</strong> — This site uses cookies necessary for its operation and
                  analytical cookies (Google Analytics, Google Tag Manager, Vercel Analytics).
                </li>
              </ul>

              <h2>3. Purposes of Processing</h2>
              <p>Your data is processed for the following purposes:</p>
              <ul>
                <li>Responding to contact requests</li>
                <li>Analyzing traffic and improving the site (anonymized data)</li>
                <li>Ensuring the technical operation of the site</li>
              </ul>

              <h2>4. Retention Period</h2>
              <ul>
                <li>
                  <strong>Contact form data:</strong> kept for as long as necessary to process your
                  request, and deleted no later than 1 year after the last exchange.
                </li>
                <li>
                  <strong>Analytics data:</strong> retained according to Google Analytics policies
                  (26 months by default) and Vercel Analytics.
                </li>
              </ul>

              <h2>5. Your Rights (GDPR)</h2>
              <p>
                Under the General Data Protection Regulation (GDPR), you have the following rights
                regarding your personal data:
              </p>
              <ul>
                <li><strong>Right of access</strong> — Obtain a copy of your data</li>
                <li><strong>Right of rectification</strong> — Correct inaccurate data</li>
                <li><strong>Right to erasure</strong> — Request deletion of your data</li>
                <li><strong>Right to object</strong> — Object to processing of your data</li>
                <li><strong>Right to portability</strong> — Receive your data in a structured format</li>
              </ul>
              <p>
                To exercise these rights, contact me at:{' '}
                <a href="mailto:contact@killian-colla.com" className="text-primary hover:underline">
                  contact@killian-colla.com
                </a>
              </p>
              <p>
                You may also lodge a complaint with the French data protection authority (CNIL):{' '}
                <span className="text-muted-foreground">www.cnil.fr</span>
              </p>

              <h2>6. Cookies</h2>
              <p>This site uses the following cookies:</p>
              <ul>
                <li>
                  <strong>Google Analytics / Google Tag Manager</strong> — Audience measurement and
                  visitor behavior analysis. You can opt out via your browser settings or by installing
                  the Google Analytics opt-out add-on.
                </li>
                <li>
                  <strong>Vercel Analytics</strong> — Anonymized site usage statistics.
                </li>
              </ul>
              <p>
                You can disable cookies in your browser settings. This may affect some features of the site.
              </p>

              <h2>7. Third-Party Services</h2>
              <ul>
                <li>
                  <strong>Google Analytics</strong> — Privacy policy:{' '}
                  <span className="text-muted-foreground">policies.google.com/privacy</span>
                </li>
                <li>
                  <strong>Vercel</strong> — Privacy policy:{' '}
                  <span className="text-muted-foreground">vercel.com/legal/privacy-policy</span>
                </li>
                <li>
                  <strong>Cloudflare Turnstile</strong> — Used for anti-spam protection on the
                  contact form. Privacy policy:{' '}
                  <span className="text-muted-foreground">cloudflare.com/privacypolicy</span>
                </li>
              </ul>

              <h2>8. Changes</h2>
              <p>
                This privacy policy may be updated at any time. The date of the last modification
                is indicated at the top of this page.
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
