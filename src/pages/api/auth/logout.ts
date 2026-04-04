import type { APIRoute } from 'astro';
import { clearSessionCookie } from '../../../lib/auth/session';

export const POST: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: { 'Set-Cookie': clearSessionCookie() },
  });
};
