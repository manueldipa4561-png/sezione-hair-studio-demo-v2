# Current Checkpoint

**Project:** SEZIONE Hair Studio Demo v2  
**Workflow:** Website Design & Production Team v2.3 — GitHub-first  
**Checkpoint:** 2026-09-20 / Lavori implemented  
**Current page:** LAVORI  
**Current gate:** Netlify visual review after automated QA

## Locked pages
- Home: **PAGE LOCKED**
- Services: **PAGE LOCKED** — Manuel: “good next”

## Lavori — research direction
Reference review used established salon/editorial patterns including Hershesons, Larry King, Josh Wood Colour and George Northwood.

Direction locked:
- avoid generic infinite gallery grids;
- avoid fake before/after;
- pair visible work with shape, texture, tone, maintenance and routine;
- make the portfolio editorial and selective;
- do not invent clients, testimonials or claimed outcomes;
- use approved existing imagery before generating anything new.

## Lavori — GitHub implementation
Implemented directly on `main`:
- `lavori.html`
- `lavori.css`
- Home navigation + “VEDI I LAVORI” now point to `lavori.html`
- Services navigation now points to `lavori.html`
- Static QA expanded to Home + Services + Lavori
- Playwright desktop/mobile tests added for Lavori
- axe serious/critical accessibility gate added for Lavori
- visual screenshot artifact added
- Lighthouse CI expanded to Lavori

### Lavori sections
1. Selected Looks hero
2. How to Read the Work
3. Study 01 — Cut / Shape
4. Study 02 — Texture / Detail
5. Movement / Regrowth / Routine principles
6. Final booking/services CTA

### Asset policy
- existing approved SEZIONE imagery only;
- no new Higgsfield generation;
- Higgsfield credits spent on Lavori: **0**.

## Latest implementation state
Latest main commit:
`3dab796085aed394a5f26ae45b08015ba858ca64`

Quality Gate:
`35521423792`

Status at checkpoint:
**RUNNING**

## Netlify
Project:
`sezione-hair-studio-demo-v2`

URL:
https://sezione-hair-studio-demo-v2.netlify.app

Founder-confirmed deployment model:
**GitHub `main` → automatic Netlify deploy**

No Netlify connection settings should be changed.

## Next action
1. Wait for Quality Gate to finish.
2. Verify `/lavori.html` is live on Netlify.
3. Manuel reviews visual on Netlify.
4. APPROVED / “good next” → Lavori becomes PAGE LOCKED and build the next page.
5. REVISION → fix the earliest visual/implementation issue directly in GitHub and redeploy automatically.
