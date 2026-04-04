import type { APIRoute } from 'astro';
import { googleOAuth } from '../../../lib/auth/providers/google';

export const GET: APIRoute = async ({ url, redirect }) => {
  const code = url.searchParams.get('code');
  const clientId = import.meta.env.GOOGLE_CLIENT_ID ?? '';

  if (!code) {
    const redirectUri = `${url.origin}/api/auth/google`;
    const authorize = new URL(googleOAuth.authorizeUrl);
    authorize.searchParams.set('client_id', clientId);
    authorize.searchParams.set('redirect_uri', redirectUri);
    authorize.searchParams.set('response_type', 'code');
    authorize.searchParams.set('scope', googleOAuth.scope);
    authorize.searchParams.set('state', 'stub');
    return redirect(authorize.toString(), 302);
  }

  return new Response(JSON.stringify({ ok: true, provider: 'google' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
