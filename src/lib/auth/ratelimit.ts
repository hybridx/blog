export async function checkRateLimit(
  _key: string,
  _action: string,
  _maxCount: number,
  _windowMinutes: number,
): Promise<{ allowed: boolean }> {
  return { allowed: true };
}
