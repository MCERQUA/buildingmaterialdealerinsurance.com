import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for buildingmaterialdealerinsurance.com.",
  alternates: { canonical: `${SITE.url}/privacy` },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-yard pt-32 md:pt-36 pb-20 md:pb-24">
          <div className="container-tight max-w-3xl">
            <h1 className="font-heading font-extrabold text-ink text-3xl md:text-4xl mb-3">Privacy Policy</h1>
            <p className="text-sm text-muted">Last updated: {new Date().toISOString().slice(0, 10)}</p>

            <div className="prose-yard mt-8">
              <p>
                {SITE.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates {SITE.domain}. This page explains what information we collect when you use this site and our quote and contact forms, and how we use and protect it.
              </p>

              <h2>Information we collect</h2>
              <p>
                When you submit a quote or contact form, we collect the information you provide: your name, business name, email address, phone number, state, dealer type, coverage interest, approximate inventory value, and any message you include. We also collect basic technical information (such as IP address and browser type) when you visit the site.
              </p>

              <h2>How we use your information</h2>
              <ul>
                <li>To respond to your quote request or inquiry and prepare an insurance proposal.</li>
                <li>To provide the insurance products and services you request.</li>
                <li>To communicate with you about your coverage, claims, and account.</li>
                <li>To comply with legal, regulatory, and licensing requirements.</li>
              </ul>

              <h2>How we share your information</h2>
              <p>
                We share the information needed to quote, bind, and service your insurance with our insurance carrier partners, managing general agents, and other entities involved in placing your coverage. We do not sell your personal information to third parties for marketing purposes.
              </p>

              <h2>Data retention</h2>
              <p>
                We retain the information you submit for as long as necessary to provide the services you requested and to meet legal and regulatory recordkeeping requirements.
              </p>

              <h2>Your rights</h2>
              <p>
                Depending on your state of residence, you may have rights to access, correct, or delete the personal information we hold about you. To exercise these rights, contact us at {SITE.email} or {SITE.phone}.
              </p>

              <h2>Security</h2>
              <p>
                We use reasonable administrative, technical, and physical safeguards to protect your information. No method of transmission over the internet is fully secure, and we cannot guarantee absolute security.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about this policy? Contact us at {SITE.email}, {SITE.phone}, or {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
