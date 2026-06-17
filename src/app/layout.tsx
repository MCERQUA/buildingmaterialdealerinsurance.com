import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Building Material Dealer Insurance — Lumber Yard & Building Supply Insurance",
    template: "%s | Building Material Dealer Insurance",
  },
  description: SITE.description,
  keywords: [
    "building material dealer insurance",
    "lumber yard insurance",
    "building supply insurance",
    "hardware store insurance",
    "sawmill insurance",
    "lumber yard fire insurance",
    "product liability insurance distributor",
    "inland marine cargo insurance",
    "equipment breakdown insurance",
    "commercial auto delivery trucks insurance",
    "contractor insurance arizona",
    "commercial insurance arizona",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title:
      "Building Material Dealer Insurance — Lumber Yard & Building Supply Insurance",
    description:
      "Specialized commercial insurance for building material dealers, lumber yards, and building supply distributors. Property & inventory, GL, workers' comp, commercial auto, inland marine, product liability, equipment breakdown, umbrella. Licensed all 50 states. 15-minute quotes.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Building Material Dealer Insurance — coverage for lumber yards and building supply dealers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Material Dealer Insurance — Lumber Yard & Building Supply",
    description:
      "Specialized insurance for building material dealers, lumber yards, and building supply distributors. 15-minute quotes, 2-hour claims response. Licensed all 50 states.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.2622, longitude: -111.7826 },
    employee: { "@type": "Person", name: "Josh Cotner", jobTitle: "Founder & Insurance Agent" },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "State", name: "Arizona" },
      { "@type": "State", name: "Texas" },
      { "@type": "State", name: "Florida" },
    ],
    serviceType: [
      "Building Material Dealer Insurance",
      "Lumber Yard Insurance",
      "Building Supply Insurance",
      "Hardware Store Insurance",
      "Property & Inventory Insurance",
      "General Liability Insurance",
      "Workers' Compensation",
      "Commercial Auto & Delivery",
      "Inland Marine & Cargo",
      "Product Liability Insurance",
      "Equipment Breakdown Insurance",
      "Umbrella & Excess Liability",
    ],
    parentOrganization: {
      "@type": "InsuranceAgency",
      name: "Contractors Choice Agency",
      url: "https://contractorschoiceagency.com",
      foundingDate: "2005",
      foundingLocation: { "@type": "Place", name: "Chandler, Arizona" },
    },
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
