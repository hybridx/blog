import { c as createComponent } from './astro-component_Chduls7F.mjs';
import 'piccolore';
import { y as maybeRenderHead, a1 as addAttribute, L as renderTemplate } from './sequence_CLdZWHrr.mjs';
import 'clsx';

const $$MarkdownEditor = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MarkdownEditor;
  const { name = "content", value = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="markdown-editor"> <textarea${addAttribute(name, "name")}${addAttribute(20, "rows")}${addAttribute(80, "cols")}>${value}</textarea> </div>`;
}, "/Users/denair/testing/blog/src/components/MarkdownEditor.astro", void 0);

export { $$MarkdownEditor as $ };
