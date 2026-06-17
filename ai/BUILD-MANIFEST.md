# BUILD-MANIFEST — buildingmaterialdealerinsurance.com

**Domain:** buildingmaterialdealerinsurance.com
**Folder:** `/workspace/Websites/buildingmaterialdealerinsurance.com/`
**Completed:** 2026-06-17
**Status:** ✅ PRODUCTION READY — build green, pushed to GitHub

## Pages built (17 routes)
| Route | Type | Notes |
|-------|------|-------|
| `/` | Static | Homepage — 10 conversion sections |
| `/services` | Static | Coverage-line index |
| `/services/[slug]` | SSG (8) | 8 service pages |
| `/blog` | Static | Blog index (featured + grid) |
| `/blog/[slug]` | SSG (5) | 5 blog posts |
| `/coverage` | Static | All-50-states coverage page |
| `/about` | Static | Agency story + differentiators |
| `/quote` | Static (client) | Netlify-ready quote form |
| `/contact` | Static (server+client split) | Netlify-ready contact form |
| `/privacy` | Static | Privacy policy |
| `/terms` | Static | Terms of use |
| `/robots.txt` | Metadata route | — |
| `/sitemap.xml` | Metadata route | all static + service + blog URLs |
| `/_not-found` | Static | Custom 404 |

## Homepage sections (10)
1. Hero (value prop + Get a Quote + floating fire-exposure chip)
2. TrustBar (20+ yrs · all 50 states · 15-min quotes · 2-hr claims · A-rated markets)
3. ServicesGrid (8 coverage lines, pallet-stack cards)
4. WhyChooseUs (former-contractor story + 4 reasons + image)
5. Process (4-step quote→claim flow)
6. Stats (animated counters: 20+, 50, 15 min, 2 hr)
7. CoverageMap (all 50 states + regional exposures)
8. Testimonials (3 dealer quotes)
9. FAQ (8 dealer questions, accordion, FAQPage schema)
10. FinalCTA (image-backed CTA band) + Footer (lead-capture strip + full nav)

## Service pages (8) — each: hero + intro + what's-covered grid + who-it-for + why-CCA + inline CTA + FAQ + siblings
| # | Title | Word count |
|---|-------|-----------|
| 1 | General Liability Insurance | ~1,400+ |
| 2 | Property & Inventory Insurance | ~1,500+ |
| 3 | Workers' Compensation | ~1,300+ |
| 4 | Commercial Auto & Delivery | ~1,300+ |
| 5 | Inland Marine & Cargo | ~1,300+ |
| 6 | Product Liability Insurance | ~1,400+ |
| 7 | Equipment Breakdown | ~1,200+ |
| 8 | Umbrella & Excess Liability | ~1,100+ |

(All exceed the 800-word floor; rich, niche-accurate, real insurance copy.)

## Blog posts (5) — 1,100–1,400 words each
1. Why Fire Is the #1 Exposure for Lumber Yards — And How to Insure It
2. The Hidden Product Liability Gap for Building Material Dealers
3. What Insurance Does a Lumber Yard Need? Complete Coverage Checklist
4. Inland Marine for Building Material Dealers: Covering Goods in Transit
5. Equipment Breakdown vs Property Insurance: Why Your Kiln Isn't Covered

## Images (12) — generated, no placeholders, no emoji
All in `public/images/`, all valid JPEG @ 1024×1024, generated via Hugging Face FLUX.1-schnell (Gemini free-tier was quota-exhausted; HF used as the documented backup):
- hero.jpg, og-image.jpg
- service-general-liability.jpg, service-property-inventory.jpg, service-workers-comp.jpg, service-commercial-auto.jpg, service-inland-marine.jpg, service-product-liability.jpg, service-equipment-breakdown.jpg, service-umbrella.jpg
- why-choose-warehouse.jpg, cta-dealer-counter.jpg

