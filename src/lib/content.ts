import { SERVICES } from "./site";

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug) ?? null;
}

export function getAllServiceSlugs() {
  return SERVICES.map((s) => s.slug);
}

// Long-form, niche-accurate body copy for each service page.
// Structured: intro + what's covered + who it's for + why CCA + key coverages list.
export const SERVICE_CONTENT: Record<
  string,
  {
    heroSubtitle: string;
    intro: string[];
    whatsCovered: { title: string; body: string }[];
    whoItsFor: string[];
    whyCca: string[];
    faq: { q: string; a: string }[];
    keyCoverages: string[];
  }
> = {
  "general-liability": {
    heroSubtitle:
      "Premises and operations liability built for the way a building material dealer actually runs — contractor customers in the yard, forklifts crossing walkways, deliveries staged at the dock, and goods you've delivered sitting on a job site.",
    intro: [
      "General liability is the foundation of any building material dealer's insurance program, but a generic small-business GL policy is the wrong tool for a lumber yard or building supply operation. Your exposure profile is specific: members of the public and contractor customers walk your yard every day, heavy equipment shares space with pedestrians, loading docks see constant activity, and the materials you deliver sit on job sites you don't control.",
      "A dealer-tuned general liability policy covers third-party bodily injury and property damage arising from your premises, your operations, and the products and completed operations connected to what you sell and deliver. We write GL with the right class codes, the right premises-operations limits, and the completed-operations coverage a distributor actually needs.",
    ],
    whatsCovered: [
      {
        title: "Premises liability",
        body: "Bodily injury to contractor customers, delivery drivers, or members of the public who slip, trip, or are struck while on your yard, in your showroom, or at your loading dock — including forklift-pedestrian incidents, which are the single most common serious GL claim in a dealer operation.",
      },
      {
        title: "Operations liability",
        body: "Property damage or injury arising from your day-to-day operations: a forklift damaging a customer's vehicle, a load that shifts during loading and damages a buyer's trailer, materials staged on a job site that cause damage or injury.",
      },
      {
        title: "Products & completed operations",
        body: "Claims arising from the materials you have sold and delivered — including the completed-operations hazard for goods installed on a job site. This is the layer that interacts directly with your separate product liability coverage; we structure the two together so there are no gaps and no overlap.",
      },
      {
        title: "Personal & advertising injury",
        body: "Coverage for claims of libel, slander, wrongful eviction, false arrest, and certain advertising injuries — included in a standard GL policy but sized correctly for a dealer's actual marketing and customer-interaction profile.",
      },
      {
        title: "Damage to rented premises",
        body: "Fire damage to premises you rent or lease — important if you operate out of a leased warehouse or yard where a fire you cause could be billed back to you under a lease hold-harmless clause.",
      },
      {
        title: "Medical payments",
        body: "No-fault medical expense coverage for minor injuries to non-employees on your premises — a practical tool that resolves small incidents before they become larger liability claims.",
      },
    ],
    whoItsFor: [
      "Lumber yards and lumber dealers with retail or wholesale foot traffic",
      "Building supply yards (drywall, roofing, insulation, millwork, siding)",
      "Hardware distributors and fastener wholesalers",
      "Home-improvement supply stores with delivery operations",
      "Concrete, masonry, and aggregate dealers",
      "Flooring, cabinet, and fixture distributors",
    ],
    whyCca: [
      "We write dealer GL with the correct ISO class codes — not the generic 'retail store' codes most online carriers default to. The wrong code means the wrong rate and, worse, a coverage dispute at claim time.",
      "Our team has placed dealer programs for 20+ years across 50 states. We know which markets write lumber yards and which decline them.",
      "We coordinate GL, product liability, and umbrella as a stack — not three disconnected policies — so limits, definitions, and other-insurance clauses align.",
      "15-minute quote turnaround and a 2-hour claims response guarantee.",
    ],
    faq: [
      {
        q: "Does general liability cover a customer injured by a forklift in my yard?",
        a: "Yes — forklift-pedestrian incidents are one of the most common serious premises-liability claims at a building supply yard, and a correctly written GL policy responds to them. The key is that your operation is properly classified and the forklift exposure is disclosed to the carrier at binding. Undisclosed forklift operations are a classic reason a GL claim gets denied.",
      },
      {
        q: "Is product liability included in my general liability policy?",
        a: "Partially. A standard GL policy includes a products-completed operations hazard, but for a dealer who distributes goods made by others, the GL products coverage alone is usually not enough — especially for severity. Most dealers need a dedicated product liability layer (or a broader endorsement) structured to sit with the GL. We package these together so they don't fight each other at claim time.",
      },
      {
        q: "What limit should a building material dealer carry?",
        a: "Most dealers carry a $1 million / $2 million GL occurrence and aggregate, with an umbrella on top. The right number depends on your foot traffic, delivery volume, the types of materials you handle, and contractual requirements from your customers. We'll show you the math.",
      },
    ],
    keyCoverages: [
      "Third-party bodily injury",
      "Property damage to others",
      "Premises & operations",
      "Products & completed operations",
      "Personal & advertising injury",
      "Damage to rented premises",
      "Medical payments",
    ],
  },

  "property-inventory": {
    heroSubtitle:
      "Property and inventory coverage engineered for the catastrophic fire exposure of stacked lumber and bulk building materials — the single biggest property risk a dealer carries and the one most standard carriers get wrong.",
    intro: [
      "Property is where a building material dealer's risk concentrates. A lumber yard's entire inventory can burn in minutes; a sprinkler discharge can ruin thousands of dollars of finished goods; a wind event can scatter an outdoor stack across the neighborhood. Standard commercial property policies are written for office buildings and retail stores, not for yards full of combustible materials stored outdoors.",
      "We structure property and inventory coverage that actually fits the operation: replacement-cost on building and stock, coverage for outdoor stacks, sprinkler-leakage and discharge, debris removal, ordinance-or-law, and business income that keeps paying while you rebuild. The valuation basis (replacement cost vs actual cash value) and the outdoor-yard coverage are the two decisions that determine whether a fire is survivable.",
    ],
    whatsCovered: [
      {
        title: "Building coverage",
        body: "The showroom, warehouse, office, millwork shop, saw shed, and any other structure on the insured premises — written at replacement cost so a total fire doesn't leave you under-insured by the depreciation deduction.",
      },
      {
        title: "Business personal property (stock & inventory)",
        body: "Your lumber stacks, drywall, roofing, millwork, fasteners, hardware, and finished goods — the inventory that is the heart of the operation. We write this at replacement cost, not actual cash value, so a fire pays to replace the stock, not its depreciated worth.",
      },
      {
        title: "Outdoor property & yard stock",
        body: "The most important endorsement for a lumber yard. Standard property extends only limited coverage to property stored outdoors — and many policies exclude outdoor lumber stacks entirely. We add the outdoor-property endorsement that covers your actual yard inventory against fire, wind, hail, and theft.",
      },
      {
        title: "Sprinkler leakage & discharge",
        body: "Water damage from a sprinkler system discharge — a real and frequent loss for dealers with finished goods and bagged materials. Coverage pays to dry out and replace water-damaged stock.",
      },
      {
        title: "Debris removal",
        body: "After a fire, removing the wreckage of a lumber yard is a major expense in its own right — charred lumber, twisted racks, contaminated soil. Debris removal coverage pays this on top of the inventory settlement.",
      },
      {
        title: "Ordinance or law",
        body: "If a damaged building must be rebuilt to current code (sprinklers, setbacks, materials), the upgrade cost is not covered by standard property. Ordinance-or-law coverage pays the difference.",
      },
      {
        title: "Business income & extra expense",
        body: "Lost profit and continuing expenses while you rebuild after a covered loss — plus the extra expense of operating from a temporary location. For a dealer, a 6-to-12-month rebuild is a realistic timeline; business income is what keeps the company alive through it.",
      },
    ],
    whoItsFor: [
      "Lumber yards and lumber dealers (the highest single fire exposure in the niche)",
      "Building supply yards with significant outdoor inventory",
      "Drywall, roofing, and insulation distributors",
      "Millwork, cabinet, and flooring distributors",
      "Hardware and fastener distributors with warehouse stock",
      "Concrete, masonry, and aggregate dealers",
    ],
    whyCca: [
      "We know which property markets write outdoor lumber stacks — and which quietly exclude them. The difference is the difference between a paid claim and a coverage dispute after a fire.",
      "We push replacement-cost valuation on both building and stock. Actual cash value on a lumber stack means pennies on the dollar after depreciation; replacement cost means you can actually rebuild the inventory.",
      "We size business income to your real rebuild timeline, not the carrier's default 6-month figure.",
      "20+ years, all 50 states, 15-minute quotes, 2-hour claims response.",
    ],
    faq: [
      {
        q: "Why is lumber yard property insurance so expensive?",
        a: "Because the fire exposure is genuinely catastrophic. Stacked lumber is one of the most combustible commercial inventories that exists — a single ignition source can consume an entire yard in minutes, and the loss is frequently total. Markets that understand this charge accordingly, and markets that don't understand it either decline to write the risk or price it too low to survive a real claim. The right broker controls the cost through correct valuation, sprinkler credits, fire-protection documentation, and proper outdoor-property endorsements rather than by under-insuring.",
      },
      {
        q: "Does my property policy cover lumber stored outdoors?",
        a: "Often, no — and this is one of the most common and dangerous gaps we find. Standard commercial property policies cap outdoor-property coverage at a low limit (sometimes $1,000–$10,000) and may exclude outdoor lumber stacks entirely. You need an explicit outdoor-property endorsement sized to the actual value of your yard inventory. We write this on every dealer program.",
      },
      {
        q: "Replacement cost or actual cash value — which should I choose?",
        a: "Replacement cost, full stop, for a building material dealer. Actual cash value applies depreciation, and on lumber, fasteners, and finished goods the depreciation hit can be enormous — meaning a fire settlement that won't come close to replacing the inventory. The premium difference is modest and the difference at claim time is the survival of the business.",
      },
    ],
    keyCoverages: [
      "Building (replacement cost)",
      "Stock & inventory (replacement cost)",
      "Outdoor yard property",
      "Sprinkler leakage & discharge",
      "Debris removal",
      "Ordinance or law",
      "Business income & extra expense",
    ],
  },

  "workers-compensation": {
    heroSubtitle:
      "Workers' compensation calibrated to the real hazards of a building supply operation — forklifts, loading docks, manual material handling, saws and dust, and the daily lifting that wears crews down over years.",
    intro: [
      "A building material dealer's workforce is one of the higher-hazard workforces in distribution. Forklift operators and lift-truck drivers face the most severe injury exposures in the operation; material handlers and yard crew accumulate lifting strains over time; saw operators and kiln staff face amputation, burn, and respiratory exposures; delivery drivers face road risk. The class codes are specific, and the experience-modification factor (X-Mod) drives the premium.",
      "We write workers' comp with the correct class codes for every role in a dealer operation, we manage the experience modification, and we partner with a claims-handling and return-to-work process that controls the long-tail cost of claims. Workers' comp is mandatory in nearly every state the moment you have an employee — we write it in all 50.",
    ],
    whatsCovered: [
      {
        title: "Medical care",
        body: "All reasonable and necessary medical treatment for a work injury — from the initial ER visit through surgery, physical therapy, and prescriptions, with no cap in most jurisdictions and no deductible to the injured worker.",
      },
      {
        title: "Disability benefits",
        body: "Wage replacement while an injured worker is unable to work — temporary total, temporary partial, permanent partial, and permanent total disability, paid at the statutory rate for your state.",
      },
      {
        title: "Vocational rehabilitation",
        body: "Retraining and job-placement assistance when an injury prevents a return to the previous role — important for career forklift operators and saw handlers who can no longer perform that specific work.",
      },
      {
        title: "Death benefits",
        body: "Wage replacement and burial benefits for the dependents of a worker killed on the job — a real exposure in a dealer operation given the severity of forklift and loading incidents.",
      },
      {
        title: "Employers' liability",
        body: "The 'Part Two' of a work comp policy — protection for the employer against suits by injured workers or their families that fall outside the exclusive remedy of the workers' comp statute. Coordinated with your umbrella.",
      },
    ],
    whoItsFor: [
      "Dealers with forklift operators and lift-truck drivers",
      "Yard crews handling lumber, drywall, roofing, and millwork by hand",
      "Saw operators, kiln operators, and shop staff",
      "Delivery drivers (work comp coordinates with commercial auto)",
      "Counter and inside-sales staff (lower hazard, but still covered)",
      "Any dealer with even a single employee — work comp is mandatory",
    ],
    whyCca: [
      "Correct class codes for every role — forklift operator codes differ from counter-sales codes, and misclassification is a classic premium and claim-dispute trap.",
      "Active experience-modification management. Your X-Mod is the single biggest lever on your work comp premium; we work the unit statistical plan and the mod so it stays as low as your loss history supports.",
      "Claims-handling partnership with a return-to-work focus that shortens the tail on claims and keeps the mod down.",
      "All 50 states, 15-minute quotes, 2-hour claims response guarantee.",
    ],
    faq: [
      {
        q: "Do I need workers' comp if I only have a couple of employees?",
        a: "In nearly every state, yes. Workers' compensation is mandatory as soon as you have employees, and most jurisdictions require coverage from the first employee. Some states have very limited exemptions for sole owners or family-only operations, but they are narrow and specific. Operating without required work comp exposes you to stop-work orders, fines, and personal liability for injury costs. We'll tell you exactly where your state draws the line.",
      },
      {
        q: "What is an experience modification factor (X-Mod) and why does it matter?",
        a: "Your X-Mod is a multiplier applied to your work comp premium based on your actual claims history compared to other dealers in your class codes. A mod below 1.0 means you're better than average and you get a credit; above 1.0 means a debit. Over a few years, the mod becomes the dominant driver of premium — so claims control and return-to-work programs pay back many times over. We help you manage it.",
      },
      {
        q: "Are forklift operators expensive to insure?",
        a: "Forklift operators sit in a higher-hazard class code than counter staff, but the bigger cost driver is claim severity rather than the code itself — forklift-pedestrian incidents and crush injuries are high-severity. A documented forklift-safety program, operator certification, and pedestrian-separation discipline materially reduce both frequency and severity, which is reflected in your long-term mod.",
      },
    ],
    keyCoverages: [
      "Medical care (no cap in most states)",
      "Temporary & permanent disability",
      "Vocational rehabilitation",
      "Death & burial benefits",
      "Employers' liability (Part Two)",
      "All 50 states",
    ],
  },

  "commercial-auto-delivery": {
    heroSubtitle:
      "Commercial auto for the delivery fleet most building material dealers run — box trucks, flatbeds, boom trucks, and ramp trucks hauling lumber and materials to job sites, plus non-owned and hired coverage for the counter staff who occasionally drive.",
    intro: [
      "Most building material dealers run a delivery fleet, and that fleet is on the road every working day carrying heavy, shifting loads. The commercial auto exposure is real and severe: a loaded box truck or flatbed in a serious accident causes catastrophic damage, and the cargo, the third-party vehicle, and any bodily injury all land on your policy. Personal auto policies do not cover business use of a vehicle — and a dealer caught uninsured on a delivery run is a disaster.",
      "We structure commercial auto for the actual fleet — owned trucks, hired and non-owned coverage for employee and counter-staff driving, physical damage (comprehensive and collision) on the trucks, and motor-truck cargo coverage that coordinates with your inland marine. We pair the auto with the right umbrella limit because a loaded-truck fatality will exhaust primary limits fast.",
    ],
    whatsCovered: [
      {
        title: "Liability (BAP)",
        body: "Bodily injury and property damage to third parties caused by an owned, hired, or non-owned vehicle in your operation — the core of the business auto policy and the layer a loaded-truck accident hits first.",
      },
      {
        title: "Physical damage — collision & comprehensive",
        body: "Damage to your owned trucks — collision for traffic accidents, comprehensive for fire, theft, vandalism, weather, and falling objects. Your trucks are a major capital asset; physical damage protects that asset.",
      },
      {
        title: "Hired & non-owned auto",
        body: "Coverage for vehicles you rent or hire, and for the gray-area exposure of employees driving their own vehicles on dealer business (the parts run, the bank run, the off-site delivery). Often missing on small fleets and a real gap.",
      },
      {
        title: "Motor truck cargo",
        body: "Coverage for the materials on the truck — coordinates with your inland marine and closes the gap between what the auto liability pays (the other guy) and what protects your customer's goods in transit.",
      },
      {
        title: "Medical payments / PIP",
        body: "No-fault medical coverage for occupants of your vehicle, regardless of fault — required in no-fault states and a practical courtesy layer elsewhere.",
      },
      {
        title: "Uninsured / underinsured motorist",
        body: "Protection for your drivers and passengers when the at-fault party has no insurance or too little — a meaningful exposure on delivery routes through varying jurisdictions.",
      },
    ],
    whoItsFor: [
      "Dealers running owned box trucks, flatbeds, or boom trucks",
      "Operations with ramp trucks or knuckle-boom delivery vehicles",
      "Dealers using hired/rented trucks during peak demand",
      "Operations where counter or sales staff occasionally drive on business",
      "Any dealer whose materials are delivered on company vehicles",
    ],
    whyCca: [
      "We package auto with inland marine and umbrella as a coordinated fleet program — not a standalone personal-lines-style auto policy that leaves cargo and umbrella gaps.",
      "We write the MVR (motor vehicle record) discipline that keeps the fleet insurable and the premium down — driver screening, certification, and continuous monitoring.",
      "We coordinate the motor-truck cargo with your inland marine so there's no argument at claim time about which policy responds.",
      "20+ years, all 50 states, 15-minute quotes, 2-hour claims response.",
    ],
    faq: [
      {
        q: "Does my personal auto policy cover me when I drive the company truck?",
        a: "No. Personal auto policies exclude business use of a vehicle, and a dealer delivery truck is unambiguously a business vehicle. Any accident in a company-owned truck must be covered by the business auto policy. Relying on a personal policy is a coverage gap that surfaces only after a loss — when it's too late.",
      },
      {
        q: "What is hired and non-owned auto, and do I need it?",
        a: "Hired auto covers vehicles you rent or hire (a rented box truck during a peak week). Non-owned auto covers vehicles owned by others — typically employees — that are driven on your business (a counter staffer driving to the bank or a parts run). It's inexpensive and closes a gap that catches many dealers off guard. We include it on essentially every dealer program.",
      },
      {
        q: "Is the cargo on my delivery truck covered by commercial auto?",
        a: "Your commercial auto liability covers damage you cause to others — not the cargo itself. Cargo is covered by motor-truck cargo coverage and/or your inland marine policy. The three (auto, motor-truck cargo, inland marine) must be structured together or there will be a gap. We package them as one fleet program.",
      },
    ],
    keyCoverages: [
      "Auto liability (BAP)",
      "Collision & comprehensive",
      "Hired & non-owned auto",
      "Motor truck cargo",
      "Medical payments / PIP",
      "Uninsured / underinsured motorist",
    ],
  },

  "inland-marine": {
    heroSubtitle:
      "Inland marine coverage for property that moves — building materials on your delivery trucks, installers' and contractors' equipment, valuable stock at off-site storage, and materials in your care, custody, or control.",
    intro: [
      "Inland marine is the line of insurance that covers property in transit and property that doesn't sit still — and for a building material dealer, that's a large share of the risk. Standard property insurance covers stock at a fixed location; the moment your materials are loaded on a truck, or staged at a job site, or stored off-site, or in the hands of an installer, the property exposure has moved and your property policy may no longer respond.",
      "We structure inland marine to follow the materials wherever the operation takes them — cargo on the delivery run, installers' equipment, stock at satellite locations, and goods in your care, custody, or control. For a dealer running delivery, inland marine is not optional; it is the coverage that determines whether a transit loss is survivable.",
    ],
    whatsCovered: [
      {
        title: "Motor truck cargo / goods in transit",
        body: "Coverage for the materials on your delivery trucks — lumber, drywall, roofing, millwork — from the moment they leave your yard until they're received at the job site. Coordinates with motor-truck cargo on the auto policy so there's no gap and no argument.",
      },
      {
        title: "Installation / contractors equipment",
        body: "Coverage for equipment you transport to and use at job sites — forklifts, boom lifts, generators, compressors, saws — and for installation floater exposure on materials you've delivered and are about to install.",
      },
      {
        title: "Stock at off-site / temporary locations",
        body: "Materials staged at a satellite yard, a customer's job site, or a temporary storage location — covered for the dwell time before final delivery or installation.",
      },
      {
        title: "Goods in your care, custody, or control",
        body: "Materials that belong to others but are in your physical control — customer-furnished materials you're storing or handling, consignment stock, or goods you're processing. Property policies exclude CCC exposures; inland marine closes that gap.",
      },
      {
        title: "Bailee / customer goods",
        body: "When you hold customer property (cut-to-order lumber, custom millwork, finished goods awaiting pickup), bailee coverage responds to loss or damage while that property is in your custody.",
      },
      {
        title: "Trip transit & annual transit",
        body: "Single-shipment (trip transit) coverage for a one-off high-value haul, or annual transit coverage for an ongoing delivery operation — whichever fits the volume and rhythm of your business.",
      },
    ],
    whoItsFor: [
      "Dealers running any delivery operation",
      "Operations staging materials at job sites or satellite yards",
      "Dealers handling customer-furnished or consignment materials",
      "Operations with off-site or temporary storage",
      "Millwork or cut-to-order shops holding customer goods",
      "Any dealer whose materials leave the yard before final sale",
    ],
    whyCca: [
      "We coordinate inland marine with commercial auto, property, and motor-truck cargo as a single program — eliminating the most common coverage arguments (which policy responds, and in what order) at claim time.",
      "We write CCC and bailee exposure correctly — two areas where generic broker work routinely leaves dealers uncovered.",
      "20+ years, all 50 states, 15-minute quotes, 2-hour claims response.",
    ],
    faq: [
      {
        q: "What is inland marine insurance and why does a building material dealer need it?",
        a: "Inland marine covers property that moves or sits in non-permanent locations — goods on a delivery truck, equipment at a job site, stock at a satellite yard, customer property in your custody. Standard commercial property covers stock at a fixed insured location; the moment materials are loaded onto a truck or staged off-site, the property exposure has moved out from under the property policy. Inland marine follows the materials. If you run delivery, you need it.",
      },
      {
        q: "Does inland marine overlap with my commercial auto cargo coverage?",
        a: "It can, and that's the point of structuring them together. Motor-truck cargo on the auto policy and inland marine cargo both touch goods in transit; written carelessly they can either both deny a claim (each claiming the other should respond) or both pay and trigger complex other-insurance clauses. We write them as a coordinated pair with a clear order of coverage so there's no gap and no fight.",
      },
      {
        q: "Does inland marine cover customer materials I'm storing?",
        a: "Yes — under the care, custody, or control and bailee coverages, which are core inland marine lines. Property policies exclude CCC exposure, so without inland marine a loss of customer-furnished materials you're holding (cut-to-order lumber, custom millwork) would be uncovered. We include this on dealer programs that handle customer goods.",
      },
    ],
    keyCoverages: [
      "Goods in transit (motor truck cargo)",
      "Installation & contractors equipment",
      "Off-site / temporary-location stock",
      "Goods in care, custody, or control",
      "Bailee / customer goods",
      "Trip & annual transit",
    ],
  },

  "product-liability": {
    heroSubtitle:
      "Product liability coverage for the dealer's unique exposure — the materials you distribute but do not manufacture. Defective drywall, failed fasteners, recalled roofing, contaminated insulation: you can be named even when the manufacturer is at fault.",
    intro: [
      "Product liability is the coverage line most misunderstood in a building material dealer program. As a distributor, you sell goods made by others — and when those goods fail, the injured party frequently names every entity in the chain of commerce, including the dealer. You did not manufacture the defective fastener, the off-gassing insulation, or the failing roofing membrane — but you sold and delivered it, and the cost of defending a product claim can be enormous even when you ultimately bear no liability.",
      "General liability includes a products-completed operations hazard, but for a distributor it is rarely enough — both in limit and in scope. We structure dedicated product liability coverage (or a properly endorsed GL) that responds to the specific exposures of distributing building materials, with limits that reflect the severity of a defective-product claim and a defense-cost structure that protects the dealer.",
    ],
    whatsCovered: [
      {
        title: "Defective product claims",
        body: "Bodily injury or property damage arising from a product you distributed that proves defective — failed fasteners, contaminated insulation, defective drywall, recalled roofing, off-gassing adhesives. Coverage responds even when the defect originates with the manufacturer.",
      },
      {
        title: "Defense costs",
        body: "Legal defense of a product claim — which frequently costs more than any ultimate settlement. We structure the policy so defense is funded and does not erode the indemnity limit (or, where it does, the limit is sized to absorb it).",
      },
      {
        title: "Manufacturing & design defect exposure",
        body: "Although you did not design or manufacture the product, your position in the chain of commerce exposes you to these theories. Coverage responds to claims brought on a manufacturing-defect, design-defect, or failure-to-warn theory.",
      },
      {
        title: "Recall expense (optional endorsement)",
        body: "The cost of recalling a defective product you distributed — notification, shipping, disposal, and reputational recovery. Not included in a standard product liability policy; available as an endorsement for dealers handling higher-risk product lines.",
      },
      {
        title: "Completed-operations claims",
        body: "Claims arising after the material you sold has been installed — a roof that leaks, a floor that fails, a fastener that corrodes. Coordinates with the completed-operations hazard in your GL.",
      },
      {
        title: "Supplemental / excess product liability",
        body: "Higher limits layered over the primary product liability for high-severity exposures — coordinated with your umbrella so the stack responds in the right order.",
      },
    ],
    whoItsFor: [
      "Any dealer that distributes materials manufactured by others",
      "Lumber, drywall, roofing, and insulation distributors",
      "Hardware, fastener, and tool distributors",
      "Millwork, cabinet, and flooring distributors",
      "Dealers handling imported or private-label goods",
      "Operations selling into commercial or multi-family construction",
    ],
    whyCca: [
      "This is the single most common gap we find at renewal — dealers relying on a GL products hazard that is undersized and under-scoped for a distributor's real exposure. We close it.",
      "We structure defense cost correctly (inside or outside the limit, depending on the carrier and the exposure) so a defended claim doesn't silently consume your indemnity.",
      "We coordinate primary product liability with the GL products hazard and the umbrella, so the stack doesn't fight itself at claim time.",
      "For high-risk product lines (imported goods, private label, certain chemical products), we source markets that specialize in distributor product liability.",
      "20+ years, all 50 states, 15-minute quotes, 2-hour claims response.",
    ],
    faq: [
      {
        q: "Why does a dealer need product liability if the manufacturer is at fault?",
        a: "Because plaintiffs routinely name every entity in the chain of commerce — manufacturer, distributor, and dealer — and let discovery sort out fault. Even when you ultimately bear no liability, the cost of defending a product claim can be substantial, and an uninsured defense cost falls on you. Product liability coverage funds that defense and indemnifies you for any allocated share of fault. Without it, you are self-insuring a low-frequency but very-high-severity exposure.",
      },
      {
        q: "Does general liability cover product liability for a distributor?",
        a: "Partially. A standard GL policy includes a products-completed operations hazard, but it typically has meaningful limitations for a distributor: the limit is shared with your GL claims (a single severe product loss can exhaust the aggregate), the scope of coverage can have gaps for goods you did not manufacture, and defense costs may erode the limit. Most dealers need a dedicated product liability layer or a broader endorsement. We structure the two together so they don't leave a gap or overlap.",
      },
      {
        q: "Does product liability cover the cost of a recall?",
        a: "Not under a standard policy — recall expense (notification, shipping, disposal, reputational costs) is typically excluded and must be added by endorsement. For dealers in higher-risk product lines (imported goods, chemical products, anything with a history of class recalls), we add the endorsement. We'll tell you whether your product mix warrants it.",
      },
    ],
    keyCoverages: [
      "Defective product claims",
      "Defense costs (structured)",
      "Manufacturing & design defect exposure",
      "Recall expense (endorsement)",
      "Completed-operations claims",
      "Supplemental / excess product liability",
    ],
  },

  "equipment-breakdown": {
    heroSubtitle:
      "Equipment breakdown (boiler & machinery) coverage for the systems that keep a building supply operation running — kilns, air compressors, dust collection, forklift chargers, boilers, pressure vessels, and electrical panels. Standard property policies exclude this.",
    intro: [
      "Equipment breakdown — historically called boiler and machinery — covers the sudden, accidental mechanical or electrical failure of equipment that a property policy excludes. For a building material dealer, the systems at risk are the operational backbone: kilns at a sawmill or lumber operation, large air compressors that power the yard, dust collection systems, forklift and EV chargers, boilers and pressure vessels, and the electrical panels and switchgear that feed the facility.",
      "When one of these fails — a kiln cracks, a compressor seizes, a panel short-circuits, a pressure vessel ruptures — the repair or replacement cost is often in five or six figures, the business interruption is real, and the property policy will not respond because the failure is mechanical or electrical rather than a covered cause of loss. Equipment breakdown closes that gap.",
    ],
    whatsCovered: [
      {
        title: "Pressure vessels & boilers",
        body: "Coverage for the rupture or mechanical failure of boilers, pressure vessels, steam systems, and similar equipment — the classic boiler-and-machinery exposure and the line's namesake.",
      },
      {
        title: "Electrical equipment",
        body: "Sudden damage to electrical panels, switchgear, transformers, and motors from short circuits, arcing, or electrical failure — a frequent and expensive loss at any facility, and excluded by standard property.",
      },
      {
        title: "Production & mechanical equipment",
        body: "Mechanical breakdown of compressors, pumps, conveyors, dust collection, saw motors, kiln heating systems, and similar mechanical equipment central to the operation.",
      },
      {
        title: "Computer & communications equipment",
        body: "Sudden failure of computers, servers, point-of-sale, and communications equipment from electrical disturbance — increasingly relevant as dealers rely on inventory and logistics systems.",
      },
      {
        title: "Business interruption from breakdown",
        body: "Lost income and continuing expense while equipment is being repaired or replaced — the indirect cost of a breakdown that frequently exceeds the direct repair cost, especially for a kiln or compressor that brings the operation to a halt.",
      },
      {
        title: "Expediting expense",
        body: "The cost of expediting repairs — overtime, rush parts, temporary equipment — to get back to operation faster. Often the difference between a 2-week and an 8-week outage.",
      },
    ],
    whoItsFor: [
      "Sawmills and lumber operations with kilns",
      "Dealers with large compressed-air systems powering the yard",
      "Operations with dust collection or material-handling machinery",
      "Facilities with significant electrical infrastructure",
      "Dealers operating pressure vessels or steam equipment",
      "Operations where equipment downtime means days of lost revenue",
    ],
    whyCca: [
      "We identify the equipment at your facility that property excludes — kilns, compressors, panels, pressure vessels — and size the breakdown coverage to the replacement cost and business-interruption exposure of each.",
      "We coordinate equipment breakdown with property and business income so a single event (a fire that also damages the compressor) is covered cleanly across lines, not argued between them.",
      "We help you satisfy the inspection and jurisdictional requirements that often accompany pressure vessels and boilers — keeping the coverage in force and the operation compliant.",
      "20+ years, all 50 states, 15-minute quotes, 2-hour claims response.",
    ],
    faq: [
      {
        q: "Isn't equipment breakdown covered by my property policy?",
        a: "No. Standard commercial property policies exclude sudden mechanical, electrical, or pressure-system breakdown of equipment. A boiler rupture, a compressor seizure, an electrical-panel short, or a kiln crack are all equipment-breakdown events that the property policy will not pay. Equipment breakdown is a separate coverage — often inexpensive relative to the exposure — that fills this gap.",
      },
      {
        q: "What equipment at a building supply dealer needs breakdown coverage?",
        a: "The list depends on the operation, but commonly: kilns (sawmill and lumber operations), large air compressors, dust collection systems, material-handling and conveyor equipment, saw motors, forklift and equipment chargers, boilers and pressure vessels, and the main electrical panels and switchgear. We walk the facility with you to identify the equipment that matters and size the coverage to it.",
      },
      {
        q: "Does equipment breakdown cover business interruption?",
        a: "Yes — most equipment-breakdown policies include time-element (business interruption and extra expense) coverage for the income lost while the failed equipment is being repaired or replaced. For a kiln or main compressor, this is often the larger part of the loss. We size the time element to your realistic repair timeline.",
      },
    ],
    keyCoverages: [
      "Pressure vessels & boilers",
      "Electrical equipment & panels",
      "Production & mechanical equipment",
      "Computer & communications equipment",
      "Business interruption from breakdown",
      "Expediting expense",
    ],
  },

  "umbrella-excess": {
    heroSubtitle:
      "Umbrella and excess liability that sits over your general liability, commercial auto, and employers' liability — the catastrophic limits a lumber yard or building supply dealer needs when a forklift fatality or major loss claim breaks through primary limits.",
    intro: [
      "An umbrella (or excess liability) policy adds limits on top of your primary general liability, commercial auto liability, and employers' liability. For a building material dealer, the severity exposure is real: a forklift-pedestrian fatality, a loaded delivery truck in a multi-vehicle accident, a major product-liability claim on distributed goods, or a catastrophic fire that spreads to neighboring property. Any one of these can break through a $1 million primary GL limit before the claim is half-resolved.",
      "We structure umbrella and excess liability in layers that sit cleanly over your primary program, with limits sized to the realistic severity of a dealer's worst-case claim. The umbrella also occasionally drops down to cover a loss that falls outside the underlying policy's scope — a valuable feature we negotiate where the market allows.",
    ],
    whatsCovered: [
      {
        title: "Excess limits over GL",
        body: "Additional indemnity, in $1M increments, sitting over your general liability primary — the layer that responds when a premises-liability or product-liability claim exhausts the underlying GL.",
      },
      {
        title: "Excess limits over commercial auto",
        body: "Additional limits over your business auto liability — critical for a dealer, because a loaded-truck accident is one of the highest-severity exposures in the operation.",
      },
      {
        title: "Excess employers' liability",
        body: "Additional limits over the employers' liability (Part Two) section of your workers' comp policy — protection against the catastrophic-consequence claim that falls outside the work comp exclusive remedy.",
      },
      {
        title: "Drop-down coverage",
        body: "When a loss falls outside the scope of an underlying policy (or the underlying carrier is insolvent), the umbrella can drop down to respond as primary — a feature that varies by carrier and that we negotiate where the market allows.",
      },
      {
        title: "Worldwide coverage (often available)",
        body: "Many umbrella forms extend coverage to suits brought outside the U.S. and Canada — relevant for dealers with international suppliers or customers.",
      },
      {
        title: "Defense in excess of limits",
        body: "Defense costs that do not erode the indemnity limit — a critical structure for high-severity claims where defense can run into seven figures.",
      },
    ],
    whoItsFor: [
      "Any dealer with a $1M primary GL limit and meaningful severity exposure",
      "Operations running delivery trucks (loaded-truck fatality exposure)",
      "Dealers distributing products with product-liability severity",
      "Operations with contractor customers or public foot traffic on site",
      "Operations at multi-location scale where a single loss can hit the brand",
      "Any dealer whose customer contracts require higher limits",
    ],
    whyCca: [
      "We size the umbrella to the realistic worst-case severity for a dealer, not the carrier's default minimum — a $1M umbrella is rarely enough for a loaded-truck or forklift-fatality exposure.",
      "We coordinate the umbrella with the underlying GL, auto, and employers' liability so there are no gaps between the primary layer and the excess layer — the most common failure point in a broker-assembled program.",
      "We negotiate the best terms available — drop-down, defense outside the limits, worldwide coverage — where the market and the account size allow.",
      "20+ years, all 50 states, 15-minute quotes, 2-hour claims response.",
    ],
    faq: [
      {
        q: "How much umbrella coverage does a building material dealer need?",
        a: "It depends on the severity exposure, but for most dealers we recommend at least $5M, and frequently $10M or more for operations with delivery fleets, significant foot traffic, or high-risk product lines. The math: a single loaded-truck fatality or forklift-pedestrian death routinely settles in the multi-millions, and a $1M primary GL will be exhausted quickly. We size the umbrella to the realistic worst case, not to a round number.",
      },
      {
        q: "What's the difference between an umbrella and an excess liability policy?",
        a: "An umbrella provides excess limits and may also broaden coverage (drop-down over gaps in the underlying, or cover a loss outside the underlying scope). An excess liability policy provides additional limits only, on a 'follow-form' basis that tracks the underlying coverage exactly. Umbrellas are more flexible and usually preferred; excess is used for higher layers where follow-form is sufficient. We use both as the layering requires.",
      },
      {
        q: "Will my umbrella respond if my primary GL doesn't cover a claim?",
        a: "Sometimes — if the umbrella includes drop-down coverage and the loss is of a type the umbrella itself covers. This is one of the most valuable features of a true umbrella (as opposed to a follow-form excess policy) and it varies significantly by carrier and form. We negotiate the broadest drop-down terms the market will offer on your account.",
      },
    ],
    keyCoverages: [
      "Excess limits over GL",
      "Excess limits over commercial auto",
      "Excess employers' liability",
      "Drop-down coverage",
      "Worldwide coverage (often available)",
      "Defense in excess of limits",
    ],
  },
};
