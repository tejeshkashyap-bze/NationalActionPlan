# Findings round — three concepts

Concepts for bringing the reports' **Key findings and recommendations**, and the
section tables, charts and maps, into the region page. Background and the full
inventory are in `report-content-gap-plan.md` (project docs).

| File | Direction |
| --- | --- |
| `findings-inline.html` | **A · In place.** Findings collapsed inside the accordion, under the rows of the category they cover. |
| `findings-band.html` | **B · Findings band.** Scores stay a clean scoreboard; findings collected in their own band below, figures full width. |
| `findings-split.html` | **C · Split view.** Two columns — rows left, findings pinned right. Wide screens only; stacks below tablet. |

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
