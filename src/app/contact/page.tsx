import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact — Building Material Dealer Insurance",
  description:
    "Talk to a building material dealer insurance specialist. Call 844-967-5247 or send a message — quotes in 15 minutes, claims response within 2 hours.",
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
