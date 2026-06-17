"use client";

import Link from "next/link";
import { ArrowUpRight, Flame, HardHat, PackageSearch, ShieldAlert, ShieldCheck, Truck, Umbrella, Wrench } from "lucide-react";
import { motion } from "motion/react";
import { SERVICES } from "@/lib/site";
import { FadeIn } from "@/components/animations/FadeIn";

const ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  ShieldCheck,
  Flame,
  HardHat,
  Truck,
  PackageSearch,
  ShieldAlert,
  Wrench,
  Umbrella,
};

export function ServicesGrid() {
  return (
    <section className="bg-yard py-20 md:py-28">
      <div className="container-wide">
        <FadeIn className="max-w-3xl mb-12">
          <span className="eyebrow">Coverage lines</span>
          <h2 className="h-section mt-3">
            A complete program for every exposure on the yard.
          </h2>
          <p className="lead mt-4">
            Eight coverage lines, structured as one program — so there are no gaps between property and inventory, no overlap between GL and product liability, and no argument between auto and inland marine when a claim lands.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="card-pallet group block h-full p-6"
                >
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald text-white shadow-emerald mb-5 group-hover:bg-emerald-dark transition-colors">
                    <Icon className="w-6 h-6" strokeWidth={2.2} />
                  </span>
                  <h3 className="font-heading font-extrabold text-ink text-lg leading-tight group-hover:text-emerald transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-heading font-bold text-emerald group-hover:gap-2 transition-all">
                    Explore <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
