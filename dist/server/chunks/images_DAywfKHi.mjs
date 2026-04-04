import { c as createComponent } from './astro-component_Chduls7F.mjs';
import 'piccolore';
import { y as maybeRenderHead, L as renderTemplate } from './sequence_CLdZWHrr.mjs';
import { r as renderComponent } from './server_B6zWtIzM.mjs';
import { $ as $$Admin } from './Admin_Dez7P_M8.mjs';
import 'clsx';

const $$ImageUploader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form class="image-uploader" action="/api/images/upload" method="post" enctype="multipart/form-data"> <input type="file" name="file" accept="image/*" required> <button type="submit">Upload</button> </form>`;
}, "/Users/denair/testing/blog/src/components/ImageUploader.astro", void 0);

const $$Images = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Admin", $$Admin, { "title": "Images" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Image manager</h1> ${renderComponent($$result2, "ImageUploader", $$ImageUploader, {})} ` })}`;
}, "/Users/denair/testing/blog/src/pages/admin/images.astro", void 0);

const $$file = "/Users/denair/testing/blog/src/pages/admin/images.astro";
const $$url = "/admin/images";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Images,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
