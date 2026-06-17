import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="bg-yard py-20 md:py-28">
      <div className="container-wide">
        <FadeIn>
          <div className="relative rounded-[2.5rem] overflow-hidden border border-line shadow-pallet">
            {/* Background image */}
            <img
              src="/images/cta-dealer-counter.jpg"
              alt="Building supply dealer counter interior with material samples"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-emerald-dark/60" aria-hidden />

            <div className="relative px-7 py-14 md:px-14 md:py-20 max-w-2xl">
              <span className="pill-amber mb-5">15-minute quote</span>
              <h2 className="font-heading font-extrabold text-white text-3xl md:text-5xl leading-[1.08] tracking-tight">
                Quote your dealer program today.
              </h2>
              <p className="mt-5 text-white/85 text-lg md:text-xl leading-relaxed">
                Tell us about the yard. We&apos;ll come back in about 15 minutes with a real program — property, inventory, GL, work comp, fleet, and product liability structured as one.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/quote" className="btn-amber">
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="btn-secondary !bg-white/10 !border-white/25 !text-white hover:!bg-white/20"
                >
                  <Phone className="w-4 h-4" /> {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
