const prerender = false;
const POST = async () => {
  return new Response(JSON.stringify({ ok: false, error: "not_implemented" }), {
    status: 501,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
