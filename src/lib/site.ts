// Centralized site data — used across nav, footer, schema, CTAs

export const SITE = {
  name: "Building Material Dealer Insurance",
  legalName: "Building Material Dealer Insurance (by Contractors Choice Agency)",
  domain: "buildingmaterialdealerinsurance.com",
  url: "https://buildingmaterialdealerinsurance.com",
  tagline: "Insurance for Lumber Yards, Building Supply Dealers & Hardware Distributors",
  description:
    "Specialized commercial insurance for building material dealers, lumber yards, building supply yards, and hardware distributors. Property & inventory, general liability, workers' comp, commercial auto, inland marine, product liability, equipment breakdown, and umbrella. Licensed all 50 states. 15-minute quotes, 2-hour claims response.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm Arizona (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "Premises & operations liability for dealer yards",
    description:
      "Third-party bodily injury and property damage coverage built for building material dealers — slips in the yard, contractor customers hit by forklifts, loading-dock incidents, and completed-operations claims on delivered goods.",
    icon: "ShieldCheck",
    image: "/images/service-general-liability.jpg",
    keywords: [
      "building supply general liability",
      "premises liability contractor yard",
      "GL insurance hardware store",
      "completed operations coverage dealer",
    ],
  },
  {
    slug: "property-inventory",
    title: "Property & Inventory Insurance",
    short: "Building, stock, and lumber-stack fire coverage",
    description:
      "Property and inventory coverage engineered for the catastrophic fire exposure of lumber stacks and bulk building materials — replacement-cost stock, debris removal, sprinkler-discharge, and outdoor-yard coverage.",
    icon: "Flame",
    image: "/images/service-property-inventory.jpg",
    keywords: [
      "lumber yard property insurance",
      "inventory insurance building supply",
      "lumber yard fire insurance",
      "stock coverage wholesale dealer",
    ],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "Work comp for forklift, loading & yard crews",
    description:
      "Workers' compensation calibrated to the real hazards of a building supply operation — forklift and lift-truck injuries, lifting and material-handling strains, loading-dock crush injuries, and saw/dust exposure.",
    icon: "HardHat",
    image: "/images/service-workers-comp.jpg",
    keywords: [
      "workers comp forklift",
      "lumber yard workers comp",
      "warehouse workers compensation",
      "material handler work comp",
    ],
  },
  {
    slug: "commercial-auto-delivery",
    title: "Commercial Auto & Delivery",
    short: "Box trucks, flatbeds & delivery fleet",
    description:
      "Commercial auto for the delivery fleet most dealers run — box trucks, flatbeds, boom trucks, and ramp trucks hauling lumber and materials to job sites, plus non-owned and hired coverage for the counter staff.",
    icon: "Truck",
    image: "/images/service-commercial-auto.jpg",
    keywords: [
      "commercial auto delivery trucks insurance",
      "box truck insurance delivery",
      "flatbed lumber delivery insurance",
      "material dealer fleet insurance",
    ],
  },
  {
    slug: "inland-marine",
    title: "Inland Marine & Cargo",
    short: "Goods in transit & on the yard",
    description:
      "Inland marine coverage for building materials in transit and on the yard — cargo on your delivery trucks, installers' equipment, valuable stock at off-site storage, and goods in your care, custody, or control.",
    icon: "PackageSearch",
    image: "/images/service-inland-marine.jpg",
    keywords: [
      "inland marine cargo insurance",
      "inland marine building material",
      "cargo insurance lumber delivery",
      "transportation coverage dealer",
    ],
  },
  {
    slug: "product-liability",
    title: "Product Liability Insurance",
    short: "Coverage for goods you sell but don't make",
    description:
      "Product liability coverage for the dealer's unique exposure — the materials you distribute but don't manufacture. Defective drywall, failed fasteners, recalled roofing, contaminated insulation — you can be named even when the manufacturer is at fault.",
    icon: "ShieldAlert",
    image: "/images/service-product-liability.jpg",
    keywords: [
      "product liability insurance distributor",
      "defective product coverage dealer",
      "wholesaler product liability",
      "completed product liability building supply",
    ],
  },
  {
    slug: "equipment-breakdown",
    title: "Equipment Breakdown",
    short: "Kilns, compressors, dust collection & boilers",
    description:
      "Equipment breakdown (boiler & machinery) coverage for the systems that keep a dealer running — kilns, air compressors, dust collection, forklift chargers, boilers, pressure vessels, and electrical panels. Property policies exclude this.",
    icon: "Wrench",
    image: "/images/service-equipment-breakdown.jpg",
    keywords: [
      "equipment breakdown insurance",
      "boiler machinery insurance",
      "kiln breakdown coverage sawmill",
      "furnace pressure vessel insurance",
    ],
  },
  {
    slug: "umbrella-excess",
    title: "Umbrella & Excess Liability",
    short: "Catastrophe limits over your primary policies",
    description:
      "Umbrella and excess liability that sits over your GL, auto, and employers' liability — the catastrophic limits a lumber yard or building supply dealer needs when a forklift fatality or major fire-loss claim breaks through primary limits.",
    icon: "Umbrella",
    image: "/images/service-umbrella.jpg",
    keywords: [
      "umbrella liability business",
      "excess liability building supply",
      "commercial umbrella dealer",
      "catastrophe liability coverage",
    ],
  },
] as const;

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export const STATS = [
  { value: 20, suffix: "+", label: "Years insuring contractors & dealers" },
  { value: 50, suffix: "", label: "States licensed" },
  { value: 15, suffix: " min", label: "Quote turnaround" },
  { value: 2, suffix: " hr", label: "Claims response SLA" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Our old carrier treated the lumber yard like a generic retail store. Contractors Choice Agency actually understood the fire exposure on our stack yard and built a property policy around it. Premium came in lower and coverage is dramatically better.",
    name: "Marcus T.",
    role: "Owner, regional building supply yard",
    location: "Texas",
  },
  {
    quote:
      "We deliver to job sites all day. They packaged our commercial auto, inland marine, and GL together and caught a cargo gap our previous broker completely missed. Worth every minute of the switchover.",
    name: "Diane R.",
    role: "GM, drywall & millwork distributor",
    location: "Arizona",
  },
  {
    quote:
      "The product liability piece was the eye-opener. Nobody had explained that we could be named on a defective-material claim for goods we didn't even make. They fixed that exposure in one renewal.",
    name: "Rick H.",
    role: "President, hardware & fastener distributor",
    location: "Florida",
  },
] as const;

