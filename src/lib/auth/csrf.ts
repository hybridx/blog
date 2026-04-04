import { randomBytes } from 'node:crypto';

export function generateCsrfToken(): string {
  return randomBytes(32).toString('hex');
}

export function validateCsrfToken(
  _request: Request,
  _sessionCsrf: string,
): boolean {
  return false;
}
