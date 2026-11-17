import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const siteUrl = 'https://www.killian-colla.com';
const pageSlug = 'mentions-legales';

export async function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }, { locale: 'ja' }];
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === 'fr';

  const title = isFr
    ? 'Mentions légales | Killian Colla'
    : 'Legal Notice | Killian Colla';
  const description = isFr
    ? 'Mentions légales du site killian-colla.com — Killian Colla, développeur web freelance à Nice.'
    : 'Legal notice for killian-colla.com — Killian Colla, freelance web developer in Nice, France.';

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

export default async function MentionsLegalesPage(
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
            {isFr ? 'Mentions légales' : 'Legal Notice'}
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
              <h2>1. Éditeur du site</h2>
              <p>
                Le présent site <strong>killian-colla.com</strong> est édité par :
              </p>
              <ul>
                <li><strong>Nom :</strong> Killian Colla</li>
                <li><strong>Forme juridique :</strong> Entrepreneur individuel (micro-entreprise)</li>
                <li><strong>SIREN :</strong> 931 385 421</li>
                <li><strong>SIRET (siège) :</strong> 931 385 421 00025</li>
                <li><strong>N° TVA intracommunautaire :</strong> FR77931385421</li>
                <li><strong>Code APE :</strong> 62.01Z — Programmation informatique</li>
                <li><strong>Adresse :</strong> 31 rue fontaine de la ville, 06200 Nice, France</li>
                <li><strong>Téléphone :</strong> +33 6 95 04 11 66</li>
                <li><strong>Email :</strong> contact@killian-colla.com</li>
                <li><strong>Directeur de la publication :</strong> Killian Colla</li>
              </ul>

              <h2>2. Hébergeur</h2>
              <p>Le site est hébergé par :</p>
              <ul>
                <li><strong>Société :</strong> Vercel Inc.</li>
                <li><strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</li>
                <li><strong>Site web :</strong> https://vercel.com</li>
              </ul>

              <h2>3. Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble des contenus présents sur ce site (textes, images, graphismes, logo, icônes, code source)
                sont la propriété exclusive de Killian Colla, sauf mention contraire. Toute reproduction, distribution,
                modification ou utilisation à des fins commerciales est strictement interdite sans autorisation écrite
                préalable.
              </p>

              <h2>4. Responsabilité</h2>
              <p>
                Killian Colla s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site.
                Toutefois, il ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à
                disposition. En conséquence, Killian Colla décline toute responsabilité pour toute imprécision,
                inexactitude ou omission portant sur des informations disponibles sur ce site.
              </p>

              <h2>5. Liens hypertextes</h2>
              <p>
                Ce site peut contenir des liens vers d&apos;autres sites internet. Killian Colla n&apos;exerce aucun contrôle
                sur ces sites et n&apos;assume aucune responsabilité quant à leur contenu. La présence de ces liens ne
                constitue pas une validation de ces sites ou de leur contenu.
              </p>

              <h2>6. Cookies</h2>
              <p>
                Ce site utilise des cookies à des fins d&apos;analyse d&apos;audience (Google Analytics, Vercel Analytics).
                Pour en savoir plus sur l&apos;utilisation de vos données personnelles, consultez notre{' '}
                <Link href={`/${locale}/politique-de-confidentialite`} className="text-primary hover:underline">
                  politique de confidentialité
                </Link>.
              </p>

              <h2>7. Droit applicable</h2>
              <p>
                Le présent site et les présentes mentions légales sont soumis au droit français. En cas de litige,
                les tribunaux français seront seuls compétents.
              </p>
            </>
          ) : (
            <>
              <h2>1. Site Publisher</h2>
              <p>
                This website <strong>killian-colla.com</strong> is published by:
              </p>
              <ul>
                <li><strong>Name:</strong> Killian Colla</li>
                <li><strong>Legal form:</strong> Sole trader (micro-entreprise)</li>
                <li><strong>SIREN:</strong> 931 385 421</li>
                <li><strong>SIRET (head office):</strong> 931 385 421 00025</li>
                <li><strong>VAT number:</strong> FR77931385421</li>
                <li><strong>APE code:</strong> 62.01Z — Computer programming</li>
                <li><strong>Address:</strong> 31 rue fontaine de la ville, 06200 Nice, France</li>
                <li><strong>Phone:</strong> +33 6 95 04 11 66</li>
                <li><strong>Email:</strong> contact@killian-colla.com</li>
                <li><strong>Publication Director:</strong> Killian Colla</li>
              </ul>

              <h2>2. Hosting Provider</h2>
              <p>This website is hosted by:</p>
              <ul>
                <li><strong>Company:</strong> Vercel Inc.</li>
                <li><strong>Address:</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, USA</li>
                <li><strong>Website:</strong> https://vercel.com</li>
              </ul>

              <h2>3. Intellectual Property</h2>
              <p>
                All content on this website (texts, images, graphics, logo, icons, source code) is the exclusive
                property of Killian Colla, unless otherwise stated. Any reproduction, distribution, modification
                or use for commercial purposes is strictly prohibited without prior written authorization.
              </p>

              <h2>4. Liability</h2>
              <p>
                Killian Colla strives to ensure the accuracy and currency of information published on this site.
                However, he cannot guarantee the accuracy, precision or completeness of the information made
                available. Accordingly, Killian Colla disclaims any liability for any inaccuracy or omission
                relating to the information available on this site.
              </p>

              <h2>5. Hyperlinks</h2>
              <p>
                This site may contain links to other websites. Killian Colla has no control over these sites
                and assumes no responsibility for their content. The presence of these links does not constitute
                an endorsement of these sites or their content.
              </p>

              <h2>6. Cookies</h2>
              <p>
                This site uses cookies for audience analysis purposes (Google Analytics, Vercel Analytics).
                To learn more about how your personal data is used, please read our{' '}
                <Link href={`/${locale}/politique-de-confidentialite`} className="text-primary hover:underline">
                  privacy policy
                </Link>.
              </p>

              <h2>7. Applicable Law</h2>
              <p>
                This site and these legal notices are governed by French law. In case of dispute, French courts
                shall have exclusive jurisdiction.
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
