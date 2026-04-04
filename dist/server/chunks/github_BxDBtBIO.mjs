const githubOAuth = {
  authorizeUrl: "https://github.com/login/oauth/authorize",
  scope: "read:user user:email"
};

const GET = async ({ url, redirect }) => {
  const code = url.searchParams.get("code");
  const clientId = "";
  if (!code) {
    const redirectUri = `${url.origin}/api/auth/github`;
    const authorize = new URL(githubOAuth.authorizeUrl);
    authorize.searchParams.set("client_id", clientId);
    authorize.searchParams.set("redirect_uri", redirectUri);
    authorize.searchParams.set("scope", githubOAuth.scope);
    authorize.searchParams.set("state", "stub");
    return redirect(authorize.toString(), 302);
  }
  return new Response(JSON.stringify({ ok: true, provider: "github" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
