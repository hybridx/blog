import { c as createComponent } from './astro-component_Chduls7F.mjs';
import 'piccolore';
import { y as maybeRenderHead, a1 as addAttribute, L as renderTemplate } from './sequence_CLdZWHrr.mjs';
import { r as renderComponent } from './server_B6zWtIzM.mjs';
import { $ as $$Base } from './Base_Cr0bbxLP.mjs';
import 'clsx';

const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PostCard;
  const { slug, title, excerpt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="post-card"> <h2><a${addAttribute(`/blog/${slug}`, "href")}>${title}</a></h2> ${excerpt && renderTemplate`<p>${excerpt}</p>`} </article>`;
}, "/Users/denair/testing/blog/src/components/PostCard.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Posts</h1> <section class="post-list"> ${renderComponent($$result2, "PostCard", $$PostCard, { "slug": "example", "title": "Example post", "excerpt": "Coming soon." })} </section> ` })}`;
}, "/Users/denair/testing/blog/src/pages/index.astro", void 0);

const $$file = "/Users/denair/testing/blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
