import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white">
      {/* Top accent: lumber band */}
      <div className="h-2 lumber-band" aria-hidden />

      {/* Lead-capture strip */}
      <div className="border-b border-white/10">
        <div className="container-wide py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white">
              Quote your dealer program in about 15 minutes.
            </h3>
            <p className="text-white/70 mt-2 max-w-xl">
              Property, inventory, GL, workers&apos; comp, fleet, product liability — one program, built for the way a building material yard actually runs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/quote" className="btn-amber">Get a Quote</Link>
            <a href={SITE.phoneHref} className="btn-secondary !bg-white/10 !border-white/20 !text-white hover:!bg-white/20">
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-wide py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-emerald text-white">
              <ShieldCheck className="w-5 h-5" strokeWidth={2.4} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading font-extrabold text-white text-[0.95rem]">Material Dealer</span>
              <span className="font-heading font-bold text-emerald-300 text-[0.65rem] uppercase tracking-[0.18em]">Insurance</span>
            </span>
          </Link>
          <p className="mt-4 text-white/65 text-sm leading-relaxed">
            Specialized commercial insurance for building material dealers, lumber yards, and building supply distributors. By Contractors Choice Agency.
          </p>
          <p className="mt-4 text-white/50 text-xs">
            Licensed in all 50 states · NPN {SITE.npn} · Est. {SITE.founded}
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Coverage</h4>
          <ul className="space-y-2.5">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-white/70 hover:text-amber text-sm transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-emerald-300 hover:text-amber text-sm font-semibold transition-colors">
                All coverage →
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Company</h4>
          <ul className="space-y-2.5">
            {NAV_LINKS.filter((l) => l.href !== "/").map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/70 hover:text-amber text-sm transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
            <li><Link href="/privacy" className="text-white/70 hover:text-amber text-sm transition-colors">Privacy</Link></li>
            <li><Link href="/terms" className="text-white/70 hover:text-amber text-sm transition-colors">Terms</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a href={SITE.phoneHref} className="flex items-start gap-2.5 hover:text-amber transition-colors">
                <Phone className="w-4 h-4 mt-0.5 text-emerald-300 shrink-0" />
                <span>{SITE.phone}<br /><span className="text-white/45 text-xs">Alt: {SITE.phoneAlt}</span></span>
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-start gap-2.5 hover:text-amber transition-colors break-all">
                <Mail className="w-4 h-4 mt-0.5 text-emerald-300 shrink-0" />
                <span>{SITE.email}</span>
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 text-emerald-300 shrink-0" />
              <span>{SITE.address.street}<br />{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 mt-0.5 text-emerald-300 shrink-0" />
              <span>{SITE.hours}<br /><span className="text-white/45 text-xs">{SITE.claimsSla} · 24/7 claims reporting</span></span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {year} {SITE.legalName}. All rights reserved.</p>
          <p className="text-white/40">Insurance licensed in all 50 states. Coverage subject to policy terms.</p>
        </div>
      </div>
    </footer>
  );
}
