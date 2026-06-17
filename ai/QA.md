# QA — buildingmaterialdealerinsurance.com

**Date:** 2026-06-17
**Build command:** `npm run build` (Next.js 15.5.19)
**Result:** ✅ GREEN — compiled successfully, 27/27 static pages generated, exit 0.

## Build output (final lines)
```
✓ Compiled successfully in 38.7s
✓ Linting and checking validity of types ...
✓ Collecting page data ...
✓ Generating static pages (27/27)
✓ Finalizing page optimization ...
✓ Collecting build traces ...

Route (app)                                    Size      First Load JS
○ /                                            6.88 kB   167 kB
○ /about                                       417 B     160 kB
○ /blog                                        417 B     160 kB
● /blog/[slug]  (5 posts prerendered)
○ /contact                                     2.47 kB   164 kB
○ /coverage                                    417 B     160 kB
○ /privacy                                     178 B     120 kB
○ /quote                                       3.96 kB   166 kB
○ /robots.txt
○ /services                                    417 B     160 kB
● /services/[slug]  (8 services prerendered)
○ /sitemap.xml
○ /terms                                       178 B     120 kB
```

## What was verified
- [x] `npm run build` exits 0, no TypeScript errors, no lint errors
- [x] All 27 routes prerender (static export — fast, Netlify-friendly)
- [x] Homepage compiles with all 10 sections
- [x] All 8 service pages generate via `generateStaticParams`
- [x] All 5 blog posts generate via `generateStaticParams`
- [x] sitemap.xml and robots.txt metadata routes present
- [x] Quote form: 12 fields, Netlify attributes (`data-netlify`, `form-name`, honeypot), fetch-to-webhook
- [x] Contact form: split into server `page.tsx` (metadata) + `ContactPageClient.tsx` (form), Netlify-ready, fetch-to-webhook
- [x] Webhook URL identical in both forms: `…/webhook/netlify?tenant=josh&site=buildingmaterialdealerinsurance.com`
- [x] `netlify.toml`: NODE_VERSION=18, NEXT_DISABLE_TURBOPACK=1, `@netlify/plugin-nextjs`, `[[notifications]]` for both `quote` and `contact`
- [x] `public/__forms.html` present (Netlify form detection)
- [x] `public/llms.txt` present
- [x] 12 generated images in `public/images/` (all valid JPEG, 1024×1024)
- [x] JSON-LD: InsuranceAgency (layout), InsuranceService + BreadcrumbList + FAQPage (service pages), BlogPosting + BreadcrumbList (blog), FAQPage (homepage)
- [x] OG + Twitter cards configured globally + per-page
- [x] Canonical URLs on every page
- [x] Responsive: mobile nav, grid breakpoints at sm/md/lg, mobile menu
- [x] Animations: motion fade-ups, hover lifts, slow-zoom hero, animated counters, FAQ accordion, lenis smooth scroll

## Notes / decisions
- **Image generation:** Gemini (`gemini-2.5-flash-image`) returned 429 quota-exceeded on every call (free tier exhausted). Fell back to Hugging Face `black-forest-labs/FLUX.1-schnell` per the gemini-image skill's backup guidance. All 12 images generated cleanly on first attempt.
- **Blog MDX rendering:** Followed the tucsonfoam.com gold-standard pattern — `gray-matter` front-matter parsing + a dependency-free `markdownToHtml` renderer with `dangerouslySetInnerHTML`. This is the pattern that actually builds reliably in this stack (vs. fragile `@next/mdx` compile pipeline). `@next/mdx` remains in `package.json` per the stack spec but posts render via the markdown renderer.
- **Contact page:** A linter auto-split the inline client component into a server `page.tsx` (metadata) + `ContactPageClient.tsx` (form). This is actually the cleaner Next.js pattern and was preserved.
- **netlify.toml:** A linter twice stripped the file to a minimal version (removing NODE_VERSION=18, NEXT_DISABLE_TURBOPACK, the llms.txt/sitemap headers, and the webhook `[[notifications]]` blocks). Restored the full spec-compliant version each time — the webhook notifications are required for the forms to deliver leads.

## Build reproducibility
```bash
cd /workspace/Websites/buildingmaterialdealerinsurance.com
npm install
npm run build   # exits 0
```
