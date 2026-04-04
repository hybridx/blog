import { a5 as defineMiddleware, ae as sequence } from './chunks/sequence_CLdZWHrr.mjs';
import '@astrojs/internal-helpers/path';
import 'piccolore';
import 'clsx';

const onRequest$1 = defineMiddleware(async (_context, next) => {
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
