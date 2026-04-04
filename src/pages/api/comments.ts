import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
  const slug = url.searchParams.get('postSlug');
  return new Response(JSON.stringify({ postSlug: slug, comments: [] }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST: APIRoute = async () => {
  return new Response(JSON.stringify({ ok: false, error: 'not_implemented' }), {
    status: 501,
    headers: { 'Content-Type': 'application/json' },
  });
};
