/* findings-concept-render.js — CONCEPT ONLY, lives in scratch/.

   The bit every findings concept shares: turning one block of report content
   into HTML. The concepts differ in WHERE the block goes and what chrome it
   gets, not in how a paragraph or a table is drawn, so that part lives here
   once.

   In the real build this would be a few functions inside nap.js. */

window.FC = (function () {
  const esc = (s) => NAP.esc(s);

  /* Citation markers. The text carries them exactly as the reports place
     them, written as <sup class="refMark">1,2</sup> with this block's own
     numbering. Everything else in the string is escaped; only that tag is
     let through, so the data stays plain text with one known exception.

     Each number becomes a jump link to its entry in the list at the foot of
     the block, but only when the block has a reference list and the numbers
     resolve. Otherwise the marker renders as a plain superscript, which is
     the same quiet failure the indicator pages use. */
  function marks(text, refs, scope) {
    let html = esc(text)
      .replace(/&lt;sup class=&quot;refMark&quot;&gt;([\d,]+)&lt;\/sup&gt;/g,
        (m, list) => `<sup class="refMark">${list}</sup>`);
    if (!refs || !refs.length) return html;
    const have = new Set(refs.map((r) => String(r.n)));
    return html.replace(/<sup class="refMark">([\d,]+)<\/sup>/g, (m, list) => {
      const nums = list.split(",");
      if (!nums.every((n) => have.has(n))) return m;
      return `<sup class="refMark">` + nums.map((n) =>
        `<a data-ref="${esc(scope)}-${n}" tabindex="0" role="link" ` +
        `title="Jump to reference ${n}">${n}</a>`).join(",") + `</sup>`;
    });
  }

  /* The sources behind one block, numbered 1 upward in the order a reader
     meets them. `report` on each entry is the number the printed report used;
     kept in the data for traceability and deliberately not shown. Link text
     is the host, so a long address cannot break the line. */
  function refsHTML(refs, scope) {
    if (!refs || !refs.length) return "";
    return `<div class="fcRefs"><div class="fcRefsHead">References</div>` +
      `<ol class="refList">` + refs.map((r) =>
        `<li class="refItem" id="ref-${esc(scope)}-${r.n}">${esc(r.cite)}` +
        (r.url ? ` <a class="refLink" href="${esc(r.url)}" target="_blank" rel="noopener" ` +
          `title="${esc(r.url)}">${esc(host(r.url))}</a>` : "") + `</li>`).join("") +
      `</ol></div>`;
  }

  function host(url) {
    try { return new URL(url).host.replace(/^www\./, ""); }
    catch (e) { return url; }
  }

  /* Clicking a marker highlights its entry and scrolls to it. No hash: these
     blocks sit inside <details>, and a #ref-… in the URL would fight that. */
  function wireRefJumps(root) {
    (root || document).querySelectorAll(".refMark a").forEach((a) => {
      const go = () => {
        const li = document.getElementById(`ref-${a.dataset.ref}`);
        if (!li) return;
        document.querySelectorAll(".refItem.isTarget").forEach((x) => x.classList.remove("isTarget"));
        li.classList.add("isTarget");
        li.scrollIntoView({ behavior: "smooth", block: "center" });
      };
      a.addEventListener("click", go);
      a.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); }
      });
    });
  }

  function bodyHTML(body, refs, scope) {
    const M = (t) => marks(t, refs, scope);
    return (body || []).map((b) => {
      if (b.h) return `<h4 class="fcSub">${esc(b.h)}</h4>`;
      if (b.fig) return figureHTML(b.fig);
      if (b.ul) return `<ul class="fcList">${b.ul.map((li) => `<li>${M(li)}</li>`).join("")}</ul>`;
      /* The Hunter numbers its recommendations and nests a lettered point
         under each. Flattening that into paragraphs lost the structure the
         report gave it, so it is kept. */
      if (b.ol) return `<ol class="fcOl">${b.ol.map((n) =>
        `<li>${M(n.t)}${(n.sub || []).length
          ? `<ol class="fcOlSub">${n.sub.map((s) => `<li>${M(s)}</li>`).join("")}</ol>` : ""}</li>`
      ).join("")}</ol>`;
      return `<p>${M(b.p)}</p>`;
    }).join("");
  }

  function figureHTML(id) {
    const f = (window.CONCEPT_FIGURES || {})[id];
    if (!f) return "";                     // same quiet failure as a missing reference

    if (f.kind === "table") {
      return `<figure class="fcFig">
        <figcaption class="fcCap"><span class="fcNum">${esc(f.number)}</span> ${esc(f.title)}</figcaption>
        <div class="tableWrap"><table class="dataTable">
          <thead><tr>${f.columns.map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead>
          <tbody>${f.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table></div>
        ${f.note ? `<p class="fcNote">${esc(f.note)}</p>` : ""}
      </figure>`;
    }

    return `<figure class="fcFig">
      <figcaption class="fcCap"><span class="fcNum">${esc(f.number)}</span> ${esc(f.title)}</figcaption>
      <img class="fcImg" src="${esc(f.src)}" alt="${esc(f.alt)}" loading="lazy" />
      ${f.summary ? `<p class="fcNote">${esc(f.summary)}</p>` : ""}
    </figure>`;
  }

  function figuresHTML(ids) {
    return (ids || []).map(figureHTML).join("");
  }

  /* The first sentence of whatever the report opened with. This is the line
     that has to earn the click, so it takes the lead-in paragraph when there
     is one and only falls back to the first bullet when there isn't. */
  function teaser(block) {
    const lead = block.body.find((b) => b.p || b.ul);
    const first = !lead ? "" : (lead.p || lead.ul[0]);
    const stop = first.indexOf(". ");
    return stop > 40 ? first.slice(0, stop + 1) : first.slice(0, 180) + (first.length > 180 ? "…" : "");
  }

  /* NOT CURRENTLY RENDERED. Review comments #3 to #5 took the count off the
     summary line, so a collapsed block now shows its tag and nothing else.
     Kept because it is the only place that knows how to describe a block in
     the report's own vocabulary, and putting a count back is a one-line
     change if that turns out to be wanted somewhere.

     "7 findings · 2 recommendations" where the report used its own
     sub-headings, "5 paragraphs" where it wrote prose. Counting what the
     report actually put there, rather than imposing one vocabulary on both. */
  function counts(block) {
    const bits = [];
    /* A context block is prose that happens to contain a list or two, so
       counting its bullets the way a bulleted findings block is counted would
       read as "4 points · 2 points". Count its paragraphs instead. */
    const hasLists = block.body.some((b) => b.ul) && !block.pillar;

    if (hasLists) {
      block.body.forEach((b, i) => {
        if (!b.ul) return;
        const h = (block.body[i - 1] || {}).h;
        bits.push(`${b.ul.length} ${h ? h.toLowerCase() : "point" + (b.ul.length > 1 ? "s" : "")}`);
      });
    } else {
      const paras = block.body.filter((b) => b.p).length;
      if (paras) bits.push(`${paras} paragraph${paras > 1 ? "s" : ""}`);
    }

    /* Numbered recommendations count too. The Hunter writes prose and then
       numbers three of them, so "3 paragraphs" alone undersells the block. */
    block.body.forEach((b, i) => {
      if (!b.ol) return;
      const h = (block.body[i - 1] || {}).h;
      bits.push(`${b.ol.length} ${h ? h.toLowerCase() : "point" + (b.ol.length > 1 ? "s" : "")}`);
    });

    const objs = block.body.filter((b) => b.fig)
      .map((b) => (window.CONCEPT_FIGURES || {})[b.fig])
      .filter(Boolean);
    const tables = objs.filter((f) => f.kind === "table").length;
    const figs = objs.length - tables;
    if (tables) bits.push(`${tables} table${tables > 1 ? "s" : ""}`);
    if (figs) bits.push(`${figs} figure${figs > 1 ? "s" : ""}`);
    return bits.join(" · ");
  }

  /* Blocks for a region, indexed by the groupId they render against.

     A block names the categories it covers. Where it covers more than one —
     Gladstone wrote one set across federal, state and local policy; Port
     Hedland wrote one across the whole Enabling Infrastructure theme — it is
     anchored to the LAST of them, so the findings land after every category
     they draw on rather than above half of them. */
  function anchorFor(block) {
    let last = null;
    CSC.forEach((p) => p.groups.forEach((g) => {
      if ((block.covers || []).includes(g.groupTitle)) last = g.groupId;
    }));
    return last || block.group;
  }

  function forRegion(key) {
    const r = (window.CONCEPT_FINDINGS.regions || {})[key];
    if (!r) return { round: null, byGroup: {}, list: [], byPillar: {}, contexts: [] };
    const byGroup = {};
    r.blocks.forEach((b) => { byGroup[anchorFor(b)] = b; });
    const byPillar = {};
    (r.contexts || []).forEach((c) => { byPillar[c.pillar] = c; });
    return { round: r.round, byGroup, list: r.blocks, byPillar, contexts: r.contexts || [] };
  }

  function scopeHTML(block) {
    const covers = (block.covers || []).join(" · ");
    if (!covers) return block.scope ? `<div class="fcScope">${esc(block.scope)}</div>` : "";
    return `<div class="fcScope"><strong>Covers</strong> ${esc(covers)}` +
      (block.scope ? ` — ${esc(block.scope)}` : "") + `</div>`;
  }

  return { bodyHTML, figureHTML, figuresHTML, teaser, counts, forRegion, anchorFor,
           scopeHTML, marks, refsHTML, wireRefJumps };
})();
