"use client";

import { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const WEBHOOK_URL =
  "https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=buildingmaterialdealerinsurance.com";

export function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    "bot-field": "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          form_name: "contact",
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
        <section className="bg-yard pt-32 md:pt-36 pb-20 md:pb-24 relative">
          <div className="absolute top-24 inset-x-0 h-3 lumber-band-soft opacity-60" aria-hidden />
          <div className="container-wide relative">
            <FadeIn className="max-w-2xl mb-12">
              <span className="eyebrow">Contact</span>
              <h1 className="font-heading font-extrabold text-ink text-4xl md:text-5xl leading-[1.08] tracking-tight mt-3">
                Talk to a dealer insurance specialist.
              </h1>
              <p className="lead mt-4">
                Questions about coverage, a claim, or ready to quote? Call us directly or send a message — we respond fast.
              </p>
            </FadeIn>

            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
              {/* Contact info */}
              <FadeIn className="space-y-5">
                <a href={SITE.phoneHref} className="card p-6 flex items-start gap-4 group hover:shadow-card-hover transition-shadow">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald text-white shrink-0">
                    <Phone className="w-6 h-6" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="font-heading font-bold text-ink text-sm uppercase tracking-wider">Phone</p>
                    <p className="font-heading font-extrabold text-ink text-lg group-hover:text-emerald transition-colors">{SITE.phone}</p>
                    <p className="text-xs text-muted mt-0.5">Alt: {SITE.phoneAlt}</p>
                  </div>
                </a>

                <a href={`mailto:${SITE.email}`} className="card p-6 flex items-start gap-4 group hover:shadow-card-hover transition-shadow">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber text-white shrink-0">
                    <Mail className="w-6 h-6" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="font-heading font-bold text-ink text-sm uppercase tracking-wider">Email</p>
                    <p className="font-heading font-extrabold text-ink text-base group-hover:text-emerald transition-colors break-all">{SITE.email}</p>
                  </div>
                </a>

                <div className="card p-6 flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald text-white shrink-0">
                    <MapPin className="w-6 h-6" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="font-heading font-bold text-ink text-sm uppercase tracking-wider">Headquarters</p>
                    <p className="text-slateBody">{SITE.address.street}</p>
                    <p className="text-slateBody">{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</p>
                  </div>
                </div>

                <div className="card p-6 flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber text-white shrink-0">
                    <Clock className="w-6 h-6" strokeWidth={2.2} />
                  </span>
                  <div>
                    <p className="font-heading font-bold text-ink text-sm uppercase tracking-wider">Hours & Claims</p>
                    <p className="text-slateBody">{SITE.hours}</p>
                    <p className="text-xs text-muted mt-0.5">24/7 claims reporting · {SITE.claimsSla}</p>
                  </div>
                </div>
              </FadeIn>

              {/* Form */}
              <FadeIn delay={0.1}>
                {submitted ? (
                  <div className="card p-10 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-light flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald" strokeWidth={2.2} />
                    </div>
                    <h2 className="font-heading font-extrabold text-ink text-2xl mb-3">Message sent</h2>
                    <p className="text-muted">Thanks for reaching out. We&apos;ll get back to you shortly.</p>
                  </div>
                ) : (
                  <form
                    name="contact"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="card p-7 md:p-9 space-y-5"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <input
                      name="bot-field"
                      type="hidden"
                      value={formData["bot-field"]}
                      onChange={handleChange}
                      className="hidden"
                    />

                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-5 h-5 text-emerald" />
                      <h2 className="font-heading font-extrabold text-ink text-xl">Send a message</h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className={labelClass}>Name *</label>
                        <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>Email *</label>
                        <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="jane@smithsupply.com" className={inputClass} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className={labelClass}>Phone</label>
                        <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(480) 555-0100" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="subject" className={labelClass}>Subject</label>
                        <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="Quote, claim, coverage question…" className={inputClass} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClass}>Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help with your building material dealer insurance?"
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-emerald text-white font-heading font-bold rounded-xl shadow-emerald hover:bg-emerald-dark transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Sending…" : "Send Message"}
                      {!submitting && <ArrowRight className="w-5 h-5" />}
                    </button>
                  </form>
                )}
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
