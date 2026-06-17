import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { MapPin, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Coverage Area — Licensed in All 50 States",
  description:
    "Building material dealer insurance written nationwide. Contractors Choice Agency is licensed in all 50 states — quote your lumber yard, building supply, or hardware distributor program anywhere in the US.",
  alternates: { canonical: `${SITE.url}/coverage` },
};

const STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia",
  "Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
  "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming",
];

const REGIONS = [
  { name: "Desert Southwest", states: "Arizona · Nevada · New Mexico · Utah", note: "Our home market — heat, monsoon, and dry-fire exposure we know cold." },
  { name: "Texas & Gulf Coast", states: "Texas · Louisiana · Mississippi · Alabama", note: "Wind, humidity, and large-format lumber operations." },
  { name: "Southeast", states: "Florida · Georgia · Carolinas · Tennessee", note: "Hurricane-exposed property and large contractor-supply markets." },
  { name: "Mountain West & Pacific", states: "Colorado · Idaho · Montana · Oregon · Washington · California", note: "Wildfire-exposed yards and large regional dealers." },
  { name: "Midwest & Plains", states: "Ohio · Indiana · Illinois · Iowa · Kansas · Nebraska · the Dakotas", note: "Seasonal inventory swings and aggregate-yard operations." },
  { name: "Northeast & Mid-Atlantic", states: "New York · Pennsylvania · New Jersey · Massachusetts · Maine", note: "Older-stock buildings, tight lots, and dense delivery routes." },
];

export default function CoveragePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-yard pt-32 md:pt-40 pb-14 md:pb-20 relative overflow-hidden">
          <div className="absolute top-24 inset-x-0 h-3 lumber-band-soft opacity-60" aria-hidden />
          <div className="container-wide">
            <FadeIn className="max-w-3xl">
              <span className="eyebrow">Coverage area</span>
              <h1 className="font-heading font-extrabold text-ink text-4xl md:text-5xl lg:text-6xl leading-[1.06] tracking-tight mt-3">
                Licensed in <span className="text-emerald">all 50 states.</span>
              </h1>
              <p className="lead mt-5">
                Wherever your yard, distribution center, or delivery fleet operates, we can write the program. We&apos;ve placed building material dealer coverage from the desert Southwest to the Gulf Coast to the Mountain West — and we quote in any state in about 15 minutes.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link href="/quote" className="btn-primary">Get a Quote <ArrowRight className="w-4 h-4" /></Link>
                <a href={SITE.phoneHref} className="btn-secondary"><Phone className="w-4 h-4 text-emerald" /> {SITE.phone}</a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* State grid */}
        <section className="bg-yard pb-16 md:pb-20">
          <div className="container-wide">
            <FadeIn>
              <div className="card p-7 md:p-9">
                <h2 className="font-heading font-extrabold text-ink text-xl md:text-2xl mb-5">All 50 states, written.</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
                  {STATES.map((s) => (
                    <span key={s} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-canvasAlt text-xs font-heading font-semibold text-slateBody">
                      <MapPin className="w-3 h-3 text-emerald shrink-0" /> {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Regional focus */}
        <section className="bg-yard-alt py-20 md:py-24 border-t border-line">
          <div className="container-wide">
            <FadeIn className="max-w-3xl mb-10">
              <span className="eyebrow">Regional focus</span>
              <h2 className="h-section mt-3">Regional exposures we know cold.</h2>
              <p className="lead mt-4">
                A lumber yard in Arizona does not face the same risks as one in Florida or the Mountain West. We tailor each program to the regional exposure.
              </p>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {REGIONS.map((r, i) => (
                <FadeIn key={r.name} delay={(i % 3) * 0.08}>
                  <div className="card-hover p-6 h-full">
                    <h3 className="font-heading font-extrabold text-ink text-lg leading-tight">{r.name}</h3>
                    <p className="mt-1.5 text-xs font-heading font-bold text-emerald uppercase tracking-wider">{r.states}</p>
                    <p className="mt-3 text-sm text-muted leading-relaxed">{r.note}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
