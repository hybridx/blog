import sanitizeHtml from 'sanitize-html';

export function sanitizeCommentInput(raw: string): string {
  return sanitizeHtml(raw, {
    allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'code', 'pre'],
    allowedAttributes: { a: ['href', 'name', 'target', 'rel'] },
  });
}
