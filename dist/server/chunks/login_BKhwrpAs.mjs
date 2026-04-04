import { c as createComponent } from './astro-component_Chduls7F.mjs';
import 'piccolore';
import { y as maybeRenderHead, L as renderTemplate } from './sequence_CLdZWHrr.mjs';
import { r as renderComponent } from './server_B6zWtIzM.mjs';
import { $ as $$Admin } from './Admin_Dez7P_M8.mjs';
import 'clsx';

const $$LoginButtons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="login-buttons"> <a href="/api/auth/github">Continue with GitHub</a> <a href="/api/auth/google">Continue with Google</a> </div>`;
}, "/Users/denair/testing/blog/src/components/LoginButtons.astro", void 0);

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Admin", $$Admin, { "title": "Login" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Admin login</h1> ${renderComponent($$result2, "LoginButtons", $$LoginButtons, {})} ` })}`;
}, "/Users/denair/testing/blog/src/pages/admin/login.astro", void 0);

const $$file = "/Users/denair/testing/blog/src/pages/admin/login.astro";
const $$url = "/admin/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
