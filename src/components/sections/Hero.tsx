"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Phone, Flame, Truck, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";

const BADGES = [
  { icon: Flame, label: "Fire & inventory" },
  { icon: Truck, label: "Delivery fleet" },
  { icon: ShieldCheck, label: "Product liability" },
];

export function Hero() {
  return (
    <section className="relative bg-yard overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24">
      {/* decorative lumber stripe top */}
      <div className="absolute top-20 inset-x-0 h-3 lumber-band-soft opacity-60" aria-hidden />

      <div className="container-wide relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
        {/* Copy column */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="pill-emerald mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
            Insurance for lumber yards & building supply dealers
          </span>

          <h1 className="font-heading font-extrabold text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Insurance built for the way a{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-emerald">building material yard</span>
              <span className="absolute left-0 bottom-1 h-3 w-full bg-amber/30 -z-0 rounded" aria-hidden />
            </span>{" "}
            actually runs.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-xl">
            Fire on the stack yard. Forklifts in the lane. A delivery fleet on the road every day. Product you sell but didn&apos;t make. We package property, inventory, GL, workers&apos; comp, fleet, and product liability into one program — written by a former contractor who knows the yard.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/quote" className="btn-primary">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={SITE.phoneHref} className="btn-secondary">
              <Phone className="w-4 h-4 text-emerald" /> {SITE.phone}
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            {BADGES.map((b) => (
              <span key={b.label} className="inline-flex items-center gap-2 text-slateBody font-semibold">
                <b.icon className="w-4 h-4 text-amber" strokeWidth={2.4} />
                {b.label}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted">
            Licensed all 50 states · 20+ years · {SITE.quoteSla} · {SITE.claimsSla}
          </p>
        </motion.div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* offset pallet layers behind */}
          <div className="absolute -inset-3 rounded-[2rem] bg-emerald/10 -rotate-2" aria-hidden />
          <div className="absolute -inset-1.5 rounded-[2rem] bg-amber/10 rotate-1" aria-hidden />
          <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-pallet">
            <img
              src="/images/hero.jpg"
              alt="A clean, well-organized building material dealer lumber yard with stacked lumber, racks, forklift, and delivery truck"
              className="w-full h-[420px] md:h-[520px] object-cover animate-slow-zoom"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" aria-hidden />
          </div>

          {/* Floating stat chip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-5 -left-3 md:-left-6 bg-white rounded-2xl shadow-pallet border border-line p-4 max-w-[15rem]"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-amber-light text-amber-dark">
                <Flame className="w-5 h-5" strokeWidth={2.4} />
              </span>
              <div>
                <p className="font-heading font-extrabold text-ink text-base leading-tight">Fire exposure</p>
                <p className="text-xs text-muted leading-tight mt-0.5">covered on the stack yard — not excluded</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
