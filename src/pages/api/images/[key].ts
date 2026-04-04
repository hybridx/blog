import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const key = params.key;
  return new Response(JSON.stringify({ key }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