export const FAQS = [
  {
    q: "What insurance does a building material dealer need?",
    a: "A building material dealer typically needs a package built around its specific exposures: commercial property and inventory (the fire and stock exposure is the biggest single risk), general liability for premises and operations, workers' compensation for yard and forklift crews, commercial auto for the delivery fleet, inland marine for goods in transit, product liability for the materials you distribute, equipment breakdown for kilns and compressors, and an umbrella for catastrophic limits. Most dealers carry six to ten of these coverage lines — we package them into one program.",
  },
  {
    q: "Why is lumber yard insurance so expensive?",
    a: "The dominant driver is fire. Stacked lumber and bulk building materials are a catastrophic fire exposure — a single yard fire can destroy the entire inventory in minutes, and many standard property markets will not write the outdoor stack at all or charge heavily for it. Other drivers: forklift and loading injuries (workers comp), a delivery fleet on the road (commercial auto), and goods you sell but don't manufacture (product liability). The right broker structures the program to control these costs — replacement-cost vs actual-cash-value, sprinkler credits, fleet safety programs, and correct class codes all move the premium.",
  },
  {
    q: "How much does building material dealer insurance cost?",
    a: "It depends almost entirely on the operation: inventory value, building value, number of delivery trucks, payroll and class codes, sales volume (for product liability), and loss history. A small hardware distributor might pay a few thousand a year; a mid-size lumber yard with a delivery fleet commonly lands in the mid-five-figures; a large multi-location dealer can run well into six figures. We quote in about 15 minutes once we see the basics — call 844-967-5247 or request a quote online.",
  },
  {
    q: "Does general liability cover the products I sell?",
    a: "Partially, and not reliably. A standard general liability policy includes a products-completed operations hazard, but it has significant gaps for a distributor — especially around products you did not manufacture, and around the specific completed-operations trigger. Many dealers need a dedicated product liability policy (or an endorsement) layered with their GL. This is the single most common coverage gap we find at renewal.",
  },
  {
    q: "Do I need workers' comp if I only have a few forklift drivers?",
    a: "In nearly every state, yes — workers' compensation is mandatory as soon as you have employees, and forklift operators are among the highest-frequency, highest-severity injury exposures in a dealer yard. Even one employee triggers the requirement in most jurisdictions, and the class codes for material handlers, forklift operators, and delivery drivers are specific. We write work comp in all 50 states.",
  },
  {
    q: "What does inland marine cover for a building supply dealer?",
    a: "Inland marine covers property that moves — goods on your delivery trucks, installers' and contractors' equipment, valuable stock at off-site or temporary storage, and materials in your care, custody, or control. For a dealer running delivery, this is essential: your commercial auto policy covers the truck, but not always the cargo. Inland marine closes that gap.",
  },
  {
    q: "Is equipment breakdown included in my property policy?",
    a: "No. Standard commercial property policies exclude sudden mechanical or electrical breakdown of equipment — boilers, pressure vessels, kilns, compressors, dust collection, electrical panels, and similar systems. Equipment breakdown (historically called boiler & machinery) is a separate coverage. For a dealer with kilns or a large compressed-air system, skipping it is a real exposure.",
  },
  {
    q: "Are you licensed in my state?",
    a: "Yes. Contractors Choice Agency is licensed in all 50 states, so we can write your building material dealer program wherever your yard, distribution center, or delivery fleet operates. We quote in about 15 minutes and guarantee a 2-hour claims response.",
  },
] as const;
