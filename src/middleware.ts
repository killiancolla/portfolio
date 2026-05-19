import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'fr', 'ja'];
const defaultLocale = 'en';

const intlMiddleware = createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always',
});

export function middleware(request: NextRequest) {
    const { pathname, method } = request.nextUrl;

    // Block POST requests on non-API routes (bot mitigation)
    if (request.method === 'POST' && !pathname.startsWith('/api')) {
        return new NextResponse(null, { status: 405 });
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: [
        // Match all paths except static files and Next.js internals
        '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
    ],
};
