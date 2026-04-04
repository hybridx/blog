import { c as createComponent } from './astro-component_Chduls7F.mjs';
import 'piccolore';
import { L as renderTemplate, y as maybeRenderHead, aY as renderSlot, a1 as addAttribute } from './sequence_CLdZWHrr.mjs';
import { r as renderComponent } from './server_B6zWtIzM.mjs';
import { $ as $$Base } from './Base_Cr0bbxLP.mjs';
import 'clsx';

const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article> ${renderSlot($$result2, $$slots["default"])} </article> ` })}`;
}, "/Users/denair/testing/blog/src/layouts/BlogPost.astro", void 0);

const $$CommentForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CommentForm;
  const { postSlug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form method="post" action="/api/comments"${addAttribute(postSlug, "data-post-slug")}> <input type="hidden" name="postSlug"${addAttribute(postSlug, "value")}> <label>
Comment
<textarea name="content" required></textarea> </label> <button type="submit">Submit</button> </form>`;
}, "/Users/denair/testing/blog/src/components/CommentForm.astro", void 0);

const $$CommentList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CommentList;
  const { comments } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="comment-list"> ${comments.map((c) => renderTemplate`<li> ${c.author && renderTemplate`<strong>${c.author}</strong>`} <p>${c.content}</p> </li>`)} </ul>`;
}, "/Users/denair/testing/blog/src/components/CommentList.astro", void 0);

const prerender = false;
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { "title": slug ?? "Post" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${slug}</h1> <p>Post content will load from GitHub.</p> ${renderComponent($$result2, "CommentList", $$CommentList, { "comments": [] })} ${slug && renderTemplate`${renderComponent($$result2, "CommentForm", $$CommentForm, { "postSlug": slug })}`}` })}`;
}, "/Users/denair/testing/blog/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/denair/testing/blog/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
