import argon2 from 'argon2';

export async function verifyAdminPassword(
  plain: string,
  hash: string,
): Promise<boolean> {
  return argon2.verify(hash, plain);
}
