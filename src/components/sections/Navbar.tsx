"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, ShieldCheck } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-line shadow-card"
          : "bg-transparent"
      )}
    >
      <nav className="container-wide flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Home">
          <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg bg-emerald text-white shadow-emerald">
            <ShieldCheck className="w-5 h-5" strokeWidth={2.4} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading font-extrabold text-ink text-[0.95rem] tracking-tight group-hover:text-emerald transition-colors">
              Material Dealer
            </span>
            <span className="font-heading font-bold text-emerald text-[0.65rem] uppercase tracking-[0.18em]">
              Insurance
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 rounded-full text-sm font-heading font-semibold text-slateBody hover:text-emerald hover:bg-emerald-light/50 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-heading font-bold text-ink hover:text-emerald transition-colors"
          >
            <Phone className="w-4 h-4 text-emerald" />
            {SITE.phone}
          </a>
          <Link href="/quote" className="btn-primary !py-2.5 !px-5 text-sm">
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-ink hover:bg-canvasAlt transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-line shadow-card">
          <div className="container-wide py-5 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-heading font-semibold text-slateBody hover:bg-emerald-light/40 hover:text-emerald transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <a
                href={SITE.phoneHref}
                className="btn-secondary"
                onClick={() => setOpen(false)}
              >
                <Phone className="w-4 h-4" /> {SITE.phone}
              </a>
              <Link
                href="/quote"
                className="btn-primary"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
