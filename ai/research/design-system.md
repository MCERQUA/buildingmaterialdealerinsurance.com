# Design System — Building Material Dealer Insurance

**Vibe:** Light, corporate, warehouse-confident. Evokes a clean building-supply yard / lumber rack / pallet stack — NOT a "startup", NOT dark, NOT playful. Trustworthy, substantial, industrial-clean. Think "well-run regional lumber yard that happens to be insurable."

## Palette (LOCKED — these hexes only)
| Role | Hex | Use |
|------|-----|-----|
| Page bg (warm light gray) | `#f6f5f3` | Default body background |
| White | `#ffffff` | Cards, sections, form fields |
| Sand alt section | `#eef0ed` | Alternating section bands (cool warm-gray) |
| Emerald (primary) | `#047857` | Headings accents, primary buttons, icons, links |
| Emerald dark | `#065f46` | Hover states, deep text accents |
| Emerald light | `#d1fae5` | Pills, soft backgrounds, tint |
| Amber (secondary accent) | `#d97706` | Highlight dots, stat numbers, secondary CTAs, "fire/risk" cues |
| Amber dark | `#b45309` | Amber hover |
| Slate (heading text) | `#1f2937` | All headings, h1–h4 |
| Muted slate | `#6b7280` | Body/subdued text |
| Border warm | `#e5e1d8` | Card + section borders (warm neutral) |
| Lumber tan (motif) | `#c8a96a` | Decorative stripes, pallet accents only |

**Forbidden:** charcoal/black hero, blue, purple, pink, gradients into those. High contrast only.

## Typography (via next/font, self-hosted)
- **Display / Headings:** `Plus Jakarta Sans` (weights 700/800) — strong, modern, slightly geometric. Confident without being trendy.
- **Body:** `Inter` (400/500/600) — neutral, highly legible at small sizes (form fields, blog).
- Pairing rationale: Jakarta gives the headings weight and character; Inter keeps dense dealer/coverage copy legible. Distinct from tucsonfoam (which used a single serif-ish pairing).

## Visual Motif — "Lumber Rack / Pallet Stack / Warehouse Grid"
The design language is built from the geometry of a building-supply yard:
1. **Stacked-pallet card stacks** — service cards use a layered/offset shadow stack suggesting stacked pallets/lumber units (3 offset layers behind the card, emerald→amber→tan, revealed on hover).
2. **Horizontal lumber stripes** — section dividers and hero accent use clean horizontal bands (emerald/amber/tan) like stacked lumber rows or pallet slats.
3. **Warehouse rack grid** — background texture in trust/stats sections uses a subtle warehouse-rack grid (thin emerald lines, very low opacity).
4. **Tag/label chips** — service tags styled like lumber-yard inventory tags (small rounded rectangle with a corner notch).
5. **No dark hero** — hero is light `#f6f5f3` with a real photoreal lumber-yard image and a thin emerald/amber band underneath.

## Image Style
- Photorealistic, corporate, daylight, clean. Subjects: lumber stacks in a yard, forklift moving pallets, delivery box/flatbed truck at a dealer dock, warehouse racks of building materials, dealer counter/office, drywall/roofing/millwork supply stacks. People in PPE where relevant. Emerald/amber-leaning grade (warm, professional). No stock-cheesy, no dark/dramatic, no purple tints.
- Generated via Gemini (`gemini-2.5-flash-image`) at 1024+ width, saved as .jpg.

## Components
- **Buttons:** primary emerald (filled, rounded-full), secondary white w/ emerald border, amber for fire/risk CTAs.
- **Cards:** white, rounded-2xl, warm border, soft shadow; hover lifts + reveals pallet-stack layers.
- **Pills/eyebrows:** emerald-tint or amber-tint, uppercase, tracking-wide.
- **Section dividers:** horizontal lumber-stripe band (emerald/amber/tan thin lines).
- **FAQ accordion:** emerald chevrons, smooth expand.
- **Forms:** white fields, warm border, emerald focus ring.

## Motion
- `lenis` smooth scroll site-wide.
- `motion` fade-up reveals on sections (staggered), hover lifts on cards, slow-zoom on hero image, animated counter on stats, FAQ accordion, sticky emerald nav that condenses on scroll.

## Distinctiveness check (vs other CCA sites)
- tucsonfoam = warm terracotta + sage + adobe arches (Sonoran).
- concretelifting = blue (different batch).
- THIS site = **emerald + amber + warm-gray, lumber-rack/pallet-stack geometry, Plus Jakarta + Inter.** Visually distinct palette + motif + type.
