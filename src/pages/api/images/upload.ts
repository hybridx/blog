import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async () => {
  return new Response(JSON.stringify({ ok: false, error: 'not_implemented' }), {
    status: 501,
    headers: { 'Content-Type': 'application/json' },
  });
};
