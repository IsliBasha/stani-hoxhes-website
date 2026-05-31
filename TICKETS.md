# Development Tickets — Stani i Hoxhës

Generated from `/impeccable critique` session on 2026-05-31.

---

## P0

### T-01 — Wire room photos back into room cards
**File:** `src/components/sections/Rooms.astro`
**Problem:** Room cards render `.img-ph` diamond placeholders. Real WebP images exist at `public/images/rooms/`. `room.data.hero` is never rendered.
**Fix:** Replace `.img-ph` block with `<img src={room.data.hero} alt={name} />`, restore `.room-card__img` CSS with `aspect-ratio: 4/3; object-fit: cover`.
**Effort:** Low

---

## P1

### T-02 — Fix or remove the dead gallery CTA
**File:** `src/components/sections/Gallery.astro`
**Problem:** `<span class="gallery__all eyebrow">SHIH GALERINË E PLOTË · 60+ FOTO →</span>` is styled like a link with an arrow but is a non-interactive `<span>` going nowhere.
**Fix:** Either build a lightbox and convert to a real `<a>`, or remove the CTA and arrow entirely. No middle ground.
**Effort:** Low (remove) / Medium (lightbox)

### T-03 — Define `.btn` and brand the submit button
**File:** `src/styles/global.css`, `src/components/sections/Contact.astro`
**Problem:** `.btn` is used on the form submit button but never defined — renders as browser-default near-black, breaking the gold/green palette at the primary conversion point.
**Fix:** Define `.btn` in `global.css`: `background: var(--green)`, `color: var(--paper)`, `font-family: var(--font-mono)`, `letter-spacing: 0.14em`, `padding: 14px 32px`, hover with `--green-moss`.
**Effort:** Low

---

## P2

### T-04 — Add `prefers-reduced-motion` guard globally
**File:** `src/styles/global.css`
**Problem:** Only `Hero.astro` has a reduced-motion block. Nav, Footer, Gallery, Rooms, Contact, Location, and Experiences all fire transitions for users who opted out of motion.
**Fix:** Add to bottom of `global.css`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition: none !important;
    animation: none !important;
  }
}
```
**Effort:** Low

### T-05 — Add missing SEO metadata to Base.astro
**File:** `src/layouts/Base.astro`
**Problem:** Missing `og:image`, `<link rel="canonical">`, `hreflang="x-default"`, Twitter card tags. Social shares show no image; crawlers cannot determine canonical locale.
**Fix:** Add `og:image` pointing to `/images/hero.webp`, canonical URL prop, `hreflang="x-default"` pointing to `/`, basic `twitter:card` block.
**Effort:** Low

### T-06 — Shorten WhyChooseUs section heading
**File:** `src/components/sections/WhyChooseUs.astro`, `src/i18n/ui.ts`
**Problem:** The `title` is a 13-word sentence rendered at display size — reads as marketing copy, not a section label.
**Fix:** Shorten `title` to 3–5 words (e.g. `"Pse Stani i Hoxhës."`) and move the current sentence into the `subtitle` field. Update both `sq` and `en` in `ui.ts`.
**Effort:** Low

---

## P3

### T-07 — Fix mobile nav: close menu on link tap
**File:** `src/components/layout/Nav.astro` (script block)
**Problem:** Tapping a nav link on mobile scrolls to the anchor but leaves the menu overlay open, covering the content.
**Fix:** Add click listener to all `.nav__mobile-link` elements that removes `is-open` and resets `aria-expanded` / `aria-hidden`.
**Effort:** Low

### T-08 — Fix contact form: date constraints + i18n subject + method
**File:** `src/components/sections/Contact.astro`, `src/i18n/ui.ts`
**Problem:** Three issues: (a) date inputs accept any date including off-season; (b) `<form>` is missing `method="post"`; (c) hidden subject field is Albanian on the English page.
**Fix:** (a) Add `min="2026-05-22" max="2026-08-31"` to both date inputs. (b) Add `method="post"` to `<form>`. (c) Drive subject from `t.form.subject` in both locales in `ui.ts`.
**Effort:** Low

---

## Low Priority

### T-09 — Fix Google Fonts render-blocking import
**File:** `src/styles/global.css`, `src/layouts/Base.astro`
**Problem:** `@import url('https://fonts.googleapis.com/...')` in CSS is synchronous and render-blocking. Delays FCP.
**Fix:** Remove `@import` from CSS. Add `<link rel="preconnect">` + `<link rel="stylesheet">` directly in `Base.astro` `<head>`.
**Effort:** Low

### T-10 — Fix hardcoded font sizes (token violations)
**File:** `src/components/sections/Contact.astro`, `src/components/sections/Hero.astro`
**Problem:** `.contact__label { font-size: 9px }` is the only token violation in the codebase. `hero__badge` at `7.5px` on mobile is below legibility.
**Fix:** Replace `9px` with `var(--text-eyebrow)` in Contact. On mobile badge: either `display: none` or raise to `var(--text-eyebrow)`.
**Effort:** Low

### T-11 — Add CTA at end of Kitchen section
**File:** `src/components/sections/Kitchen.astro`, `src/i18n/ui.ts`
**Problem:** The Kitchen section is the most emotionally resonant on the page but has no path to conversion.
**Fix:** Add `<a href="#kontakt">` after the dish list in gold mono text. Add `cta` string to `sq.kitchen` and `en.kitchen` in `ui.ts`.
**Effort:** Low

### T-13 — Add nearby activities map (Leaflet.js)
**Files:** `src/components/sections/Location.astro` (or new `src/components/sections/Activities.astro`), `src/i18n/ui.ts`
**Problem:** No visual map of nearby activities exists. Guests have no way to discover hiking trails, Lake Novoseja, viewpoints, or nearby villages before making an inquiry.
**Fix:** Add an interactive Leaflet.js map with custom gold/green SVG markers for activity pins (trails, lake, viewpoints, villages). Activity list lives in `ui.ts` for bilingual support. Either expand the existing Location section or add a new section between Experiences and Location. No API key required — uses OpenStreetMap tiles.
**Effort:** Medium

### T-12 — Fill room detail page placeholder content
**Files:** `src/content/rooms/dhoma-standarde.md`, `suita.md`, `kabina.md`
**Problem:** All three room descriptions end with the literal string `(PLACEHOLDER)` in both languages. Visible on room detail pages.
**Fix:** Awaiting client copy. Until then, either remove `(PLACEHOLDER)` suffix or conditionally hide the description block.
**Status:** Blocked on client

---

## Summary

| Ticket | Priority | Effort | Status |
|--------|----------|--------|--------|
| T-01 Room photos | P0 | Low | Open |
| T-02 Gallery CTA | P1 | Low/Medium | Open |
| T-03 `.btn` styles | P1 | Low | Open |
| T-04 Reduced motion | P2 | Low | Open |
| T-05 SEO metadata | P2 | Low | Open |
| T-06 Why heading | P2 | Low | Open |
| T-07 Mobile nav close | P3 | Low | Open |
| T-08 Form fixes | P3 | Low | Open |
| T-09 Fonts | Low | Low | Open |
| T-10 Token fixes | Low | Low | Open |
| T-11 Kitchen CTA | Low | Low | Open |
| T-12 Room copy | Low | Low | Blocked |
| T-13 Activities map | Low | Medium | Open |
