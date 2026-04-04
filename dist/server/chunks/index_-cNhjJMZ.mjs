import { c as createComponent } from './astro-component_Chduls7F.mjs';
import 'piccolore';
import { L as renderTemplate, y as maybeRenderHead } from './sequence_CLdZWHrr.mjs';
import { r as renderComponent } from './server_B6zWtIzM.mjs';
import { $ as $$Admin } from './Admin_Dez7P_M8.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Admin", $$Admin, { "title": "Admin" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Dashboard</h1> <p>Admin overview.</p> ` })}`;
}, "/Users/denair/testing/blog/src/pages/admin/index.astro", void 0);

const $$file = "/Users/denair/testing/blog/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
