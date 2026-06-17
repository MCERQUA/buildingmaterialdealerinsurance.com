"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn } from "@/components/animations/FadeIn";
import { FAQS, SITE } from "@/lib/site";
import Link from "next/link";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="bg-yard-alt py-20 md:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container-wide grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
        <FadeIn>
          <span className="eyebrow">Questions</span>
          <h2 className="h-section mt-3">The dealer coverage questions we hear most.</h2>
          <p className="lead mt-4">
            Real answers, written by people who write dealer programs every day. Don&apos;t see yours? Call us — {SITE.phone}.
          </p>
          <div className="mt-7">
            <Link href="/quote" className="btn-primary">Get a Quote</Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-3">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`card overflow-hidden ${isOpen ? "shadow-card-hover" : ""}`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-ink text-base md:text-[1.05rem] leading-snug">
                      {f.q}
                    </span>
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-colors ${
                        isOpen ? "bg-emerald text-white" : "bg-emerald-light text-emerald-dark"
                      }`}
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-slateBody leading-relaxed text-[0.97rem]">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
