# Findings round — three concepts

> **Built. Concept A shipped on 9 September 2026.** The findings and context
> blocks are on `city.html` for real, fed by `findings-<region>.js`, with the
> renderer in `nap.js` and the styles at the foot of `styles.css`. See
> *Theme-level report content* in `CLAUDE.md`. These three files stay as the
> record of what was tried: B and C were not chosen, and the notes below on
> what the first cut got wrong are worth keeping.

Concepts for bringing the reports' **Key findings and recommendations**, and the
section tables, charts and maps, into the region page. Background and the full
inventory are in `report-content-gap-plan.md` (project docs).

| File | Direction |
| --- | --- |
| `findings-inline.html` | **A · In place.** Findings collapsed inside the accordion, under the rows of the category they cover. |
| `findings-band.html` | **B · Findings band.** Scores stay a clean scoreboard; findings collected in their own band below, figures full width. |
| `findings-split.html` | **C · Split view.** Two columns — rows left, findings pinned right. Wide screens only; stacks below tablet. |

## Corrected 9 September 2026

The first cut of this round made one substantive mistake and carried three
smaller ones. All are fixed here.

**Section context was inside the findings.** Opening Gladstone's Enabling
Infrastructure findings showed Table 3 and the demand-scenario figures. Those
come from the top of section 1.1, before any indicator is scored: they are
context for the Energy System indicators, not findings about them. Every
report has this material, and it now has its own collapsed block that opens
the theme, where findings close it. Same treatment for the Hunter's Figure 1
and the Port Hedland map. Gladstone's Table 5 is out of both: the report puts
it inside indicator 2.1.1, so it belongs to that indicator through the
evidence-text marker, not to a theme-level block.

**The label said "Findings".** The reports call these sections "Key findings
and recommendations". The badge now does too.

**Port Hedland's text had been reworded on the way in.** "East Pilbara" for
"Eastern Pilbara"; "Commendable actions from some companies with Fortescue
benefiting" for "Commendable actions from some companies are in evidence, with
Fortescue benefiting"; "a key focus on iron ore exporters" for "a key focus for
the future of iron ore exporters"; and three of the Social Acceptance
recommendations rewritten as imperatives. One finding, on Mineral Resources'
Wodgina Lithium Project, had been dropped. All four sections are re-imported
verbatim from the docx.

**The Hunter's numbered recommendations had been flattened into paragraphs.**
The report numbers three recommendations and nests a lettered point under each.
That structure is kept.

Gladstone's and the Hunter's findings prose were checked paragraph by paragraph
against the reports and were already verbatim. Nothing there changed.

---

All three read the same data and render it the same way:

- `findings-concept-data.js` — what a real `findings-<region>.js` would hold, for
  Gladstone, Port Hedland and Hunter Valley at once so the concepts can be
  compared without three files.
- `findings-concept-render.js` — turns one block of report content into HTML.
- `findings-concept-page.js` — a stripped-down `city.html` with a region picker.
- `findings-concept.css` — the shared look. The per-concept `<style>` blocks are
  what differs.
- `figures/` — three figures lifted from the report PDFs for the mockup. Not
  final artwork.

Use the region picker at the top of each page to see all three report shapes:
Gladstone writes prose, Port Hedland writes `Key findings:` / `Recommendations:`
bullets, Hunter writes prose with numbered recommendations. Nothing is reworded
to fit the site.

Nothing here is wired into the real pages.
