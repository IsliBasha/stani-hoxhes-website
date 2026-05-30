# START HERE — How to build this site with Claude Code

This folder is a complete handoff for the **Stani i Hoxhës** website. Follow these
steps to turn it into a real, deployed site. No prior context from the design
conversation is needed — everything is in `README.md` and `content/`.

---

## 0. What you're building
A small, fast, **static** marketing site for a seasonal mountain hotel in Kukës, Albania.
Bilingual (Albanian default + English). **No online booking** — a contact form emails the
owner. Full spec is in **`README.md`** (read it before coding).

---

## 1. Install Claude Code (one time)
```bash
npm install -g @anthropic-ai/claude-code
```
You'll need a Claude account / API access. (See Anthropic's Claude Code docs for sign-in.)

## 2. Create a project folder and drop this handoff inside it
```bash
mkdir stani-website && cd stani-website
# copy this entire design_handoff_stani_website/ folder into here
```

## 3. Start Claude Code in that folder
```bash
claude
```

## 4. Paste this starter prompt
> Read `design_handoff_stani_website/README.md` and `START_HERE.md` in full, then
> scaffold an **Astro** site that implements **Direction A**.
> Requirements:
> - Static output, deployable to Cloudflare Pages / Netlify free tier.
> - Bilingual: Albanian (default locale) + English, using Astro content collections / i18n routing.
> - Pull copy from the markdown in `design_handoff_stani_website/content/` (about, experiences, contact).
> - Build the Rooms & Cabins section data-driven from `content/rooms/*.md` using the documented schema. Render "Price on request" where prices are null. Keep main-lodge total = 20, cabins = 4.
> - Apply the brand tokens (forest green + gold) and serif typography from the README. Do NOT copy the grey wireframe styling.
> - Contact form is email-only → `staniihoxhes@gmail.com` (use Web3Forms or Formspree; add a honeypot).
> - Location section: embed the Google Maps iframe from `content/contact.md` and add an "Open in Google Maps" link.
> - Use the logo at `assets/logo-stani.svg`.
> Start by proposing the file/folder structure and the component list, then build section by section. Use the labelled image placeholders until I provide real photos.

## 5. Iterate
Work through it section by section (Nav → Hero → About → Why → Rooms → Gallery →
Experiences → Location → Contact → Footer). Run `npm run dev` and compare against
`Hotel Wireframes.html` (open it in a browser — Direction A is the locked design).

## 6. Deploy
```bash
npm run build      # outputs static files to ./dist
```
Push to GitHub, then connect the repo to **Cloudflare Pages** or **Netlify** (both free,
build command `npm run build`, output dir `dist`). Point your domain at it once purchased
(`stanihoxhes.al` / `.com` suggested).

---

## What's already provided vs. still needed

**Provided (ready to use):**
- Full design spec + section-by-section layout — `README.md`
- Real bilingual copy — `content/about.md`, `content/experiences.md`, `content/contact.md`
- Room/cabin data model + 3 placeholder entries — `content/rooms/`
- Logo — `assets/logo-stani.svg` / `.png`
- Brand colors, type recommendations, spacing — `README.md` → Design Tokens
- Google Maps embed URL + coordinates — `content/contact.md`
- Contact details, season dates, Instagram — `content/contact.md`

**Still needed (fill in later — does NOT block starting):**
- Real room counts / sizes / **prices** (placeholders ship as "price on request")
- Exact travel distances for the Location section (Tirana, Kukës, lake, trailhead)
- **Photography** (photoshoot scheduled) — replace labelled placeholders
- A transparent / gold-only logo variant for light backgrounds
- Confirmed annual close date (treat as "end of August")
- Domain purchase

---

## File map
```
design_handoff_stani_website/
├── START_HERE.md            ← you are here
├── README.md                ← full design + technical spec (read this)
├── content/
│   ├── about.md             ← real bilingual About + Why-choose-us
│   ├── experiences.md       ← 8 experiences (confirmed)
│   ├── contact.md           ← contact details, map embed, form fields
│   └── rooms/
│       ├── _schema.md       ← room data model + rules
│       ├── dhoma-standarde.md  (main lodge ×12, placeholder)
│       ├── suita.md            (main lodge ×8, placeholder)
│       └── bungalloja.md       (cabins ×4, placeholder)
├── assets/
│   ├── logo-stani.svg       ← vector logo (preferred)
│   └── logo-stani.png
├── Hotel Wireframes.html    ← open in browser; Direction A = the design to build
├── dir-a.jsx                ← Direction A source (reference for content/order)
└── (dir-b/c/d, *-primitives, design-canvas, tweaks-panel = prototype scaffolding, ignore)
```
