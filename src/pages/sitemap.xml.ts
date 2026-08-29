import events from '../data/events.json';

const staticUrls = [
    '/',
    '/about-kurapia',
    '/about-us',
    '/contact',
    '/events',
    '/gallery',
    '/himaya-garden-land-acknowledgment',
    '/payment-format-template',
    '/private-events',
    '/rental-inquiry',
    '/terms-of-use',
    '/upcoming-events',
    '/venue-rates',
    '/privacy-policy',
    '/appi-privacy-policy',
    '/ccpa-privacy-policy',
    '/gdpr-privacy-policy',
    '/lgpd-privacy-policy',
    '/pipeda-privacy-policy',
];

export function GET() {
    const urls = [...staticUrls, ...events.map((event) => `/events/${event.slug}`)];
    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>https://himayagarden.com${path}</loc></url>`).join('\n')}
</urlset>`;

    return new Response(body, {
        headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    });
}
