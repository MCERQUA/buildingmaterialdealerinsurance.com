import { ShieldCheck, MapPin, Clock, Zap, Star } from "lucide-react";
import { SITE } from "@/lib/site";

const ITEMS = [
  { icon: ShieldCheck, label: "20+ years", sub: "insuring contractors & dealers" },
  { icon: MapPin, label: "All 50 states", sub: "licensed and writing" },
  { icon: Zap, label: "15-minute quotes", sub: SITE.quoteSla },
  { icon: Clock, label: "2-hour claims", sub: SITE.claimsSla },
  { icon: Star, label: "A-rated markets", sub: "specialty admitted + E&S" },
];

export function TrustBar() {
  return (
    <section className="bg-white border-y border-line">
      <div className="container-wide py-6">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-5">
          {ITEMS.map((it) => (
            <li key={it.label} className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-light text-emerald-dark shrink-0">
                <it.icon className="w-5 h-5" strokeWidth={2.2} />
              </span>
              <div className="leading-tight">
                <p className="font-heading font-extrabold text-ink text-sm">{it.label}</p>
                <p className="text-xs text-muted">{it.sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
