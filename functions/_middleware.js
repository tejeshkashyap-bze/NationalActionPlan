// functions/_middleware.js
//
// A single shared password in front of the whole site, for while the
// assessment content is still being settled.
//
// Cloudflare Pages runs this before serving any file. It must live in
// /functions at the ROOT of the project — not inside the build output
// directory — or Pages will not find it.
//
// The password is read from the SITE_PASSWORD environment variable, set in
// the Cloudflare dashboard as an encrypted variable. It is never written
// into this file: the repository is public.
//
// Be clear about what this is. It keeps the site from being read by someone
// who wanders past, and keeps it out of search results. It is not
// confidentiality — every page, score and evidence entry is in a public
// GitHub repository, so anyone who finds the repo reads the same material
// without ever meeting this prompt.

const REALM = "BZE National Action Plan";

export async function onRequest(context) {
  const { request, env, next } = context;
  const expected = env.SITE_PASSWORD;

  // No password set means no gate. That is deliberate: the site is opened to
  // everyone by deleting one variable in the dashboard, with no code change
  // and no redeploy of the pages themselves.
  if (!expected) return next();

  if (isAuthorised(request, expected)) return next();

  return new Response("This site is not public yet.\n", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${REALM}", charset="UTF-8"`,
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function isAuthorised(request, expected) {
  const header = request.headers.get("Authorization") || "";
  const [scheme, encoded] = header.split(" ");
  if (scheme !== "Basic" || !encoded) return false;

  let decoded;
  try {
    const bytes = Uint8Array.from(atob(encoded), c => c.charCodeAt(0));
    decoded = new TextDecoder().decode(bytes);
  } catch (err) {
    return false;
  }

  // Any username is accepted. There is one shared password, and asking
  // people to remember a username as well only produces support requests.
  const colon = decoded.indexOf(":");
  if (colon === -1) return false;

  return equals(decoded.slice(colon + 1), expected);
}

// Compares in constant time, so the number of correct leading characters
// cannot be read off the response time.
function equals(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}
