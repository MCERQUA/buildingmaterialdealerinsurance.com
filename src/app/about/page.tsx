import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { HardHat, ShieldCheck, Phone, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Contractors Choice Agency",
  description:
    "Contractors Choice Agency has insured contractors and building material dealers for 20+ years. Founded by former contractor Josh Cotner. Licensed all 50 states, 15-minute quotes, 2-hour claims response.",
  alternates: { canonical: `${SITE.url}/about` },
};

const DIFFERENTIATORS = [
  "Former-contractor founder — Josh Cotner ran crews before he ran an agency",
  "20+ years insuring contractors, dealers, and the building trades",
  "Licensed in all 50 states — we write wherever your yard or fleet operates",
  "Specialty-market access — A-rated admitted and E&S carriers that actually write lumber yards",
  "15-minute quote turnaround, 2-hour claims response guarantee",
  "Program approach — eight coverage lines structured as one, not eight disconnected policies",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-yard pt-32 md:pt-40 pb-16 md:pb-20 relative overflow-hidden">
          <div className="absolute top-24 inset-x-0 h-3 lumber-band-soft opacity-60" aria-hidden />
          <div className="container-wide grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center">
            <FadeIn>
              <span className="eyebrow">About</span>
              <h1 className="font-heading font-extrabold text-ink text-4xl md:text-5xl lg:text-6xl leading-[1.06] tracking-tight mt-3">
                An agency built by a{" "}
                <span className="text-emerald">former contractor.</span>
              </h1>
              <p className="lead mt-5">
                Contractors Choice Agency was founded by Josh Cotner after years of running job sites. We started as a contractor-focused shop and grew into one of the most specialized building-material-dealer programs in the country — because we know the yard, the dock, the fleet, and the fire exposure firsthand.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link href="/quote" className="btn-primary">Get a Quote <ArrowRight className="w-4 h-4" /></Link>
                <a href={SITE.phoneHref} className="btn-secondary"><Phone className="w-4 h-4 text-emerald" /> {SITE.phone}</a>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="relative">
                <div className="absolute -inset-2 rounded-[2rem] bg-emerald/10 rotate-2" aria-hidden />
                <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-pallet">
                  <img
                    src="/images/why-choose-warehouse.jpg"
                    alt="Warehouse storage racks filled with building materials"
                    className="w-full h-[360px] md:h-[440px] object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Story */}
        <section className="bg-white py-20 md:py-24 border-y border-line">
          <div className="container-tight max-w-3xl">
            <FadeIn>
              <span className="eyebrow">Our story</span>
              <h2 className="h-section mt-3 mb-6">From the job site to the agency.</h2>
              <div className="space-y-5 text-lg text-slateBody leading-relaxed">
                <p>
                  Josh Cotner spent years on job sites before he ever quoted an insurance policy. He saw firsthand how generic carriers misunderstood contractor and dealer operations — how a lumber yard got written like a retail store, how a delivery fleet got written like a personal car, and how the gaps only surfaced after a loss, when it was too late.
                </p>
                <p>
                  He founded Contractors Choice Agency in {SITE.founded} to fix that. The premise was simple: insure the building trades the way someone who has actually worked in them would insure them. Twenty years later, that premise has placed us in {SITE.statesLicensed.toLowerCase()}, with a client base that spans contractors, lumber yards, building supply yards, and hardware distributors across the country.
                </p>
                <p>
                  This site — buildingmaterialdealerinsurance.com — is the building-material-dealer specialization of that work. Lumber stacks, forklifts, delivery trucks, the products you sell but didn&apos;t make, the kiln in the back of the saw shed. We know all of it, and we write coverage that actually fits it.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* What sets us apart */}
        <section className="bg-yard py-20 md:py-24">
          <div className="container-wide grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <FadeIn>
              <span className="eyebrow">What sets us apart</span>
              <h2 className="h-section mt-3">Six things that make the difference.</h2>
              <p className="lead mt-4">
                The dealer insurance market is full of generic brokers. We are not one of them.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-light border border-emerald/20">
                <ShieldCheck className="w-4 h-4 text-emerald" />
                <span className="text-xs font-heading font-bold text-emerald-dark uppercase tracking-wider">NPN {SITE.npn} · Est. {SITE.founded}</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <ul className="grid sm:grid-cols-2 gap-3">
                {DIFFERENTIATORS.map((d) => (
                  <li key={d} className="card p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald shrink-0 mt-0.5" strokeWidth={2.2} />
                    <span className="text-sm text-slateBody font-medium leading-snug">{d}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* Office */}
        <section className="bg-yard-alt py-16 md:py-20 border-t border-line">
          <div className="container-wide grid sm:grid-cols-3 gap-5">
            <div className="card p-6 flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-emerald text-white shrink-0"><MapPin className="w-5 h-5" /></span>
              <div>
                <p className="font-heading font-bold text-ink">Headquarters</p>
                <p className="text-sm text-muted mt-0.5">{SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}</p>
              </div>
            </div>
            <div className="card p-6 flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-amber text-white shrink-0"><HardHat className="w-5 h-5" /></span>
              <div>
                <p className="font-heading font-bold text-ink">Founder</p>
                <p className="text-sm text-muted mt-0.5">Josh Cotner — former contractor, {new Date().getFullYear() - SITE.founded}+ years insuring the trades.</p>
              </div>
            </div>
            <div className="card p-6 flex items-start gap-4">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-emerald text-white shrink-0"><ShieldCheck className="w-5 h-5" /></span>
              <div>
                <p className="font-heading font-bold text-ink">Licensing</p>
                <p className="text-sm text-muted mt-0.5">Licensed in all 50 states · NPN {SITE.npn} · A-rated carrier markets.</p>
              </div>
            </div>
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
