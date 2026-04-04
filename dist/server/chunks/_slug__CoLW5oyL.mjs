import { c as createComponent } from './astro-component_Chduls7F.mjs';
import 'piccolore';
import { L as renderTemplate, y as maybeRenderHead } from './sequence_CLdZWHrr.mjs';
import { r as renderComponent } from './server_B6zWtIzM.mjs';
import { $ as $$Admin } from './Admin_Dez7P_M8.mjs';
import { $ as $$MarkdownEditor } from './MarkdownEditor_BiXexN-n.mjs';

const prerender = false;
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Admin", $$Admin, { "title": `Edit: ${slug}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Edit ${slug}</h1> ${renderComponent($$result2, "MarkdownEditor", $$MarkdownEditor, { "value": "" })} ` })}`;
}, "/Users/denair/testing/blog/src/pages/admin/edit/[slug].astro", void 0);

const $$file = "/Users/denair/testing/blog/src/pages/admin/edit/[slug].astro";
const $$url = "/admin/edit/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
