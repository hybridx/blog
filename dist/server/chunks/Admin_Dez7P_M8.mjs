import { c as createComponent } from './astro-component_Chduls7F.mjs';
import 'piccolore';
import { y as maybeRenderHead, a1 as addAttribute, L as renderTemplate, aY as renderSlot } from './sequence_CLdZWHrr.mjs';
import { r as renderComponent } from './server_B6zWtIzM.mjs';
import { $ as $$Base } from './Base_Cr0bbxLP.mjs';
import 'clsx';

const $$AdminNav = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/write", label: "Write" },
    { href: "/admin/images", label: "Images" },
    { href: "/admin/login", label: "Login" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="admin-nav"> <ul> ${links.map((l) => renderTemplate`<li> <a${addAttribute(l.href, "href")}>${l.label}</a> </li>`)} </ul> </nav>`;
}, "/Users/denair/testing/blog/src/components/AdminNav.astro", void 0);

const $$Admin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Admin;
  const { title = "Admin" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AdminNav", $$AdminNav, {})} ${maybeRenderHead()}<main> ${renderSlot($$result2, $$slots["default"])} </main> ` })}`;
}, "/Users/denair/testing/blog/src/layouts/Admin.astro", void 0);

export { $$Admin as $ };