## Forms (2) — Netlify-ready, both deliver to webhook
- **Quote form** (`/quote`): 12 fields — name, businessName, email, phone, state, dealerType, primaryCoverage, inventoryValue, message + form-name + honeypot. `data-netlify="true"`, fetch-to-webhook on submit.
- **Contact form** (`/contact`): name, email, phone, subject, message + form-name + honeypot. Split into server `page.tsx` (metadata) + `ContactPageClient.tsx` (form).
- **Webhook (both):** `https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=buildingmaterialdealerinsurance.com`
- **netlify.toml:** `[[notifications]]` webhook block for BOTH `quote` and `contact` form_names, NODE_VERSION=18, NEXT_DISABLE_TURBOPACK=1, `@netlify/plugin-nextjs`.
- **`public/__forms.html`** present for Netlify form detection.

## SEO / structured data
| Item | Present |
|------|---------|
| Per-page title + meta description | ✅ |
| Canonical URLs (every page) | ✅ |
| OpenGraph + Twitter cards (global + per-page) | ✅ |
| JSON-LD InsuranceAgency (layout) | ✅ |
| JSON-LD InsuranceService (8 service pages) | ✅ |
| JSON-LD FAQPage (homepage + 8 service pages) | ✅ |
| JSON-LD BreadcrumbList (service + blog pages) | ✅ |
| JSON-LD BlogPosting (blog pages) | ✅ |
| `sitemap.xml` (metadata route) | ✅ |
| `robots.txt` (metadata route) | ✅ |
| `public/llms.txt` | ✅ |
| Semantic HTML + heading hierarchy | ✅ |

## Build result
```
✓ Compiled successfully in 38.7s
✓ Generating static pages (27/27)
```
`npm run build` exits 0. No TypeScript errors, no lint errors.

## Git push result
- **Commit SHA:** `e60ff2fe46df16877e2f3d3accf388ad1e6ec050`
- **Remote:** `git@github-buildingmaterialdealerinsurance.com-push:MCERQUA/buildingmaterialdealerinsurance.com.git`
- **Branch:** `main`
- **Verified:** `git ls-remote origin main` returns the same SHA as local HEAD. ✅
- **History note:** earlier auto-save commits had accidentally tracked `node_modules/` + `.next/cache/` (incl. >100MB SWC binaries). Rebased to a single clean orphan commit before push; remote history is now a single clean commit with 74 source files, largest blob 243KB.

## Design — light, corporate, UNIQUE
- **Palette:** warm light gray `#f6f5f3` bg, white sections, emerald `#047857` primary, amber `#d97706` secondary, slate `#1f2937` text. NO dark hero, NO charcoal, NO blue/purple/pink.
- **Type:** Plus Jakarta Sans (headings, 800) + Inter (body) via next/font. Distinct from tucsonfoam.
- **Motif:** lumber-rack / pallet-stack geometry — horizontal lumber-stripe band dividers, stacked-pallet card layers (offset emerald→amber→lumber slabs revealed on hover), warehouse rack-grid background texture, lumber-yard inventory-tag clip-path shapes.
- **Distinctiveness:** verified distinct from every other CCA site (tucsonfoam = terracotta/sage/adobe-arches; this = emerald/amber/lumber-rack).

## Quality gate — all boxes checked
- [x] Homepage ≥ 6 sections, visually complete (10 sections)
- [x] ≥ 5 service pages with real content (8 pages, 1,100–1,500+ words each)
- [x] Blog live with ≥ 3 posts (5 posts)
- [x] ≥ 2 Netlify-ready forms (quote + contact) with webhook in `netlify.toml`
- [x] ≥ 8 generated images, no placeholders / no emoji (12 images)
- [x] Schema + sitemap + robots + llms.txt present
- [x] `npm run build` green (27 static pages)
- [x] Light, corporate, UNIQUE design (emerald + amber + warm-gray, lumber-rack motif)
- [x] Responsive + interactive (motion fade-ups, hover lifts, animated counters, FAQ accordion, lenis smooth scroll, sticky nav)
- [x] Pushed to GitHub (commit `e60ff2fe`, verified on remote)
