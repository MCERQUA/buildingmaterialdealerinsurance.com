import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { SERVICES, SERVICE_SLUGS, SITE } from "@/lib/site";
import { SERVICE_CONTENT, getServiceBySlug } from "@/lib/content";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ChevronRight,
  HelpCircle,
} from "lucide-react";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return {};
  const url = `${SITE.url}/services/${slug}`;
  const title = `${svc.title} for Building Material Dealers`;
  return {
    title,
    description: svc.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: SITE.name,
      title,
      description: svc.description,
      images: [{ url: svc.image, width: 1200, height: 630, alt: svc.title }],
    },
    twitter: { card: "summary_large_image", title, description: svc.description, images: [svc.image] },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc || !SERVICE_CONTENT[slug]) notFound();
  const content = SERVICE_CONTENT[slug];

  const url = `${SITE.url}/services/${slug}`;

  const insuranceServiceSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceService",
    name: svc.title,
    description: svc.description,
    url,
    provider: {
      "@type": "InsuranceAgency",
      name: SITE.name,
      url: SITE.url,
      telephone: "+18449675247",
      areaServed: { "@type": "Country", name: "United States" },
    },
    serviceType: svc.title,
    areaServed: { "@type": "Country", name: "United States" },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE.url}/services` },
      { "@type": "ListItem", position: 3, name: svc.title, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // sibling services for cross-linking
  const siblings = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(insuranceServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-yard pt-28 md:pt-36 pb-14 md:pb-20 relative overflow-hidden">
          <div className="absolute top-24 inset-x-0 h-3 lumber-band-soft opacity-60" aria-hidden />
          <div className="container-wide relative grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <FadeIn>
              <nav className="flex items-center gap-1.5 text-xs font-semibold text-muted mb-6" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-emerald">Home</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <Link href="/services" className="hover:text-emerald">Services</Link>
                <ChevronRight className="w-3.5 h-3.5" />
                <span className="text-emerald">{svc.title}</span>
              </nav>
              <span className="pill-emerald mb-5">{SITE.name}</span>
              <h1 className="font-heading font-extrabold text-ink text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.06] tracking-tight">
                {svc.title}{" "}
                <span className="text-emerald">for building material dealers.</span>
              </h1>
              <p className="mt-5 text-lg md:text-xl text-muted leading-relaxed max-w-xl">
                {content.heroSubtitle}
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link href="/quote" className="btn-primary">
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={SITE.phoneHref} className="btn-secondary">
                  <Phone className="w-4 h-4 text-emerald" /> {SITE.phone}
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="relative">
                <div className="absolute -inset-2 rounded-[2rem] bg-amber/10 rotate-2" aria-hidden />
                <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-pallet">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-[340px] md:h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" aria-hidden />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white py-16 md:py-20 border-y border-line">
          <div className="container-tight max-w-3xl">
            <FadeIn>
              <span className="eyebrow">What this coverage does</span>
              {content.intro.map((p, i) => (
                <p key={i} className="mt-4 text-lg text-slateBody leading-relaxed first:mt-5">{p}</p>
              ))}
            </FadeIn>
          </div>
        </section>

        {/* What's covered grid */}
        <section className="bg-yard py-20 md:py-24">
          <div className="container-wide">
            <FadeIn className="max-w-3xl mb-12">
              <span className="eyebrow">What&apos;s covered</span>
              <h2 className="h-section mt-3">The coverages that matter for a dealer.</h2>
              <p className="lead mt-4">Structured into one policy — not a list of disconnected line items.</p>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {content.whatsCovered.map((c, i) => (
                <FadeIn key={c.title} delay={(i % 3) * 0.08}>
                  <div className="card-hover p-6 h-full">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-light text-emerald-dark mb-4">
                      <CheckCircle2 className="w-5 h-5" strokeWidth={2.2} />
                    </span>
                    <h3 className="font-heading font-bold text-ink text-base leading-tight">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{c.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="bg-yard-alt py-20 md:py-24">
          <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn>
              <span className="eyebrow">Who it&apos;s for</span>
              <h2 className="h-section mt-3">Built for dealers, by a former contractor.</h2>
              <p className="lead mt-4">
                If you sell, store, or deliver building materials, this coverage line is part of your program. Common operations we insure:
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <ul className="grid sm:grid-cols-2 gap-3">
                {content.whoItsFor.map((w) => (
                  <li key={w} className="card p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" strokeWidth={2.2} />
                    <span className="text-sm text-slateBody font-medium">{w}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Why CCA */}
        <section className="bg-white py-20 md:py-24 border-y border-line">
          <div className="container-tight max-w-3xl">
            <FadeIn>
              <span className="eyebrow">Why Contractors Choice Agency</span>
              <h2 className="h-section mt-3">The difference is in how it&apos;s built.</h2>
              <ul className="mt-8 space-y-4">
                {content.whyCca.map((w, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald text-white text-xs font-heading font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-slateBody leading-relaxed text-[1.02rem]">{w}</p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Inline quote CTA */}
        <CTABand
          title={`Quote your ${svc.title.toLowerCase()} today.`}
          body="15-minute quote. 2-hour claims response. Licensed all 50 states."
        />

        {/* FAQ */}
        <section className="bg-yard py-20 md:py-24">
          <div className="container-tight max-w-3xl">
            <FadeIn>
              <span className="eyebrow"><HelpCircle className="w-3.5 h-3.5" /> FAQ</span>
              <h2 className="h-section mt-3 mb-10">Common questions about {svc.title.toLowerCase()}.</h2>
              <div className="space-y-4">
                {content.faq.map((f) => (
                  <div key={f.q} className="card p-6">
                    <h3 className="font-heading font-bold text-ink text-lg leading-tight">{f.q}</h3>
                    <p className="mt-3 text-slateBody leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Sibling services */}
        <section className="bg-yard-alt py-16 md:py-20 border-t border-line">
          <div className="container-wide">
            <h2 className="font-heading font-extrabold text-ink text-2xl md:text-3xl mb-8">Related coverage lines</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {siblings.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="card-hover p-5 group block">
                  <h3 className="font-heading font-bold text-ink text-sm leading-tight group-hover:text-emerald transition-colors">{s.title}</h3>
                  <p className="mt-1.5 text-xs text-muted leading-relaxed line-clamp-2">{s.short}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-heading font-bold text-emerald">Explore <ArrowRight className="w-3.5 h-3.5" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
