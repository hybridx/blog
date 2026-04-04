const googleOAuth = {
  authorizeUrl: "https://accounts.google.com/o/oauth2/v2/auth",
  scope: "openid email profile"
};

const GET = async ({ url, redirect }) => {
  const code = url.searchParams.get("code");
  const clientId = "";
  if (!code) {
    const redirectUri = `${url.origin}/api/auth/google`;
    const authorize = new URL(googleOAuth.authorizeUrl);
    authorize.searchParams.set("client_id", clientId);
    authorize.searchParams.set("redirect_uri", redirectUri);
    authorize.searchParams.set("response_type", "code");
    authorize.searchParams.set("scope", googleOAuth.scope);
    authorize.searchParams.set("state", "stub");
    return redirect(authorize.toString(), 302);
  }
  return new Response(JSON.stringify({ ok: true, provider: "google" }), {
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
