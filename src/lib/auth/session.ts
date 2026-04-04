import { randomBytes } from 'node:crypto';

export function createSessionToken(): string {
  return randomBytes(32).toString('hex');
}

export async function validateSession(_token: string | undefined): Promise<null> {
  return null;
}

export async function destroySession(_token: string): Promise<void> {
  // TODO
}

export function setSessionCookie(_response: Response, _token: string): Headers {
  return new Headers();
}

export function clearSessionCookie(): string {
  return 'session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0';
}
