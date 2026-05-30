# Handoff: Stani i Hoxhës — Website (Direction A)

## Overview
A marketing website for **Stani i Hoxhës** (Hotel Stani), a seasonal mountain retreat in the
Novoseja highlands above Kukës, Albania. Open only in summer (opens **22 May**; last season
closed **31 August** — annual close date is **not fixed**, treat "end of August" as the rule).
The property has **20 rooms in the main lodge + 4 standalone one-room cabins**.

The site is a single long-scroll detail page (plus future sub-pages for individual rooms) covering:
hero + availability widget, About, Why-choose-us, Rooms & Cabins, Gallery, Experiences,
Location, and Contact. Content is **bilingual: Albanian (primary) + English**.

**No live booking.** The contact form is **email-only** — it sends an inquiry to
`staniihoxhes@gmail.com`; the owner confirms manually.

---

## About the Design Files
The files in this bundle (`Hotel Wireframes.html` + the `dir-*.jsx` / `wireframe-primitives.jsx`
sources) are **design references created in HTML** — a mid-fidelity wireframe prototype showing
intended structure, hierarchy, copy, and section order. They are **not production code to copy**.

The task is to **build a real website from these references**. There is **no existing codebase**,
so the recommended stack (already decided with the client) is:

| Concern | Decision |
|---|---|
| Framework | **Astro** (static site generation) |
| Styling | Your choice — plain CSS / CSS modules / Tailwind. Match the visual spec below. |
| Content / CMS | **Markdown / MDX files in the repo** (see `/content` examples in this bundle) |
| i18n | Albanian (default) + English. Astro i18n routing or content collections per locale. |
| Booking | **None.** Email-only inquiry form → `staniihoxhes@gmail.com` (use a form service such as Formspree, Web3Forms, or a small serverless function + Resend/Postmark). |
| Map | **Static styled map image** + "Open in Google Maps" link. No live map SDK needed. |
| Hosting | Static host — Netlify / Cloudflare Pages / Vercel (free tier is sufficient). |
| Domain | Not purchased yet. Suggest `stanihoxhes.al` / `stanihoxhes.com`. |

---

## Fidelity
**Low-fidelity (wireframe).** Layout, section order, hierarchy, and copy are real and should be
followed. **Styling shown (grey placeholder boxes) is NOT final** — apply the brand system in the
Design Tokens section below. All images are labelled placeholders to be replaced with real
photography from the upcoming photoshoot (see Assets → shot list).

---

## Brand
The logo (`assets/logo-stani.svg`, also `.png`) is a gold **"S" monogram** in a circle over a
serif wordmark "HOTEL · STANI · I HOXHËS" on a forest-green textured field. The whole brand is
**gold-on-forest-green with a classic serif voice**. Lean into that: serif display type, generous
whitespace, gold rules and accents, deep green for dark sections.

Tagline: **"Mes maleve, pranë qetësisë."** / *"Among the mountains, close to tranquility."*

---

## Page structure & sections

Order on the page (top → bottom). Section numbers match the wireframe labels.

### Nav (sticky)
- Top utility bar: phone `+355 69 240 4448`, email, **season line** `SEZONI 2026 · 22 MAJ — FUND GUSHTI`, language switch `SQ · EN`.
- Main bar: left links (SHTËPIA / BUNGALLOT / KUZHINA / NATYRA), centered serif wordmark, right links (GALERIA / NDODHEMI / KONTAKT / **REZERVO**).
- Mobile: hamburger + centered wordmark + language code.

