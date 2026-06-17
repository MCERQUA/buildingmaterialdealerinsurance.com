import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for buildingmaterialdealerinsurance.com.",
  alternates: { canonical: `${SITE.url}/terms` },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-yard pt-32 md:pt-36 pb-20 md:pb-24">
          <div className="container-tight max-w-3xl">
            <h1 className="font-heading font-extrabold text-ink text-3xl md:text-4xl mb-3">Terms of Use</h1>
            <p className="text-sm text-muted">Last updated: {new Date().toISOString().slice(0, 10)}</p>

            <div className="prose-yard mt-8">
              <p>
                These terms govern your use of {SITE.domain}. By using this site, you agree to them.
              </p>

              <h2>No insurance advice</h2>
              <p>
                The content on this site is provided for general informational purposes only and does not constitute insurance advice, a quote, an offer of coverage, or a binding indication. Coverage is subject to the terms, conditions, and exclusions of the actual insurance policy issued. A quote is not binding until accepted and a policy is issued by the carrier.
              </p>

              <h2>Quote and contact forms</h2>
              <p>
                Submitting a quote or contact form requests a quote or contact from {SITE.legalName}; it does not purchase coverage or bind insurance. You agree to provide accurate and truthful information.
              </p>

              <h2>License</h2>
              <p>
                Contractors Choice Agency is licensed to transact insurance in all 50 states (NPN {SITE.npn}). Insurance products are underwritten by unaffiliated third-party insurance carriers.
              </p>

              <h2>Intellectual property</h2>
              <p>
                Site content, including text, graphics, and logos, is the property of {SITE.legalName} or its licensors and may not be reproduced without permission.
              </p>

              <h2>Disclaimer</h2>
              <p>
                This site is provided &ldquo;as is&rdquo; without warranties of any kind. We do not warrant that the information is accurate, complete, or current.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about these terms? Contact us at {SITE.email} or {SITE.phone}.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
