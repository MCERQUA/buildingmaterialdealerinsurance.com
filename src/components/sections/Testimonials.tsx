import { Quote } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { TESTIMONIALS } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="bg-yard py-20 md:py-28">
      <div className="container-wide">
        <FadeIn className="max-w-3xl mb-12">
          <span className="eyebrow">From dealers we insure</span>
          <h2 className="h-section mt-3">Yards and distributors who switched.</h2>
          <p className="lead mt-4">
            The common theme: their old carrier treated a lumber yard like a generic retail store. We don&apos;t.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <figure className="card p-7 h-full flex flex-col">
                <Quote className="w-8 h-8 text-amber mb-4" strokeWidth={2.2} />
                <blockquote className="text-slateBody leading-relaxed flex-grow text-[0.97rem]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-line">
                  <p className="font-heading font-bold text-ink text-sm">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                  <p className="text-xs text-emerald font-semibold mt-0.5">{t.location}</p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
