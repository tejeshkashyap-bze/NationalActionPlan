/* findings-concept-render.js — CONCEPT ONLY, lives in scratch/.

   The bit every findings concept shares: turning one block of report content
   into HTML. The concepts differ in WHERE the block goes and what chrome it
   gets, not in how a paragraph or a table is drawn, so that part lives here
   once.

   In the real build this would be a few functions inside nap.js. */

window.FC = (function () {
  const esc = (s) => NAP.esc(s);

  /* Citation markers. The reports print superscript numbers in the findings
     text the same way they do in the evidence, and the data here still holds
     them as plain digits, so this guesses where they are.

     It is a DEMO ONLY, to show the treatment. The guess cannot tell a citation
     from a decimal ("2035.101" and "5.6" look the same), so it deliberately
     refuses to mark digits that follow a digit, and misses a few real markers
     as a result. The actual import does what the references import already
     did: write <sup class="refMark"> into the text at the point the report
     put it, and resolve it against references-<region>.js. No guessing. */
  function marks(text) {
    return esc(text).replace(/([a-z%\)”"’])(\.?)(\d{1,3}(?:,\d{1,3})*)(?=[\s)]|$)/g,
      (m, ch, dot, nums) => `${ch}${dot}<sup class="refMark">${nums}</sup>`);
  }

  function bodyHTML(body) {
    return (body || []).map((b) => {
      if (b.h) return `<h4 class="fcSub">${esc(b.h)}</h4>`;
      if (b.ul) return `<ul class="fcList">${b.ul.map((li) => `<li>${marks(li)}</li>`).join("")}</ul>`;
      return `<p>${marks(b.p)}</p>`;
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

  /* "4 findings · 3 recommendations", or the first sentence when the report
     wrote prose. This is the line that has to earn the click. */
  function teaser(block) {
    const list = block.body.find((b) => b.ul);
    const first = list ? list.ul[0] : ((block.body.find((b) => b.p) || {}).p || "");
    const stop = first.indexOf(". ");
    return stop > 40 ? first.slice(0, stop + 1) : first.slice(0, 180) + (first.length > 180 ? "…" : "");
  }

  /* "7 findings · 2 recommendations" where the report used its own sub-headings,
     "5 paragraphs" where it wrote prose. Counting what the report actually put
     there, rather than imposing one vocabulary on both. */
  function counts(block) {
    const bits = [];
    const hasLists = block.body.some((b) => b.ul);

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

    const figs = (block.figures || []).length;
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
    if (!r) return { round: null, byGroup: {}, list: [] };
    const byGroup = {};
    r.blocks.forEach((b) => { byGroup[anchorFor(b)] = b; });
    return { round: r.round, byGroup, list: r.blocks };
  }

  function scopeHTML(block) {
    const covers = (block.covers || []).join(" · ");
    return `<div class="fcScope"><strong>Covers</strong> ${esc(covers)}` +
      (block.scope ? ` — ${esc(block.scope)}` : "") + `</div>`;
  }

  return { bodyHTML, figureHTML, figuresHTML, teaser, counts, forRegion, anchorFor, scopeHTML, marks };
})();
