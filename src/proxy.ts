import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
    locales: ['en', 'fr', 'ja'],
    defaultLocale: 'en',
    alternateLinks: false
});

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Block POST requests on non-API routes (bot mitigation for Next.js Server Action scanning)
    if (request.method === 'POST' && !pathname.startsWith('/api')) {
        return new NextResponse(null, { status: 405 });
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
