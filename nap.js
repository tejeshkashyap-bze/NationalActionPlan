// nap.js — the site shell and the helpers every page shares.
//
// There is no build step and no templating, so the persistent header
// is rendered here at run time rather than copied into 15 HTML files.
// Include this after data.js / scores.js / regions.js:
//
//   <script src="regions.js"></script>
//   <script src="data.js"></script>
//   <script src="scores.js"></script>
//   <script src="nap.js"></script>
//
// Then, once the page knows what it is showing:
//
//   NAP.shell({ page: "regions", crumbs: [["Regions","index.html"], "Kwinana"] });
//
// A crumb is either a [label, href] pair or a plain string for the
// current page. Calling shell() twice is safe — it replaces.

const NAP = (function () {

  /* ---------- score vocabulary ----------
     The 1–5 scale as it is named in the assessment process. Individual
     indicators also carry their own grading scale (see learn-data.js
     scoringDescriptions, and the scale paragraph inside each evidence
     entry); these are the generic band names used in lists and legends. */

  const WORDS = {
    1: "Severe deficiency",
    2: "Moderate deficiency",
    3: "Developing",
    4: "Effective",
    5: "Leading practice",
  };

  function word(v) {
    return WORDS[v] || "Not yet scored";
  }

  /* ---------- small helpers ---------- */

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, c =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function qs(name) {
    return new URLSearchParams(location.search).get(name) || "";
  }

  // Every indicator, flattened, with its theme and group attached.
  function allItems() {
    if (typeof CSC === "undefined") return [];
    return CSC.flatMap(p => p.groups.flatMap(g => g.items.map(i => ({
      ...i,
      pillarId: p.pillarId,
      pillarTitle: p.pillarTitle,
      groupId: g.groupId,
      groupTitle: g.groupTitle,
    }))));
  }

  function itemById(id) {
    return allItems().find(i => i.id === id) || null;
  }

  // Assessment rounds for a region, newest first.
  function roundsFor(key) {
    return (typeof SCORES !== "undefined" && SCORES[key]) ? SCORES[key] : [];
  }

  function latestRound(key) {
    return roundsFor(key)[0] || null;
  }

  function isAssessed(key) {
    const r = latestRound(key);
    return !!(r && Object.keys(r.scores || {}).length);
  }

  // Regions that have at least one score, newest round first.
  function assessedRegions() {
    if (typeof REGIONS === "undefined") return [];
    return REGIONS.filter(r => isAssessed(r.key));
  }

  // Has this indicator been scored in any region, in any round? Two things
  // key off this: whether the indicator page carries a badge, and whether
  // it shows the call for expertise instead of empty tabs. An indicator
  // scored in a newer region but not an older one counts as assessed, so
  // the older region's page keeps its ordinary "not yet assessed here".
  function isIndicatorAssessed(id) {
    if (typeof SCORES === "undefined") return false;
    return Object.values(SCORES).some(rounds =>
      (rounds || []).some(r => typeof (r.scores || {})[id] === "number"));
  }

  // Is the methodology for this indicator published? learn-data.js holds a
  // key per indicator and sets it to null when there is nothing to publish
  // yet, so a truthy entry is the test. Returns false where learn-data.js
  // has not been loaded, so a page that does not include it degrades to
  // "not documented" rather than throwing.
  function hasMethod(id) {
    return typeof LEARN_DATA !== "undefined" && !!LEARN_DATA[id];
  }

  function coverage(key) {
    const r = latestRound(key);
    return {
      scored: r ? Object.keys(r.scores || {}).length : 0,
      total: allItems().length,
    };
  }

  // Mean across scored indicators only. Returns null below `floor`
  // indicators, because a mean over a handful of scores reads as a
  // verdict on the region when it is nothing of the kind.
  function mean(scores, floor = 5) {
    const vals = Object.values(scores || {}).filter(v => typeof v === "number");
    if (vals.length < floor) return null;
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  }

  function themeSummary(scores, pillarId) {
    const ids = allItems().filter(i => i.pillarId === pillarId).map(i => i.id);
    const vals = ids.map(id => (scores || {})[id]).filter(v => typeof v === "number");
    return {
      n: vals.length,
      total: ids.length,
      mean: vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : null,
    };
  }

  /* ---------- the shell ---------- */

  const NAV = [
    ["Overview",    "index.html",        ["overview"]],
    ["Regions",     "map.html",          ["regions", "map", "region"]],
    ["Criteria",    "CSC.html",          ["criteria", "criterion", "learn"]],
    ["Contributors","contributors.html", ["contributors"]],
  ];

  function shell(opts) {
    const o = opts || {};
    const page = o.page || "";

    const links = NAV.map(([label, href, ids]) =>
      `<a href="${href}"${ids.includes(page) ? ' aria-current="page"' : ""}>${esc(label)}</a>`
    ).join("");

    const header =
      `<header class="site"><div class="siteIn">` +
        `<a class="mark" href="index.html">` +
          `<img class="markLogo" src="BZE Logo PNG.png" alt="Beyond Zero Emissions" />` +
          `<span>National Action Plan</span>` +
        `</a>` +
        `<nav class="nav" aria-label="Main">${links}</nav>` +
      `</div></header>`;

    let host = document.getElementById("napShell");
    if (!host) {
      host = document.createElement("div");
      host.id = "napShell";
      document.body.insertBefore(host, document.body.firstChild);
    }
    host.innerHTML = header;

    crumbs(o.crumbs);
  }

  function crumbs(list) {
    const host = document.getElementById("napCrumbs");
    if (!host) return;
    if (!list || !list.length) { host.innerHTML = ""; return; }

    host.innerHTML = `<nav class="crumbs" aria-label="Breadcrumb">` +
      list.map(c => Array.isArray(c)
        ? `<a href="${c[1]}">${esc(c[0])}</a>`
        : `<strong>${esc(c)}</strong>`
      ).join(`<span class="sep">/</span>`) +
      `</nav>`;
  }

  /* ---------- the call for help ---------- */

  // Shown wherever there is nothing to publish yet: an indicator BZE has
  // not developed, or one that is scored but whose methodology has not been
  // written up. It lives here because criterion.html and learn.html both
  // need it, and the wording should exist in exactly one place.
  //
  // `ask` completes "…would like to help " — so it carries the verb phrase,
  // which differs between the two cases.

  // Three indicators were assessed for the first time in the August 2026
  // round (Port Hedland and Kwinana) ahead of their methodology being
  // published: water and wastewater, housing, and community engagement.
  // The methodology for those is due with the next edition of the
  // assessment process, so the page says so rather than leaving the reader
  // to wonder. Written once here because both learn.html and
  // criterion.html show it.
  const V3_NOTE = "This methodology will be added with Version 3 of the " +
    "National Action Plan Regional Assessment Process.";

  const VOLUNTEER_URL = "https://www.bze.org.au/about-us/volunteer";
  const CONTACT_EMAIL = "info@bze.org.au";

  function helpCallout(heading, paragraphs, ask) {
    return `<div class="iCallout">` +
      `<h2 class="iCalloutTitle">${esc(heading)}</h2>` +
      `<div class="iProse">` +
        (paragraphs || []).map(t => `<p>${t}</p>`).join("") +
        `<p>Much of the National Action Plan has been developed by people ` +
        `contributing expertise from their own field. If you work in this ` +
        `area and would like to ${esc(ask)}, we would like to hear from ` +
        `you.</p>` +
      `</div>` +
      `<div class="iCalloutActions">` +
        `<a class="btn primary" href="${VOLUNTEER_URL}" target="_blank" ` +
          `rel="noopener">Volunteer with BZE</a>` +
        `<span class="mailTo">or email ` +
          `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></span>` +
      `</div>` +
    `</div>`;
  }

  // The two cases, so neither page has to decide the wording itself.
  function undevelopedCallout(item) {
    return helpCallout(
      "We have not developed this indicator yet",
      [`${esc(item.title)} is part of the assessment framework, but we have ` +
       `not yet built the methodology behind it or assessed any region ` +
       `against it.`],
      "help us develop this indicator");
  }

  // Counted across every round, so the number always agrees with
  // isIndicatorAssessed() above — an indicator scored in an earlier round
  // but not the latest one still counts.
  function regionsScoring(id) {
    if (typeof SCORES === "undefined") return 0;
    return Object.values(SCORES).filter(rounds =>
      (rounds || []).some(r => typeof (r.scores || {})[id] === "number")).length;
  }

  function noMethodCallout(item) {
    const n = regionsScoring(item.id);
    return helpCallout(
      "The methodology for this indicator is not yet published",
      [`${esc(item.title)} has been assessed` +
       (n ? ` in ${n} region${n === 1 ? "" : "s"}` : "") +
       `, but the methodology behind it — what it measures, the data ` +
       `sources and the scoring process — has not been written up here yet.`,
       esc(V3_NOTE)],
      "help us document it");
  }

  /* ---------- theme-level report content ---------- */

  /* The reports carry two things at theme level that the indicator rows do
     not: the context a theme opens with, and the key findings and
     recommendations it closes with. Both live in findings-<region>.js, which
     is optional in exactly the way references-<region>.js is. These helpers
     turn one block into HTML; city.html decides where it goes.

     The text is plain, escaped like everything else, with one exception:
     <sup class="refMark">n</sup> is let through, because the reports place
     citations inside sentences and the marker has to stay where they put it. */

  function fMarks(text, refs, scope) {
    let html = esc(text).replace(
      /&lt;sup class=&quot;refMark&quot;&gt;([\d,]+)&lt;\/sup&gt;/g,
      (m, list) => `<sup class="refMark">${list}</sup>`);
    if (!refs || !refs.length) return html;
    const have = new Set(refs.map(r => String(r.n)));
    return html.replace(/<sup class="refMark">([\d,]+)<\/sup>/g, (m, list) => {
      const nums = list.split(",");
      if (!nums.every(n => have.has(n))) return m;   // same quiet failure as the evidence
      return `<sup class="refMark">` + nums.map(n =>
        `<a data-fref="${esc(scope)}-${n}" tabindex="0" role="link" ` +
        `title="Jump to reference ${n}">${n}</a>`).join(",") + `</sup>`;
    });
  }

  // A table or figure at the point the report placed it. A missing entry
  // renders as nothing rather than a broken box, so a half-finished import
  // is invisible rather than embarrassing.
  function fFigure(id, figures) {
    const f = (figures || {})[id];
    if (!f) return "";

    const cap = `<figcaption class="fcCap"><span class="fcNum">${esc(f.number)}</span> ` +
      `${esc(f.title)}</figcaption>`;

    if (f.kind === "table") {
      return `<figure class="fcFig">${cap}` +
        `<div class="tableWrap"><table class="dataTable">` +
          `<thead><tr>${f.columns.map(c => `<th>${esc(c)}</th>`).join("")}</tr></thead>` +
          `<tbody>${f.rows.map(r =>
            `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>` +
        `</table></div>` +
        (f.note ? `<p class="fcNote">${esc(f.note)}</p>` : "") +
      `</figure>`;
    }

    return `<figure class="fcFig">${cap}` +
      `<img class="fcImg" src="${esc(f.src)}" alt="${esc(f.alt)}" loading="lazy" />` +
      (f.summary ? `<p class="fcNote">${esc(f.summary)}</p>` : "") +
    `</figure>`;
  }

  function fBody(body, refs, scope, figures) {
    const M = t => fMarks(t, refs, scope);
    return (body || []).map(b => {
      if (b.h)   return `<h4 class="fcSub">${esc(b.h)}</h4>`;
      if (b.fig) return fFigure(b.fig, figures);
      if (b.ul)  return `<ul class="fcList">${b.ul.map(li => `<li>${M(li)}</li>`).join("")}</ul>`;
      // The Hunter numbers its recommendations and nests a lettered point
      // under each. That structure is the report's, so it is kept.
      if (b.ol)  return `<ol class="fcOl">${b.ol.map(n =>
        `<li>${M(n.t)}${(n.sub || []).length
          ? `<ol class="fcOlSub">${n.sub.map(s => `<li>${M(s)}</li>`).join("")}</ol>` : ""}</li>`
      ).join("")}</ol>`;
      return `<p>${M(b.p)}</p>`;
    }).join("");
  }

  // The categories a block covers, named rather than reworded into one. A
  // context block covers a whole theme, so it carries a plain note instead.
  function fScope(block) {
    const covers = (block.covers || []).join(" · ");
    if (!covers) return block.scope ? `<div class="fcScope">${esc(block.scope)}</div>` : "";
    return `<div class="fcScope"><strong>Covers</strong> ${esc(covers)}` +
      (block.scope ? ` — ${esc(block.scope)}` : "") + `</div>`;
  }

  // Numbered from 1 in the order a reader meets them, as on an indicator
  // page. Link text is the host so a long address cannot break the line.
  function fRefs(refs, scope) {
    if (!refs || !refs.length) return "";
    return `<div class="fcRefs"><div class="fcRefsHead">References</div><ol class="refList">` +
      refs.map(r =>
        `<li class="refItem" id="fref-${esc(scope)}-${r.n}">${esc(r.cite)}` +
        (r.url ? ` <a class="refLink" href="${esc(r.url)}" target="_blank" rel="noopener"` +
          ` title="${esc(r.url)}">${esc(fHost(r.url))}</a>` : "") + `</li>`).join("") +
      `</ol></div>`;
  }

  function fHost(url) {
    try { return new URL(url).host.replace(/^www\./, ""); }
    catch (e) { return url; }
  }

  // Clicking a marker highlights its entry and scrolls to it. No hash: these
  // blocks sit inside <details>, and a #ref-… in the URL would fight that.
  function fWireRefs(root) {
    (root || document).querySelectorAll(".refMark a[data-fref]").forEach(a => {
      const go = () => {
        const li = document.getElementById(`fref-${a.dataset.fref}`);
        if (!li) return;
        document.querySelectorAll(".refItem.isTarget").forEach(x => x.classList.remove("isTarget"));
        li.classList.add("isTarget");
        li.scrollIntoView({ behavior: "smooth", block: "center" });
      };
      a.addEventListener("click", go);
      a.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
      });
    });
  }

  // Where a findings block lands. It names the categories the report's
  // section covered; where that is more than one — Gladstone wrote one set
  // across federal, state and local policy, Port Hedland one across the whole
  // Enabling Infrastructure theme — it is anchored to the LAST of them, so it
  // sits after every category it draws on rather than above half of them.
  function fAnchor(block) {
    let last = null;
    CSC.forEach(p => p.groups.forEach(g => {
      if ((block.covers || []).includes(g.groupTitle)) last = g.groupId;
    }));
    return last || block.group;
  }

  // Everything city.html needs for one region, or empty shapes when the
  // region has no findings file or the reader has selected another round.
  function findingsFor(data, roundDate) {
    const empty = { byPillar: {}, byGroup: {}, figures: {} };
    if (!data || !data.round || data.round !== roundDate) return empty;
    const byPillar = {}, byGroup = {};
    (data.contexts || []).forEach(c => { byPillar[c.pillar] = c; });
    (data.blocks || []).forEach(b => { byGroup[fAnchor(b)] = b; });
    return { byPillar, byGroup, figures: data.figures || {} };
  }

  /* ---------- shared marks ---------- */

  // A score chip. `v` may be undefined for an unscored indicator.
  function sBox(v, cls) {
    const has = typeof v === "number";
    return `<span class="sBox${cls ? " " + cls : ""}" data-v="${has ? v : "-"}"` +
      ` aria-label="${has ? `Score ${v} of 5, ${esc(word(v))}` : "Not yet scored"}">` +
      `${has ? v : "–"}</span>`;
  }

  function legend() {
    const keys = [1, 2, 3, 4, 5].map(v =>
      `<span class="legendKey"><span class="legendSwatch" data-v="${v}"></span>${v} · ${esc(word(v))}</span>`
    ).join("");
    return `<div class="scoreLegend">${keys}` +
      `<span class="legendKey"><span class="legendSwatch" data-v="-"></span>Not yet scored</span></div>`;
  }

  return {
    WORDS, word, esc, qs,
    allItems, itemById,
    roundsFor, latestRound, isAssessed, isIndicatorAssessed, assessedRegions,
    hasMethod,
    coverage, mean, themeSummary,
    shell, crumbs, sBox, legend,
    fBody, fFigure, fScope, fRefs, fWireRefs, fAnchor, findingsFor,
    helpCallout, undevelopedCallout, noMethodCallout, regionsScoring,
    V3_NOTE,
  };
})();
