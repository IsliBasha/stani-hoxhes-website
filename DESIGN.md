# DESIGN.md — Stani i Hoxhës

## Color Strategy
Committed — forest green and gold carry the brand identity at 40–60% surface coverage in key sections.

## Palette (OKLCH)
| Token | OKLCH | Hex | Use |
|---|---|---|---|
| `--green-deep` | oklch(17.2% 0.041 145) | #1a2b1f | Footer, deepest sections |
| `--green` | oklch(21.5% 0.049 145) | #233429 | Why-choose-us band, nav on scroll |
| `--green-moss` | oklch(27.4% 0.048 145) | #334436 | Hovers on green surfaces |
| `--gold-deep` | oklch(52.3% 0.096 72) | #9a7438 | Hero/display headings on light |
| `--gold` | oklch(62.1% 0.088 72) | #b88a4f | Accent, rules, buttons, links |
| `--gold-light` | oklch(68.0% 0.088 72) | #c8a063 | Wordmark on green |
| `--paper` | oklch(98.5% 0.004 85) | near-white warm | Page background |
| `--paper-2` | oklch(96.0% 0.005 85) | #f4f4f2 | Alternating section bg |
| `--ink` | oklch(15.2% 0.006 260) | #222222 | Body text on light |
| `--ink-2` | oklch(30.0% 0.006 260) | #444444 | Secondary text |
| `--ink-3` | oklch(45.5% 0.006 260) | #6b6b6b | Captions, eyebrows |
| `--line` | oklch(81.5% 0.003 260) | #cdcdcd | Hairline borders |

## Typography
- **Display:** Cormorant Garamond, weight 300/400/500, covers ë and ç
- **Body:** Source Sans 3, weight 400/600
- **Mono/Labels:** DM Mono, weight 400 — used for all eyebrows, section numbers, nav, distances
- Hero title: clamp(2.5rem, 1rem + 6vw, 5rem), weight 300, color gold-deep
- Section h2: clamp(2rem, 0.5rem + 4vw, 3rem), weight 300
- Eyebrows: 0.625rem, letter-spacing 0.2em, uppercase, mono

## Layout
- Content max-width: 75rem (1200px)
- Section padding-block: clamp(3.75rem, 3rem + 4vw, 7.5rem)
- Section padding-inline: clamp(1.25rem, 2rem + 4vw, 5rem)
- Mobile breakpoint: 640px

## Shape
- Zero radius on all interactive elements and cards
- 2px max on subtle inner elements

## Section Rhythm (top to bottom)
Nav → Hero → About (paper-2) → Why (green) → Rooms (paper) → Gallery (paper-2) → Experiences (paper) → Location (paper-2) → Contact (paper) → Footer (green-deep)
