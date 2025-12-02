import type { APIRoute } from 'astro';

const pages = [
  '',
  'zones',
  'gear',
  'pricelist',
  'games',
  'about',
  'contact',
];

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.toString() || 'https://cyberpunkcanggu.com';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
