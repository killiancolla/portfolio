import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

// Liste des langues supportées
const locales = ['en', 'fr', 'ja'];

export default getRequestConfig(async () => {
    // Attendre les headers
    const requestHeaders = await headers();

    // Récupérer la locale
    const locale = requestHeaders.get('X-NEXT-INTL-LOCALE') || 'en'; // Valeur par défaut : 'en'

    // Vérifier si la locale est supportée
    if (!locales.includes(locale)) notFound();

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});