import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";

const STATES = [
  "Arizona","Texas","Florida","California","Georgia","North Carolina","Tennessee","Colorado","Nevada","New Mexico","Utah","Oregon","Washington","Idaho","Montana",
];

export function CoverageMap() {
  return (
    <section className="bg-yard-alt py-20 md:py-28">
      <div className="container-wide grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
        <FadeIn>
          <span className="eyebrow">Coverage area</span>
          <h2 className="h-section mt-3">Licensed in all 50 states.</h2>
          <p className="lead mt-4">
            Wherever your yard, distribution center, or delivery fleet operates, we can write the program. We&apos;ve placed dealer coverage from the desert Southwest to the Gulf Coast to the Mountain West — and we quote in any state in about 15 minutes.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {STATES.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-line text-xs font-heading font-semibold text-slateBody"
              >
                <MapPin className="w-3 h-3 text-emerald" /> {s}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-light text-emerald-dark text-xs font-heading font-bold">
              + 35 more
            </span>
          </div>

          <div className="mt-8">
            <Link href="/coverage" className="btn-primary">
              See coverage area <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="relative">
            <div className="absolute -inset-2 rounded-[2rem] bg-emerald/10 -rotate-2" aria-hidden />
            <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-pallet bg-white p-8 md:p-10">
              <div className="rack-grid-bg absolute inset-0 opacity-30" aria-hidden />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-heading font-extrabold text-ink text-2xl leading-tight">
                      Write your dealer program nationwide.
                    </p>
                    <p className="mt-2 text-sm text-muted">
                      Multi-location operations welcome. We coordinate coverage across state lines with consistent limits, definitions, and claims handling.
                    </p>
                  </div>
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber text-white shrink-0">
                    <MapPin className="w-6 h-6" strokeWidth={2.2} />
                  </span>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-4">
                  <div className="bg-canvasAlt rounded-xl p-4">
                    <p className="font-heading font-extrabold text-ink text-2xl">50</p>
                    <p className="text-xs text-muted">states licensed</p>
                  </div>
                  <div className="bg-canvasAlt rounded-xl p-4">
                    <p className="font-heading font-extrabold text-ink text-2xl">24/7</p>
                    <p className="text-xs text-muted">claims reporting</p>
                  </div>
                  <div className="bg-canvasAlt rounded-xl p-4">
                    <p className="font-heading font-extrabold text-ink text-2xl">{SITE.phone}</p>
                    <p className="text-xs text-muted">direct line</p>
                  </div>
                  <div className="bg-canvasAlt rounded-xl p-4">
                    <p className="font-heading font-extrabold text-ink text-2xl">2 hr</p>
                    <p className="text-xs text-muted">claims response SLA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
