import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
    './i18n/request.ts'
);
const isDev = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=(), usb=()' },
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com https://challenges.cloudflare.com https://app.cal.com`,
                            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://app.cal.com",
                            "font-src 'self' https://fonts.gstatic.com",
                            "img-src 'self' data: blob: https://cdn.simpleicons.org https://static.vecteezy.com https://cal.com https://app.cal.com",
                            "frame-src https://challenges.cloudflare.com https://www.youtube.com https://cal.com https://app.cal.com",
                            "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://api.cal.com https://app.cal.com",
                        ].join('; '),
                    },
                ],
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.simpleicons.org',
            },
            {
                protocol: 'https',
                hostname: 'static.vecteezy.com'
            }
        ],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; img-src * data: blob:;"
    }
};


export default withNextIntl(nextConfig);