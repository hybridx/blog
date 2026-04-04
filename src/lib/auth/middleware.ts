import type { MiddlewareHandler } from 'astro';

export const authMiddleware: MiddlewareHandler = async (_context, next) => {
  return next();
};
