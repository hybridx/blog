import type { APIRoute } from 'astro';
import { clearAllCaches } from '../../lib/cache';

export const POST: APIRoute = async () => {
  clearAllCaches();
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
