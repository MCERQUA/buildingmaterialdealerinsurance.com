import { Phone, ClipboardList, ShieldCheck, Headphones } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

const STEPS = [
  {
    n: "01",
    icon: Phone,
    title: "Tell us about the yard",
    body: "A 15-minute call or form submission. Inventory value, building value, fleet, payroll, product mix, loss history. We pull the basics we need to quote accurately.",
  },
  {
    n: "02",
    icon: ClipboardList,
    title: "We build the program",
    body: "We structure all eight coverage lines as one program — class codes, valuation, outdoor property, fleet, product liability, umbrella — and shop A-rated specialty markets.",
  },
  {
    n: "03",
    icon: ShieldCheck,
    title: "Bind & deploy",
    body: "You see the options, pick what fits, and we bind. Certificates of insurance to your customers, evidence of coverage to your landlord — usually same day.",
  },
  {
    n: "04",
    icon: Headphones,
    title: "Claims & renewal",
    body: "A claim hits at 2am, you call, a live human responds within 2 hours. We ride the claim to resolution and rebuild your program at every renewal as the yard grows.",
  },
];

export function Process() {
  return (
    <section className="bg-yard py-20 md:py-28">
      <div className="container-wide">
        <FadeIn className="max-w-3xl mb-12">
          <span className="eyebrow">How it works</span>
          <h2 className="h-section mt-3">From quote to claim in four moves.</h2>
          <p className="lead mt-4">
            No 30-day back-and-forth. No call-center runaround. A program built by people who answer the phone.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.08}>
              <div className="card p-6 h-full relative overflow-hidden">
                <span className="absolute -top-3 -right-2 font-heading font-extrabold text-6xl text-emerald-light leading-none select-none">
                  {s.n}
                </span>
                <span className="relative inline-flex items-center justify-center w-11 h-11 rounded-xl bg-emerald text-white shadow-emerald mb-4">
                  <s.icon className="w-5 h-5" strokeWidth={2.2} />
                </span>
                <h3 className="relative font-heading font-bold text-ink text-base leading-tight">{s.title}</h3>
                <p className="relative mt-2 text-sm text-muted leading-relaxed">{s.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
