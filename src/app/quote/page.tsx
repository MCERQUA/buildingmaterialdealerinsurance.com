"use client";

import { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { CheckCircle, Shield, ArrowRight, Phone, Flame } from "lucide-react";

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

const DEALER_TYPES = [
  "Lumber yard / lumber dealer",
  "Building supply yard (drywall, roofing, insulation, millwork)",
  "Hardware / fastener distributor",
  "Home improvement supply store",
  "Concrete / masonry / aggregate dealer",
  "Flooring / cabinet / millwork distributor",
  "Sawmill / wood products",
  "Other / not sure",
];

const PRIMARY_COVERAGE = [
  "Full program (all lines)",
  "Property & inventory (fire / stock)",
  "General liability",
  "Workers' compensation",
  "Commercial auto / delivery fleet",
  "Inland marine / cargo",
  "Product liability",
  "Equipment breakdown",
  "Umbrella / excess liability",
  "Other / not sure",
];

const INVENTORY_OPTIONS = [
  "Under $250k",
  "$250k – $1M",
  "$1M – $5M",
  "$5M – $25M",
  "$25M+",
  "Not sure",
];

const WEBHOOK_URL =
  "https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=buildingmaterialdealerinsurance.com";

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    state: "",
    dealerType: "",
    primaryCoverage: "",
    inventoryValue: "",
    message: "",
    "bot-field": "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData["bot-field"]) return;
    setSubmitting(true);
    setError("");
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form_name: "quote",
          source: "buildingmaterialdealerinsurance.com",
          ...formData,
        }),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us at 844-967-5247 or try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-line bg-white text-ink placeholder-muted focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition-all text-sm";
  const labelClass = "block text-sm font-heading font-bold text-ink mb-1.5";

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-yard pt-32 md:pt-36 pb-20 md:pb-24 relative overflow-hidden">
          <div className="absolute top-24 inset-x-0 h-3 lumber-band-soft opacity-60" aria-hidden />
          <div className="container-wide relative z-10">
            <FadeIn className="text-center mb-12 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-light border border-emerald/20 mb-5">
                <Shield className="w-4 h-4 text-emerald" />
                <span className="text-xs font-heading font-bold text-emerald-dark uppercase tracking-wider">Free Quote · 15 Minutes</span>
              </div>
              <h1 className="font-heading font-extrabold text-ink text-4xl md:text-5xl leading-[1.08] tracking-tight">
                Quote your{" "}
                <span className="text-emerald">building material dealer program.</span>
              </h1>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Tell us about the yard. We&apos;ll come back in about 15 minutes with a real program — property, inventory, GL, work comp, fleet, and product liability.
              </p>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Trust sidebar */}
              <FadeIn className="space-y-4">
                {[
                  { title: "Built for dealers", desc: "Lumber yards, building supply yards, hardware distributors — not generic retail. Correct class codes, replacement-cost stock, outdoor-yard coverage." },
                  { title: "15-minute turnaround", desc: "Most quotes delivered within 15 minutes of a complete submission. Same-day bind on accepted coverage." },
                  { title: "No obligation", desc: "Get the quote and compare. No pressure, no commitment. We earn the business on the program, not the pitch." },
                  { title: "All 50 states", desc: "We write building material dealer insurance nationwide — wherever your yard or fleet operates." },
                ].map((item) => (
                  <div key={item.title} className="card p-4 flex gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0 mt-0.5" strokeWidth={2.2} />
                    <div>
                      <p className="font-heading font-bold text-ink text-sm">{item.title}</p>
                      <p className="text-muted text-xs leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}

                <div className="card p-5 text-center bg-emerald-light border-emerald/20">
                  <p className="text-xs font-heading font-bold text-emerald-dark uppercase tracking-wider mb-2">Prefer to call?</p>
                  <a
                    href={SITE.phoneHref}
                    className="flex items-center justify-center gap-2 text-ink font-heading font-extrabold text-lg hover:text-emerald transition-colors"
                  >
                    <Phone className="w-5 h-5 text-emerald" />
                    {SITE.phone}
                  </a>
                  <p className="text-xs text-muted mt-1">{SITE.hours}</p>
                </div>
              </FadeIn>

              {/* Form */}
              <div className="lg:col-span-2">
                {submitted ? (
                  <FadeIn>
                    <div className="card p-10 text-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-light flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-emerald" strokeWidth={2.2} />
                      </div>
                      <h2 className="font-heading font-extrabold text-ink text-2xl mb-3">Quote request received</h2>
                      <p className="text-muted mb-2">
                        Thank you. We&apos;ll review your operation and reach out within one business day with a personalized building material dealer program.
                      </p>
                      <p className="text-sm text-muted">
                        Questions in the meantime? Call{" "}
                        <a href={SITE.phoneHref} className="text-emerald-dark font-semibold">{SITE.phone}</a>
                      </p>
                    </div>
                  </FadeIn>
                ) : (
                  <form
                    name="quote"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="card p-7 md:p-9 space-y-5"
                  >
                    <input type="hidden" name="form-name" value="quote" />
                    <input
                      name="bot-field"
                      type="hidden"
                      value={formData["bot-field"]}
                      onChange={handleChange}
                      className="hidden"
                    />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className={labelClass}>Full Name *</label>
                        <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="businessName" className={labelClass}>Business Name *</label>
                        <input id="businessName" name="businessName" type="text" required value={formData.businessName} onChange={handleChange} placeholder="Smith Building Supply LLC" className={inputClass} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className={labelClass}>Email *</label>
                        <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="jane@smithsupply.com" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClass}>Phone *</label>
                        <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="(480) 555-0100" className={inputClass} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="state" className={labelClass}>Primary State *</label>
                        <select id="state" name="state" required value={formData.state} onChange={handleChange} className={inputClass}>
                          <option value="">Select a state…</option>
                          {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="dealerType" className={labelClass}>Dealer Type *</label>
                        <select id="dealerType" name="dealerType" required value={formData.dealerType} onChange={handleChange} className={inputClass}>
                          <option value="">Select type…</option>
                          {DEALER_TYPES.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="primaryCoverage" className={labelClass}>Coverage Needed *</label>
                        <select id="primaryCoverage" name="primaryCoverage" required value={formData.primaryCoverage} onChange={handleChange} className={inputClass}>
                          <option value="">Select coverage…</option>
                          {PRIMARY_COVERAGE.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="inventoryValue" className={labelClass}>
                          Approx. Inventory Value
                        </label>
                        <select id="inventoryValue" name="inventoryValue" value={formData.inventoryValue} onChange={handleChange} className={inputClass}>
                          <option value="">Select…</option>
                          {INVENTORY_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClass}>
                        Tell us about the operation{" "}
                        <span className="text-muted font-normal">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Number of employees, delivery trucks, building value, product mix, current insurer, loss history, or anything else that helps us quote accurately…"
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-emerald text-white font-heading font-bold rounded-xl shadow-emerald hover:bg-emerald-dark hover:shadow-pallet transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Sending…" : "Request My Free Quote"}
                      {!submitting && <ArrowRight className="w-5 h-5" />}
                    </button>

                    <p className="text-xs text-center text-muted flex items-center justify-center gap-1.5">
                      <Flame className="w-3 h-3 text-amber" />
                      No spam. No commitment. We&apos;ll contact you to build the right program.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
