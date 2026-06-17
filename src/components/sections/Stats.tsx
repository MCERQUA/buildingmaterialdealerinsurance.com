import { FadeIn } from "@/components/animations/FadeIn";
import { Counter } from "@/components/animations/Counter";
import { STATS } from "@/lib/site";

export function Stats() {
  return (
    <section className="bg-emerald text-white py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 dotted-emerald opacity-20" aria-hidden />
      <div className="absolute bottom-0 inset-x-0 h-2 lumber-band opacity-80" aria-hidden />
      <div className="container-wide relative">
        <FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-emerald-100 text-sm md:text-base max-w-[14rem] mx-auto leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
