/**
 * L1: in-memory Map; L2: filesystem cache under /tmp/blog-cache/
 */

export const memoryCache = new Map<
  string,
  { content: string; parsedAt: number; etag: string }
>();

export let lastRefresh: number | null = null;

export function clearAllCaches(): void {
  memoryCache.clear();
  lastRefresh = null;
}
