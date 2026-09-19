# SEZIONE Home — Implementation Contract v1

Source of truth: Figma file `J5ezpVLsJVHddomgacMRNV`.

Approved founder gate: **APPROVED — 2026-09-19**.

## Target frames
- Desktop: Figma node `1:2`, 1440 × 5980.
- Mobile: Figma node `1:3`, 390 × 5340.
- Intermediate widths interpolate without changing the approved visual hierarchy.

## Visual tokens
- Paper: `#F4F0E8`
- Ink: `#0E0E0D`
- Oxide: `#AD2E1C`
- Cobalt: `#1238F0`
- Mist: `#C7CCD6`
- Warm: `#F5C98C`

Typography:
- Display: Instrument Serif 400.
- UI/body: Geist 400/500.
- Utility: IBM Plex Mono 500.

## Desktop section contract
1. Hero — 960px.
2. Positioning — 520px.
3. Services — 720px.
4. Works — 920px.
5. First Visit — 680px.
6. Team — 760px.
7. Space — 860px.
8. Final CTA — 560px.

Total: 5980px at 1440px reference width.

## Mobile section contract
1. Hero — 860px.
2. Positioning — 450px.
3. Services — 660px.
4. Works — 820px.
5. First Visit — 610px.
6. Team — 720px.
7. Space — 700px.
8. Final CTA — 520px.

Total: 5340px at 390px reference width.

## Images
Use the three approved Higgsfield assets:
- editorial hero portrait;
- technical cutting gesture;
- salon interior.

Hero must use `object-fit: cover` and maintain the off-centre editorial crop. Supporting assets use cover crop consistent with Figma.

## Interaction contract
- Desktop nav: Services / Works / Studio / Prima volta + Prenota.
- Mobile closed state shows brand + MENU. MENU opens an accessible navigation panel.
- All CTA links have visible keyboard focus.
- In-page anchors use smooth scrolling only when reduced motion is not requested.
- No personal-data collection or real booking submission in this Home implementation.

## Accessibility
- One H1.
- Semantic header/main/section/footer.
- Skip link.
- Keyboard-operable mobile menu.
- No serious/critical axe violations.
- Respect `prefers-reduced-motion`.

## Performance
- Hero image: eager + high fetch priority.
- Non-hero images: lazy.
- Fonts use display=swap.
- No framework/runtime JS.
- Target Lighthouse: Performance >= 90, Accessibility >= 95, Best Practices >= 95.
- Target CLS <= 0.1; LCP warning threshold 2.5s.

## Fidelity rule
The browser implementation must reproduce the approved composition, typography hierarchy, palette, section order, image treatment and breakpoint-specific intent. Technical changes may not silently simplify the visual direction.
