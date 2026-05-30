---
# content/rooms/_schema.md — ROOM DATA MODEL (developer to implement)
#
# Inventory & pricing are NOT finalized by the client. Build the Rooms & Cabins
# section data-driven from one file per room TYPE. Ship the placeholder examples
# in this folder; the client edits them later.
#
# FIXED constraints (do not change):
#   - Main lodge = 20 rooms total. building: main-lodge
#   - Cabins     = 4 standalone cabins, ONE room each. building: cabin
#   - Per-type `count` values must sum to 20 for main-lodge and 4 for cabin.
#
# Render rules:
#   - size_sqm / price_from_eur === null  ->  show "—" and a
#     "Çmimi sipas kërkesës" / "Price on request" CTA instead of a number.
#
# Fields:
#   slug            string, kebab-case, used in /dhomat/<slug>
#   order           number, sort order in the list
#   building        "main-lodge" | "cabin"
#   count           number of physical rooms of this type
#   name_sq/name_en string
#   size_sqm        number | null
#   max_guests      number
#   view_sq/view_en string
#   price_from_eur  number | null
#   amenities       string[]  (icon keys: wifi, breakfast, ensuite, kitchenette, woodstove, terrace, ...)
#   hero            image path
#   gallery         image path[]
#   body            bilingual short description (markdown body below frontmatter)
---

This file documents the schema. See the sibling example files:
- `dhoma-standarde.md`  (main lodge, count 12)
- `suita.md`            (main lodge, count 8)   → 12 + 8 = 20 ✓
- `bungalloja.md`       (cabins, count 4)        → 4 ✓

The default 12 + 8 split is a placeholder; adjust counts/types as long as the
main-lodge total stays 20 and cabins stay 4.
