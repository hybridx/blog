import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

export async function renderMarkdown(markdown: string): Promise<string> {
  const raw = await marked.parse(markdown, { async: true });
  return sanitizeHtml(raw);
}