### Hero
- Full-width hero image (alpine valley + main lodge, golden light). Placeholder labelled.
- **Season badge** top-right of image: `HAPUR · 22 MAJ — FUND GUSHTI` (white card, thin border).
- Centered block below image: eyebrow `QË NGA 2018 · MALET E NOVOSEJËS · KUKËS, AL`, large serif title **"Stani i Hoxhës"** (gold-brown `#9a7438`), italic tagline + English subtitle.
- **Availability widget** (a horizontal bar, NOT a real booking engine — it's a styled inquiry shortcut): four fields — MBËRRITJA (arrival), LARGIMI (departure), MYSAFIRË (guests), QËNDRO NË (House / Cabin) — + dark "KONTROLLO DATAT" button. On submit it should scroll to / prefill the contact form (no live availability).

### 01 · Rreth nesh / About Us
Two-column: left text (real bilingual copy, see content file), three stats (`20 + 4` rooms·cabins, `2018` founded, `3 mu.` summer season), right lifestyle image.

### Pse të na zgjidhni / Why choose us  (dark forest-green band `#233429`)
Centered headline (the "tranquility / fresh air / traditional flavors" line, bilingual) + three
pillars: **Qetësi / Tranquility**, **Mikpritje / Hospitality**, **Tradita / Tradition**.

### 02 · Qëndrimi / Rooms & Cabins
Eyebrow + heading "Njëzet dhoma, katër bungallo." Three cards (Standard room / Suite / Cabin),
each: image, location + count, "from" price, name (SQ + EN), 2-line desc, chips (guests / m² / view),
"SHIKO →". **See "Rooms & Cabins data" below — these are placeholders the developer chooses.**

### 03 · Galeria / Gallery
Heading "Mali, drita, qetësia." + mosaic grid (one large + smaller tiles). "Shih galerinë e plotë" link.

### 04 · Eksperienca / Experiences  (the real differentiator — these are confirmed, true to the property)
Eyebrow "ÇFARË BËHET KËTU". 4-column grid of 8 cards (SQ title, EN subtitle, one-line desc):
1. **Liqeni i Novosejt** / Lake Novoseja
2. **Shtegu i Ngjyrave** / The Path of Colors
3. **Lëndina e Luleve** / Flower Meadow
4. **Pamje Panoramike** / Panoramic Views
5. **Piknik & Kamping** / Picnic & Camping
6. **Qetësi e Plotë** / Total Quiet
7. **Kuzhinë Tradicionale** / Traditional Kitchen
8. **Mikpritje** / Hospitality

### 05 · Ndodhemi / Location
Two-column: left heading "Lart në malet e Novosejës." + distance list (Tirana airport ~180km/~3h;
Kukës town; Lake Novoseja; Path of Colors trailhead) — **exact distances TBD**; right static map
image with a pin. Add a real "Open in Google Maps" link once the client provides the pin location.

### 06 · Kontakt / Contact
Two-column: left **real contact details** (location Novosejë, Kukës, Albania; phone
`+355 69 240 4448`; email `staniihoxhes@gmail.com`; Instagram `@staniihoxhes`); right **inquiry
form** (Emri, Mbiemri, Email, Mbërritja, Largimi, Mesazh, "DËRGO KËRKESËN"). Form is email-only.
On build: embed Google Map + link Instagram profile.

### Footer  (deep green `#1a2b1f`)
Gold wordmark + tagline + contact block + `© 2026 · SEZONI 22 MAJ — FUND GUSHTI` + link columns.

---

## Rooms & Cabins data — DEVELOPER TO DEFINE (real inventory not yet available)

The client does **not** have final room inventory or pricing yet. Build the Rooms & Cabins section
**data-driven** so it can be filled in later by editing markdown, and ship with sensible placeholder
content. Use this schema (one markdown/MDX file per room *type*, not per physical room):

```yaml
# content/rooms/<slug>.md  (e.g. content/rooms/dhoma-standarde.md)
---
slug: dhoma-standarde
order: 1
building: main-lodge        # main-lodge | cabin
count: 12                   # how many of this type exist (main lodge totals 20; cabins total 4)
name_sq: "Dhoma Standarde"
name_en: "Standard Room"
size_sqm: null              # number | null  (fill when known)
max_guests: 2
view_sq: "pamje malore"
view_en: "mountain view"
price_from_eur: null        # number | null  (fill when known)
amenities: ["wifi", "breakfast", "ensuite"]
hero: "/images/rooms/standard-01.jpg"
gallery: ["/images/rooms/standard-01.jpg", "..."]
---
Short bilingual description body...
```

**Constraints that ARE fixed** (use these, don't invent others):
- Main lodge = **20 rooms total**, across (suggested) 2–3 types.
- Cabins = **4 standalone cabins, one room each**.
- A sensible default split to ship with (developer may choose differently): 12 Standard + 8 Suite
  in the main lodge, + 4 Cabins. Counts must sum to 20 for the lodge and 4 for the cabins.
- Prices and sizes render as "—" / "Çmimi sipas kërkesës" ("price on request") when `null`, with a
  "Kontaktoni për çmime" CTA, until the client supplies numbers.

Make the room **detail page** a stub/route (`/dhomat/<slug>`) wired to the same data, even if it's
minimal for v1.

---

## Design Tokens

### Color (sampled from the logo)
| Token | Hex | Use |
|---|---|---|
| `--green-deep` | `#1a2b1f` | footer, deepest sections, vignette |
| `--green` | `#233429` | dark bands (Why-choose-us), nav on scroll (optional) |
| `--green-moss` | `#334436` | tints, hovers on green |
| `--gold-deep` | `#9a7438` | hero/display headings on light |
| `--gold` | `#b88a4f` | primary accent, rules, buttons, links |
| `--gold-light` | `#c8a063` | wordmark/headings on green |
| `--paper` | `#ffffff` | page background |
| `--paper-2` | `#f4f4f2` | alternating section background (warm off-white) |
| `--ink` | `#222222` | body text on light |
| `--ink-2` | `#444444` | secondary text |
| `--ink-3` | `#6b6b6b` | captions, eyebrows, mono labels |
| `--line` | `#cdcdcd` | hairline borders |

### Typography
- **Display / headings:** a refined serif. The logo uses a Trajan/Cinzel-like all-caps face for
  "STANI" and a lighter serif for "HOTEL / I HOXHËS". Recommended pairing: **Cormorant Garamond**
  or **EB Garamond** (headings, light/regular weight) — both free on Google Fonts and cover the
  Albanian glyphs (ë, ç). Use **all-caps + letter-spacing** for the wordmark/eyebrows.
- **Body:** a clean humanist sans — e.g. **Inter is discouraged**; prefer something with warmth like
  **Mr Eaves / Brandon** if budget allows, otherwise system-ui or **Source Sans 3**.
- **Mono / labels:** any mono (used for eyebrows, distances, contact block). e.g. system mono.
- Hero title ~80px desktop / 40px mobile, weight 300. Section headings ~32–48px. Body ~13–15px,
  line-height ~1.6. Eyebrows ~10–11px, letter-spacing 0.18–0.2em, uppercase.

### Spacing & layout
- Desktop content max-width ~1200px; section vertical padding ~120px (60px mobile), 80px horizontal (20px mobile).
- Cards/inputs: 1px `--line` borders, **square or ~3–4px radius** (keep it crisp/editorial, avoid big rounded corners).
- Buttons: solid `--ink` or `--gold` fill, white text, ~12–16px padding, small letter-spacing, square-ish.
- Mobile breakpoint ~640px; switch multi-column grids to single column. Min touch target 44px.

### Imagery
Diagonal-striped grey placeholders in the wireframe = real photos. Every `ImgPH` label says what
goes there. Maintain generous aspect ratios; the hero is ~16:9 to 2:1.

---

## Interactions & Behavior
- **Language switch (SQ/EN):** swaps all copy. Albanian is the default locale / default route.
- **Availability widget:** not a booking engine. Selecting fields + submit scrolls to the contact
  form and (ideally) prefills arrival/departure/guests/building. No availability lookup.
- **Contact / inquiry form:** client-side validation (required: name, email; valid email). On submit,
  send email to `staniihoxhes@gmail.com` via a form service or serverless function. Show success/error states. Include a honeypot/anti-spam measure.
- **Gallery:** thumbnails open a lightbox (v1 can simply link to a gallery page).
- **Nav:** sticky; consider it turning green/opaque after hero scroll.
- **Smooth in-page anchor scrolling** for nav links (Rooms, Gallery, Location, Contact).
- **Responsive:** all sections collapse to single column on mobile per the mobile artboard.

---

## State
Minimal — this is a static marketing site.
- `locale`: 'sq' | 'en' (routing/content collection).
- Contact form: field values, validation errors, submit status (idle/sending/success/error).
- Availability widget: arrival, departure, guests, building — passed to the contact form.
- Mobile nav: open/closed.
- Gallery lightbox (if built): open + active index.

---

## Assets
- `assets/logo-stani.svg` — **vector logo** (preferred; includes green background). Ask client for a
  transparent / gold-only variant for use on light backgrounds.
- `assets/logo-stani.png` — raster fallback (979×531).
- **Photography — not yet shot** (photoshoot scheduled). Recommended shot list (~60 images):
  - Hero: main lodge exterior + valley, golden hour (landscape, 2:1).
  - Each room type: 2–3 interiors. Each of the 4 cabins: exterior + interior.
  - Experiences: Lake Novoseja, Path of Colors trail, flower meadow, panoramic view, picnic/camping setup, traditional kitchen / sofra, family/host moment.
  - Detail/texture shots for the gallery mosaic (stone, wood, light, flowers).
- **Map:** static styled image of the Novoseja highlands with a pin; plus the Google Maps pin URL
  (client to provide exact coordinates — placeholder note in the Location section).
- Instagram: `@staniihoxhes` (link/embed).

---

## Content (real, confirmed)
Bilingual copy lives in `/content` markdown files in this bundle (`about.md`, `experiences.md`,
`contact.md`). The About and Why-choose-us text is the client's final wording. Rooms content is
placeholder per the schema above.

Contact (final):
- Location: **Novosejë, Kukës, Albania**
- Phone: **+355 69 240 4448**
- Email: **staniihoxhes@gmail.com**
- Instagram: **@staniihoxhes**
- Season: opens **22 May**, closes **end of August** (date not fixed; 2025 closed 31 Aug)
- Founded: **2018**

---

## Files in this bundle
- `Hotel Wireframes.html` — the wireframe canvas (open in a browser). Direction A is the locked design; B/C/D are earlier alternates, ignore for build.
- `dir-a.jsx` — Direction A source (the page being built). Best reference for section content & order.
- `wireframe-primitives.jsx` — shared wireframe helpers (image placeholders, text bars). Reference only.
- `design-canvas.jsx`, `tweaks-panel.jsx` — prototype scaffolding, **not** part of the website. Ignore.
- `content/about.md`, `content/experiences.md`, `content/contact.md` — real bilingual content.
- `content/rooms/_schema.md` + example room files — the room data model to implement.
- `assets/logo-stani.svg`, `assets/logo-stani.png` — logo.

> Note: the `.jsx` files use React purely to render the wireframe; **do not** carry that structure
> into the build. Recreate Direction A in Astro with your own components.
