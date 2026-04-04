/**
 * Generic OAuth2 authorization code flow (no third-party auth libraries).
 */

export function generateAuthUrl(_provider: 'github' | 'google'): string {
  return '/api/auth/' + _provider;
}

export async function handleCallback(
  _provider: 'github' | 'google',
  _code: string,
  _state: string,
): Promise<void> {
  // TODO: exchange code, upsert user, create session
}
