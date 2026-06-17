import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

type Props = {
  title?: string;
  body?: string;
  variant?: "emerald" | "amber";
};

export function CTABand({
  title = "Ready to quote your dealer program?",
  body = "Tell us about the yard. We'll come back in about 15 minutes with a real program — eight coverage lines structured as one.",
  variant = "emerald",
}: Props) {
  const bg = variant === "amber" ? "bg-amber" : "bg-emerald";
  return (
    <section className={`${bg} py-14 md:py-16 relative overflow-hidden`}>
      <div className="absolute bottom-0 inset-x-0 h-2 lumber-band opacity-70" aria-hidden />
      <div className="container-wide flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative">
        <div className="max-w-2xl">
          <h2 className="font-heading font-extrabold text-white text-2xl md:text-3xl leading-tight">{title}</h2>
          <p className="mt-2 text-white/85 md:text-lg">{body}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link
            href="/quote"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-emerald-dark font-heading font-bold shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Get a Quote <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 border-2 border-white/30 text-white font-heading font-bold hover:bg-white/20 transition-colors"
          >
            <Phone className="w-4 h-4" /> {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
