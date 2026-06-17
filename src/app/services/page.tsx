import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { SERVICES, SITE } from "@/lib/site";
import {
  ArrowRight,
  ArrowUpRight,
  Flame,
  HardHat,
  PackageSearch,
  ShieldAlert,
  ShieldCheck,
  Truck,
  Umbrella,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Coverage Lines — Building Material Dealer Insurance",
  description:
    "Eight coverage lines structured as one program for building material dealers: general liability, property & inventory, workers' comp, commercial auto & delivery, inland marine, product liability, equipment breakdown, and umbrella.",
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: {
    title: "Coverage Lines — Building Material Dealer Insurance",
    description:
      "Eight coverage lines structured as one program for lumber yards and building supply dealers.",
    url: `${SITE.url}/services`,
    siteName: SITE.name,
  },
};

const ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  ShieldCheck, Flame, HardHat, Truck, PackageSearch, ShieldAlert, Wrench, Umbrella,
};

export default function ServicesIndex() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-yard pt-32 md:pt-40 pb-14 md:pb-20">
          <div className="container-wide">
            <FadeIn className="max-w-3xl">
              <span className="eyebrow">Coverage lines</span>
              <h1 className="font-heading font-extrabold text-ink text-4xl md:text-5xl lg:text-6xl leading-[1.06] tracking-tight mt-3">
                Eight coverage lines. One program.
              </h1>
              <p className="lead mt-5">
                Every line a building material dealer needs, packaged so they don&apos;t fight each other at claim time. Click any line for the full breakdown of what&apos;s covered, who it&apos;s for, and why.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-yard pb-20 md:pb-28">
          <div className="container-wide grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon] ?? ShieldCheck;
              return (
                <FadeIn key={s.slug} delay={(i % 3) * 0.08}>
                  <Link href={`/services/${s.slug}`} className="card-pallet group block h-full p-6">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald text-white shadow-emerald mb-5 group-hover:bg-emerald-dark transition-colors">
                      <Icon className="w-6 h-6" strokeWidth={2.2} />
                    </span>
                    <h2 className="font-heading font-extrabold text-ink text-lg leading-tight group-hover:text-emerald transition-colors">
                      {s.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{s.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-heading font-bold text-emerald group-hover:gap-2 transition-all">
                      Read more <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
