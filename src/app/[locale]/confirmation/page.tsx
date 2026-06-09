import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = 'https://www.killian-colla.com';

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "Confirmation - Killian Colla",
    alternates: {
      canonical: `${siteUrl}/${locale}/confirmation`,
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

const content: Record<string, { title: string; subtitle: string; body: string; cta: string }> = {
  fr: {
    title: "Merci pour votre réservation !",
    subtitle: "On se parle bientôt",
    body: "Votre créneau a bien été confirmé. Vous allez recevoir un email de confirmation avec le lien de la visio. Si vous avez des questions d'ici là, n'hésitez pas à me contacter.",
    cta: "Retour au site",
  },
  en: {
    title: "Thanks for booking!",
    subtitle: "Talk to you soon",
    body: "Your slot has been confirmed. You'll receive a confirmation email with the video call link. If you have any questions in the meantime, feel free to reach out.",
    cta: "Back to the site",
  },
  ja: {
    title: "ご予約ありがとうございます！",
    subtitle: "もうすぐお話しましょう",
    body: "ご予約が確定しました。ビデオ通話のリンクが記載された確認メールが届きます。ご不明な点があればお気軽にご連絡ください。",
    cta: "サイトに戻る",
  },
};

export default async function ConfirmationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = content[locale] ?? content["en"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center gap-6">
      <div className="flex flex-col items-center gap-4 max-w-md">
        <span className="text-5xl">🎉</span>

        <h1 className="text-3xl font-bold">{t.title}</h1>
        <p className="text-primary font-semibold text-lg">{t.subtitle}</p>
        <p className="text-muted-foreground leading-7 text-sm">{t.body}</p>

        <Link
          href={`/${locale}`}
          className="mt-4 px-6 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          {t.cta}
        </Link>
      </div>
    </div>
  );
}
