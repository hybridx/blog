import { c as createComponent } from './astro-component_Chduls7F.mjs';
import 'piccolore';
import { L as renderTemplate, y as maybeRenderHead } from './sequence_CLdZWHrr.mjs';
import { r as renderComponent } from './server_B6zWtIzM.mjs';
import { $ as $$Admin } from './Admin_Dez7P_M8.mjs';
import { $ as $$MarkdownEditor } from './MarkdownEditor_BiXexN-n.mjs';

const $$Write = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Admin", $$Admin, { "title": "Write post" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>New post</h1> <form method="post" action="/api/webhook"> ${renderComponent($$result2, "MarkdownEditor", $$MarkdownEditor, {})} <button type="submit">Save</button> </form> ` })}`;
}, "/Users/denair/testing/blog/src/pages/admin/write.astro", void 0);

const $$file = "/Users/denair/testing/blog/src/pages/admin/write.astro";
const $$url = "/admin/write";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Write,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
