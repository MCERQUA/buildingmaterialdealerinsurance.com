"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";

const WEBHOOK_URL =
  "https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=buildingmaterialdealerinsurance.com";

export function HomeQuoteForm() {
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    message: "",
    "bot-field": "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form["bot-field"]) return;
    setSubmitting(true);
    setError("");
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form_name: "quote",
          source: "buildingmaterialdealerinsurance.com",
          ...form,
        }),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call 844-967-5247 or try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-line bg-white text-ink placeholder-muted focus:outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20 transition-all text-sm";
  const labelClass = "block text-sm font-heading font-bold text-ink mb-1.5";

  return (
    <section id="quote" className="bg-yard py-20 md:py-24 border-t border-line">
      <div className="container-wide">
        <FadeIn className="text-center mb-10 max-w-2xl mx-auto">
          <span className="pill-amber mb-4">Free quote · 15 minutes</span>
          <h2 className="font-heading font-extrabold text-ink text-3xl md:text-4xl leading-[1.1] tracking-tight">
            Get your building material dealer quote.
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Name, business, and a way to reach you — that&apos;s enough to start. We&apos;ll come back with a real program covering property, inventory, GL, work comp, fleet, and product liability.
          </p>
        </FadeIn>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <FadeIn>
              <div className="card p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-light flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald" strokeWidth={2.2} />
                </div>
                <h3 className="font-heading font-extrabold text-ink text-2xl mb-3">Quote request received</h3>
                <p className="text-muted mb-2">
                  Thank you. We&apos;ll reach out within one business day with a personalized program.
                </p>
                <p className="text-sm text-muted">
                  Questions in the meantime? Call{" "}
                  <a href={SITE.phoneHref} className="text-emerald-dark font-semibold">{SITE.phone}</a>
                </p>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
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
                  value={form["bot-field"]}
                  onChange={handleChange}
                  className="hidden"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hq-name" className={labelClass}>Full Name *</label>
                    <input id="hq-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="hq-business" className={labelClass}>Business Name *</label>
                    <input id="hq-business" name="businessName" type="text" required value={form.businessName} onChange={handleChange} placeholder="Smith Building Supply LLC" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hq-email" className={labelClass}>Email *</label>
                    <input id="hq-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@smithsupply.com" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="hq-phone" className={labelClass}>Phone *</label>
                    <input id="hq-phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="(480) 555-0100" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="hq-message" className={labelClass}>
                    Tell us about the operation{" "}
                    <span className="text-muted font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="hq-message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Yard type, employee count, delivery trucks, current insurer — anything that helps us quote accurately…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-emerald text-white font-heading font-bold rounded-xl shadow-emerald hover:bg-emerald-dark hover:shadow-pallet transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending…" : "Request My Free Quote"}
                    {!submitting && <ArrowRight className="w-5 h-5" />}
                  </button>
                  <a href={SITE.phoneHref} className="flex items-center gap-2 text-ink font-heading font-bold hover:text-emerald transition-colors">
                    <Phone className="w-4 h-4 text-emerald" /> {SITE.phone}
                  </a>
                </div>
              </form>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
