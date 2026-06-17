import Link from "next/link";
import { HardHat, Layers, ClipboardCheck, Headset, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const REASONS = [
  {
    icon: HardHat,
    title: "Built by a former contractor",
    body: "Josh Cotner ran crews before he ran an agency. We don't need a deck to understand your stack yard, your loading dock, or your delivery run — we've been on them.",
  },
  {
    icon: Layers,
    title: "One coordinated program",
    body: "Property, inventory, GL, work comp, fleet, inland marine, product liability, equipment breakdown, umbrella — packaged together so the coverages don't fight each other at claim time.",
  },
  {
    icon: ClipboardCheck,
    title: "Correct class codes & valuation",
    body: "Dealer-tuned ISO codes (not generic retail), replacement-cost on stock (not actual cash value), and the outdoor-property endorsement that actually covers your yard.",
  },
  {
    icon: Headset,
    title: "15-min quotes, 2-hr claims",
    body: "A real quote in about 15 minutes. A live human on a claim within 2 hours, 24/7. We are the broker that picks up the phone when a yard fire happens at 2am.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-yard-alt py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 rack-grid-bg opacity-40" aria-hidden />
      <div className="container-wide relative">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* Image */}
          <FadeIn>
            <div className="relative">
              <div className="absolute -inset-2 rounded-[2rem] bg-amber/10 rotate-2" aria-hidden />
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-pallet">
                <img
                  src="/images/why-choose-warehouse.jpg"
                  alt="Clean aisle of tall warehouse storage racks filled with building materials"
                  className="w-full h-[360px] md:h-[460px] object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating tag */}
              <div className="absolute -top-4 -right-3 md:-right-5 bg-emerald text-white tag px-4 py-2.5 shadow-emerald">
                <p className="font-heading font-extrabold text-sm leading-tight">20+ yrs</p>
                <p className="text-emerald-100 text-[0.7rem] leading-tight">contractor insurance</p>
              </div>
            </div>
          </FadeIn>

          {/* Copy */}
          <FadeIn delay={0.1}>
            <span className="eyebrow">Why Contractors Choice Agency</span>
            <h2 className="h-section mt-3">
              A broker who has actually run a yard.
            </h2>
            <p className="lead mt-4">
              Most "contractor insurance" sites are written by people who have never set foot on a lumber yard. We have. That changes everything about how your program gets built.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {REASONS.map((r) => (
                <div key={r.title} className="card p-5">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-light text-emerald-dark mb-3">
                    <r.icon className="w-5 h-5" strokeWidth={2.2} />
                  </span>
                  <h3 className="font-heading font-bold text-ink text-base leading-tight">{r.title}</h3>
                  <p className="mt-1.5 text-sm text-muted leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/about" className="btn-primary">
                Meet the agency <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
