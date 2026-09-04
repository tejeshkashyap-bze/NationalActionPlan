// deploy/build.mjs — assemble the public site into dist/
//
//   node deploy/build.mjs
//
// This is not a build step for the site. Nothing is bundled, transpiled or
// rewritten: the pages Cloudflare serves are byte-for-byte the files in this
// repository. All this does is copy the repository into dist/ and leave the
// working files behind, so the notes, the review queue and the design
// scratchpad are not fetchable on the public site.
//
// It runs on Cloudflare's build host. Developing locally is unchanged —
// `npm run dev` still serves the repository root, not dist/.
//
// The list below is an exclusion list, not an allow list, on purpose. A new
// page, evidence file or reference list is published automatically; this
// file only needs editing when something new should be kept OFF the site.

import { cp, rm, mkdir, writeFile, readdir } from "node:fs/promises";
import { join, dirname, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out  = join(root, "dist");

// Infrastructure. functions/ in particular must stay at the project root:
// Cloudflare will not find it inside dist/.
const INFRASTRUCTURE = [".git", ".github", ".gitignore", ".gitattributes",
                        "node_modules", "dist", "deploy", "functions"];

// Dev-only tooling. review/ holds the design-review server, overlay and the
// comment queue; scratch/ holds throwaway design concepts.
const DEV_ONLY = ["review", "scratch", "package.json", "package-lock.json"];

// Older pages nothing on the site links to any more. They stay in the
// repository, because editor.html is still a usable scoring tool and the
// assess-* pages are the record of the earlier prototype flow, but a reader
// should not be able to reach them by typing a URL.
//
//   editor.html                                   the scoring editor
//   assess.html + assess-*.html                   the earlier assessment flow,
//                                                 reachable only from assess.html
//   learn-wider-community-benefits-sharing.html   superseded by learn.html
//   indicator-drawer.js                           dead code, see CLAUDE.md
const ORPHANED = [
  "editor.html",
  "assess.html",
  "assess-wcbs-complete.html",
  "assess-wcbs-evidence.html",
  "assess-wcbs-review.html",
  "assess-wcbs-scoring.html",
  "assess-wider-community-benefits-sharing.html",
  "learn-wider-community-benefits-sharing.html",
  "indicator-drawer.js",
];

const EXCLUDED = new Set([...INFRASTRUCTURE, ...DEV_ONLY, ...ORPHANED]);

// Source documents, at any depth. None of these is ever site content: the
// working notes, the report PDFs and the Word and spreadsheet drafts that
// collect in the repository root as material arrives. Checked by extension
// rather than by name so a new draft dropped in tomorrow does not quietly
// end up on the public site.
//
// A document that IS meant to be downloadable goes in downloads/, which is
// exempt below, and gets linked from a page like anything else.
const DOCUMENT = /\.(md|markdown|docx?|xlsx?|pptx?|csv|tsv|pdf)$/i;
const PUBLIC_DOCS = "downloads";

const isDocument = (relPath) => {
  const parts = relPath.split(sep);
  if (parts[0] === PUBLIC_DOCS) return false;
  return DOCUMENT.test(parts[parts.length - 1]);
};

// A fresh checkout on Cloudflare's build host has no dist/, so this is a
// no-op there. Locally it can fail — the desktop file bridge cannot delete —
// and that is not worth stopping for: the copy below overwrites.
try {
  await rm(out, { recursive: true, force: true });
} catch (err) {
  console.warn(`could not clear dist/ (${err.code}); overwriting in place`);
}
await mkdir(out, { recursive: true });

const entries = await readdir(root, { withFileTypes: true });
const copied = [];
const left   = [];

for (const entry of entries) {
  if (EXCLUDED.has(entry.name) || isDocument(entry.name)) { left.push(entry.name); continue; }

  await cp(join(root, entry.name), join(out, entry.name), {
    recursive: true,
    force: true,
    // Applies to everything below a copied folder, which is how
    // regions/README.md is kept out without a second pass.
    filter: (src) => !isDocument(relative(root, src)),
  });
  copied.push(entry.name);
}

// While the site is behind a password this is belt and braces — a crawler
// cannot get past a 401. It matters the moment the password comes off.
await writeFile(join(out, "robots.txt"),
  "# The assessment is still being reviewed. Remove these two lines when\n" +
  "# the site is ready to be found in search.\n" +
  "User-agent: *\n" +
  "Disallow: /\n");

console.log(`published ${copied.length} entries to dist/`);
console.log(`kept back: ${left.sort().join(", ")}`);
