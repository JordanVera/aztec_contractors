export type Service = {
  slug: string;
  name: string;
  formValue: string;
  eyebrow: string;
  description: string;
  icon: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "roof-replacement",
    name: "New Roof Installation",
    formValue: "New Roof Installation",
    eyebrow: "Full Replacement",
    description:
      "Whether your roof is at the end of its life or severely damaged, Aztec's crews install quality shingles, flat roofs, and specialty systems — fast, clean, and guaranteed.",
    icon: "Home",
    bullets: [
      "Asphalt shingles, metal & flat roofing",
      "Insurance-approved materials",
      "Crew cleanup included every day",
      "Manufacturer & workmanship warranty",
      "Advanced imaging for accurate scope",
    ],
  },
  {
    slug: "roof-repair",
    name: "Roof Repair",
    formValue: "Roof Repair",
    eyebrow: "Repair & Patch",
    description:
      "Leaks, soft spots, missing shingles, storm damage — we diagnose and fix it right the first time. Reynaldo's team locates the true source, not just the symptom.",
    icon: "Hammer",
    bullets: [
      "Storm & hail damage repair",
      "Leak detection & waterproofing",
      "Flashing, ridge & vent repair",
      "Soft-spot & decking replacement",
      "Guaranteed fix — no surprise callbacks",
    ],
  },
  {
    slug: "insurance-claims",
    name: "Insurance Claim Assistance",
    formValue: "Insurance Claim / Storm Damage",
    eyebrow: "Insurance Specialists",
    description:
      "We specialize in insurance restoration. Our team documents damage with advanced imaging, works directly with your adjuster, and maximizes your claim so you get what you deserve.",
    icon: "FileCheck",
    bullets: [
      "Storm & hail claim documentation",
      "Advanced imaging reports for adjusters",
      "Direct adjuster coordination",
      "Supplemental claim support",
      "Over 5,000 insurance projects completed",
    ],
  },
  {
    slug: "remodeling",
    name: "Interior Remodeling",
    formValue: "Remodeling (Kitchen / Bathroom / Interior)",
    eyebrow: "Kitchen · Bath · Living",
    description:
      "Transform your living spaces with Aztec's full-service interior remodeling. Kitchens, bathrooms, flooring, drywall, stucco — done with precision and care.",
    icon: "PaintBucket",
    bullets: [
      "Kitchen remodels & additions",
      "Bathroom renovations",
      "Drywall & stucco repair",
      "Flooring installation",
      "Full permit & inspection support",
    ],
  },
  {
    slug: "building-additions",
    name: "Home Additions & ADUs",
    formValue: "Building Addition / ADU",
    eyebrow: "Expand Your Space",
    description:
      "Need more room? Aztec designs and builds seamless home additions, accessory dwelling units, detached garages, and common area expansions from foundation to finish.",
    icon: "LayoutTemplate",
    bullets: [
      "Room & story additions",
      "Accessory Dwelling Units (ADUs)",
      "Detached garage construction",
      "Covered patio & carport additions",
      "Full structural & permit management",
    ],
  },
  {
    slug: "outdoor-construction",
    name: "Outdoor & Exterior Work",
    formValue: "Outdoor / Exterior / Deck / Landscaping",
    eyebrow: "Curb Appeal",
    description:
      "Decks, porches, stucco exteriors, fencing, and landscaping construction — Aztec handles everything outside the four walls to boost your home's value and curb appeal.",
    icon: "Trees",
    bullets: [
      "Deck & porch construction",
      "Exterior stucco & siding",
      "Landscaping & hardscape builds",
      "Fencing & gates",
      "Gutters & drainage",
    ],
  },
];

export const reviews = [
  {
    name: "Parsa Tork",
    text: "Aztec Contractors Houston did an amazing job! From start to finish, their team was professional, efficient, and super easy to work with. They used advanced imaging for accurate estimates and got everything done quickly without cutting corners. The quality of work speaks for itself! Highly recommend.",
    rating: 5,
  },
  {
    name: "Wendell Johnson",
    text: "They were very professional. Their cleanup was astounding and truly great. A truly great roofing company.",
    rating: 5,
  },
  {
    name: "Ummehani Ismail",
    text: "Stucco and drywall repair. Absolutely fantastic! Very professional and the quote was reasonable too. They were very knowledgeable and did a great job with everything.",
    rating: 5,
  },
  {
    name: "Chris Stephenson",
    text: "As a home inspector, I know what to look for and these guys did an amazing job. The process was explained as far as my insurance goes and the work was done as advertised. Highly recommend.",
    rating: 5,
  },
  {
    name: "Andre Breton",
    text: "I needed extensive roof repairs on all of our investment properties. Aztec provided a quick-turnaround estimate with detailed information and pictures to justify the work needed. Rey was very helpful throughout the projects. I highly recommend his services.",
    rating: 5,
  },
  {
    name: "Irfan Khan",
    text: "We had a great experience with Aztec Contractors. They don't just provide a competitive quote, but follow up with good work and guarantee their service. Reynaldo also fixed a follow-up issue at no extra charge — that says a lot about how they honor their guarantee.",
    rating: 5,
  },
];
