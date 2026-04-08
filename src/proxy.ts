import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'fr', 'ja'],
    defaultLocale: 'en',
    alternateLinks: false
});

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};