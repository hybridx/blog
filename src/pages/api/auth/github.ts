import type { APIRoute } from 'astro';
import { githubOAuth } from '../../../lib/auth/providers/github';

export const GET: APIRoute = async ({ url, redirect }) => {
  const code = url.searchParams.get('code');
  const clientId = import.meta.env.GITHUB_CLIENT_ID ?? '';

  if (!code) {
    const redirectUri = `${url.origin}/api/auth/github`;
    const authorize = new URL(githubOAuth.authorizeUrl);
    authorize.searchParams.set('client_id', clientId);
    authorize.searchParams.set('redirect_uri', redirectUri);
    authorize.searchParams.set('scope', githubOAuth.scope);
    authorize.searchParams.set('state', 'stub');
    return redirect(authorize.toString(), 302);
  }

  return new Response(JSON.stringify({ ok: true, provider: 'github' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
