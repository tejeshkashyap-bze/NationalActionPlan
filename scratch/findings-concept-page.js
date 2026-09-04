/* findings-concept-page.js — CONCEPT ONLY, lives in scratch/.

   Builds a stripped-down version of city.html so the three findings concepts
   can be compared against real scores, real criteria and the real stylesheet.
   The accordion markup is lifted from city.html so the comparison is fair;
   what changes between concepts is where the findings block is placed.

   Set window.FC_MODE to "inline", "band" or "split" before loading this. */

(function () {
  const MODE = window.FC_MODE || "inline";
  const REGION_KEYS = ["gladstone", "port-hedland", "hunter-valley"];

  let regionKey = NAP.qs("city") || "gladstone";
  if (!REGION_KEYS.includes(regionKey)) regionKey = "gladstone";

  const host = document.getElementById("fcHost");

  function render() {
    const region = regionByKey(regionKey);
    const rName = regionName(regionKey);
    const rounds = NAP.roundsFor(regionKey);
    const round = rounds[0] || null;
    const scores = round ? round.scores : {};
    const F = FC.forRegion(regionKey);

    document.title = `${rName} – findings concept`;

    const picker = `<div class="fcPicker"><span>Region</span>` +
      REGION_KEYS.map((k) =>
        `<button type="button" data-region="${k}" aria-pressed="${k === regionKey}">` +
        `${NAP.esc(regionName(k))}</button>`).join("") +
      `</div>`;

    const head = `<div class="hero tight">
      <div class="eyebrow">${NAP.esc(region ? region.state : "")} · ${NAP.esc(round ? round.date : "Not assessed")} round</div>
      <h1>${NAP.esc(rName)}</h1>
      <div class="regionIntro"><div class="regionProse"><p>
        ${Object.keys(scores).length} of ${NAP.allItems().length} indicators were scored in the
        <strong>${NAP.esc(round ? round.date : "—")}</strong> round.
        ${F.list.length} of the report's sections carry key findings and recommendations.
      </p></div></div>
      ${picker}
    </div>`;

    host.innerHTML = head +
      `<div class="band"><div class="secHead">
         <h2>Indicator scores</h2>
         <div class="secNote">${NAP.esc(noteFor(MODE))}</div>
       </div>
       <div id="legendHost">${round ? NAP.legend() : ""}</div>
       <div id="themes"></div></div>` +
      (MODE === "band" ? bandHTML(F) : "");

    renderThemes(scores, F);
    wire();
  }

  function noteFor(mode) {
    if (mode === "band") return "Click an indicator for its grading scale and evidence. The report's findings are collected below.";
    if (mode === "split") return "Click an indicator for its grading scale and evidence. Findings sit beside the category they cover.";
    return "Click an indicator for its grading scale and evidence. Open a category's findings for what the report concluded across it.";
  }

  /* ── the accordion, as city.html builds it ─────────────────────────────── */

  function renderThemes(scores, F) {
    const themesEl = document.getElementById("themes");

    themesEl.innerHTML = CSC.map((p, pi) => {
      const s = NAP.themeSummary(scores, p.pillarId);
      const isOpen = s.n > 0;

      const groups = p.groups.map((g) => {
        const rows = g.items
          .filter((it) => typeof scores[it.id] === "number")
          .map((it) => {
            const v = scores[it.id];
            const href = `../criterion.html?id=${encodeURIComponent(it.id)}&city=${encodeURIComponent(regionKey)}`;
            return `<a class="iRow" href="${href}">` +
              `<span class="iName">${NAP.esc(it.title)}</span>` +
              `<span class="iScore"><span class="sWord">${NAP.esc(NAP.word(v))}</span>${NAP.sBox(v)}</span></a>`;
          }).join("");
        if (!rows) return "";

        const block = F.byGroup[g.groupId];
        const name = `<div class="grpName">${NAP.esc(g.groupTitle)}` +
          (block && MODE === "band" ? ` <a class="fcJump" href="#fc-${NAP.esc(g.groupId)}">Findings ↓</a>` : "") +
          `</div>`;

        if (MODE === "split" && block) {
          return `<div class="grp grpSplit">
            <div class="grpMain">${name}${rows}</div>
            <aside class="fcRail" id="fc-${NAP.esc(g.groupId)}">
              <div class="fcRailHead"><span class="fcTag">Findings</span>
                <span class="fcCount">${NAP.esc(FC.counts(block))}</span></div>
              <div class="fcRailBody">
                ${FC.scopeHTML(block)}
                <div class="fcBody">${FC.bodyHTML(block.body)}</div>
                ${FC.figuresHTML(block.figures)}
              </div>
            </aside>
          </div>`;
        }

        const inline = (MODE === "inline" && block) ? `
          <details class="fcInline" id="fc-${NAP.esc(g.groupId)}">
            <summary>
              <span class="fcTag">Findings</span>
              <span class="fcTeaser">${FC.marks(FC.teaser(block))}</span>
              <span class="fcCount">${NAP.esc(FC.counts(block))}</span>
            </summary>
            <div class="fcInlineBody">
              ${FC.scopeHTML(block)}
              <div class="fcBody">${FC.bodyHTML(block.body)}</div>
              ${FC.figuresHTML(block.figures)}
            </div>
          </details>` : "";

        return `<div class="grp">${name}${rows}${inline}</div>`;
      }).join("");

      if (!groups) return "";

      return `<section class="pillar">
        <button class="pBtn" type="button" aria-expanded="${isOpen}">
          <span class="pIdx">${String(pi + 1).padStart(2, "0")}</span>
          <span class="pName">${NAP.esc(p.pillarTitle)}</span>
          <span class="pCount">${p.groups.length} groups · ${s.total} indicators${s.n ? ` · <strong>${s.n} scored</strong>` : ""}</span>
          <span class="pCar"></span>
        </button>
        <div class="pBody${isOpen ? " open" : ""}">${groups}</div>
      </section>`;
    }).join("");

    themesEl.querySelectorAll(".pBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const on = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!on));
        btn.nextElementSibling.classList.toggle("open", !on);
      });
    });
  }

  /* ── mode "band": findings collected under the scoreboard ──────────────── */

  function bandHTML(F) {
    if (!F.list.length) return "";
    const groupTitle = (id) => {
      for (const p of CSC) for (const g of p.groups) if (g.groupId === id) return g.groupTitle;
      return id;
    };
    return `<div class="band fcBand">
      <div class="secHead">
        <h2>Key findings and recommendations</h2>
        <div class="secNote">What the report concluded across each category it assessed.</div>
      </div>
      <div class="fcCards">${F.list.map((b) => `
        <article class="fcCard" id="fc-${NAP.esc(FC.anchorFor(b))}">
          <header class="fcCardHead">
            <div class="fcCardCat">${NAP.esc((b.covers || []).map(t => t).join(" · ") || groupTitle(b.group))}</div>
            <h3>${NAP.esc(b.heading)}</h3>
            <div class="fcCount">${NAP.esc(FC.counts(b))}</div>
          </header>
          ${FC.scopeHTML(b)}
          <div class="fcBody">${FC.bodyHTML(b.body)}</div>
          ${FC.figuresHTML(b.figures)}
        </article>`).join("")}</div>
    </div>`;
  }

  /* ── wiring ────────────────────────────────────────────────────────────── */

  function wire() {
    host.querySelectorAll("[data-region]").forEach((b) => {
      b.addEventListener("click", () => {
        regionKey = b.dataset.region;
        history.replaceState(null, "", `?city=${regionKey}`);
        render();
        window.scrollTo({ top: 0 });
      });
    });
  }

  render();
})();
