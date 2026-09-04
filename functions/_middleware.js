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
// This FAILS CLOSED. If the variable is missing the site is withheld, not
// opened. An earlier version did the opposite, so that deleting the variable
// would unlock the site, and that turned out to hide a real fault: a
// misconfigured binding and a deliberately open site looked identical from
// outside. To open the site to everyone, delete this functions/ directory.
// That also stops every asset request being billed as a function call.
//
// Be clear about what this gate is. It keeps the site from being read by
// someone who wanders past, and keeps it out of search results. It is not
// confidentiality: every page, score and evidence entry is in a public
// GitHub repository, so anyone who finds the repo reads the same material
// without ever meeting this prompt.

const REALM = "BZE National Action Plan";

export async function onRequest(context) {
  const { request, env, next } = context;
  const expected = env.SITE_PASSWORD;

  // No password configured. Withhold the site and say so plainly, rather
  // than letting a broken binding look like a working one. The variable
  // names are listed because they are names, not values, and because
  // "which bindings did the function actually receive" is the one thing
  // you cannot see from the dashboard.
  if (!expected) {
    const seen = Object.keys(env || {}).sort().join(", ") || "(none)";
    return new Response(
      "This site is not available.\n\n" +
      "SITE_PASSWORD is not reaching the Pages Function.\n" +
      `Bindings the function received: ${seen}\n`,
      {
        status: 503,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-store",
        },
      });
  }

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
