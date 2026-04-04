const GET = async ({ url }) => {
  const slug = url.searchParams.get("postSlug");
  return new Response(JSON.stringify({ postSlug: slug, comments: [] }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
const POST = async () => {
  return new Response(JSON.stringify({ ok: false, error: "not_implemented" }), {
    status: 501,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
