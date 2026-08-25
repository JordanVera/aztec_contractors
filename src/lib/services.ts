export type ServiceProcessStep = {
  title: string;
  body: string;
};

export type ServiceCategoryId = 'roofing' | 'remodeling';

export type Service = {
  slug: string;
  name: string;
  formValue: string;
  category: ServiceCategoryId;
  eyebrow: string;
  description: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  bullets: string[];
  process: ServiceProcessStep[];
};

export const serviceCategories: {
  id: ServiceCategoryId;
  name: string;
  description: string;
}[] = [
  {
    id: 'roofing',
    name: 'Roofing Services',
    description:
      'Storm damage, leaks, inspections, and full replacements — documented, insurance-ready, and built for Houston weather.',
  },
  {
    id: 'remodeling',
    name: 'Remodeling Services',
    description:
      'Additions and interior remodels that grow with your family, from a garage or kitchen bump-out to a new bedroom.',
  },
];

export const services: Service[] = [
  {
    slug: 'roof-repair',
    name: 'Roof Repair',
    formValue: 'Roof Repair',
    category: 'roofing',
    eyebrow: 'Repair & Patch',
    description:
      'Leaks, missing shingles, hail bruises, and soft spots — we find the real source and fix it so you are not paying for a full replacement unless you need one.',
    longDescription:
      'Most Houston roof leaks do not start where the water shows up on the ceiling. Flashing, valleys, pipe boots, and hail-bruised shingles fail first in this climate. Aztec traces the source from the attic out, replaces damaged decking when needed, and repairs with materials that match your existing roof.',
    image: '/images/services/roof-repair.jpg',
    imageAlt:
      'Roofer repairing storm-damaged asphalt shingles on a Houston residential roof',
    bullets: [
      'Storm & hail damage repair',
      'Leak detection & waterproofing',
      'Flashing, ridge & vent repair',
      'Soft-spot & decking replacement',
      'Guaranteed fix — no surprise callbacks',
    ],
    process: [
      {
        title: 'Find the real leak',
        body: 'We inspect from the attic out, not just from the ceiling stain, so the repair actually stops the water.',
      },
      {
        title: 'Match materials',
        body: 'Shingles, flashing, and underlayment are matched to your roof so the repair blends in and weathers correctly.',
      },
      {
        title: 'Stand behind it',
        body: "If the same issue comes back, Reynaldo's team comes back. That is in the reviews for a reason.",
      },
    ],
  },
  {
    slug: 'new-roof-installation',
    name: 'New Roof Installation',
    formValue: 'New Roof Installation',
    category: 'roofing',
    eyebrow: 'New Construction',
    description:
      'First-time roofs on new homes, additions, and garages — specified for Houston heat, humidity, and Gulf storms, installed clean and guaranteed.',
    longDescription:
      'A new roof on a new structure is a different job than a tear-off. The deck is clean, the ventilation has to be designed, and the system has to tie into new walls and flashing. Aztec installs architectural shingles, metal, and low-slope systems on new Houston homes, room additions, and garage builds — with insurance-approved materials and a workmanship warranty we actually honor.',
    image: '/images/services/new-roof-installation.jpg',
    imageAlt:
      'Roofing crew installing a new architectural shingle roof on a Houston home',
    bullets: [
      'New-construction & addition roofs',
      'Architectural shingles, metal & low-slope',
      'Proper ventilation & flashing details',
      'Manufacturer & workmanship warranty',
      'Daily cleanup on occupied streets',
    ],
    process: [
      {
        title: 'Specify the system',
        body: "We match shingles, underlayment, and ventilation to the structure and to Houston's heat and storm load.",
      },
      {
        title: 'Install to the deck',
        body: 'Underlayment, ice-and-water where it matters, flashing, and the field are installed in sequence — not rushed around a weekend.',
      },
      {
        title: 'Hand it off clean',
        body: 'Ridge, vents, and punch-list are finished so the new roof is weathertight the day we leave.',
      },
    ],
  },
  {
    slug: 'roof-replacement',
    name: 'Roof Replacement',
    formValue: 'Roof Replacement',
    category: 'roofing',
    eyebrow: 'Full Tear-Off',
    description:
      'When the roof is at the end of its life or storm-damaged beyond repair, we tear off, inspect the deck, and install a complete new system — fast, clean, and documented.',
    longDescription:
      'Houston roofs take hail, wind, and brutal UV. When repairs start stacking up, replacement is the honest call. Aztec tears off to the deck, photographs what we find, replaces bad sheathing, and installs a full system with underlayment, flashing, and ventilation done right — not a layover that traps moisture. Insurance claims are documented with imaging your adjuster can actually use.',
    image: '/images/services/roof-replacement.jpg',
    imageAlt:
      'Aztec roofing crew installing a replacement shingle roof on a Houston home',
    bullets: [
      'Full tear-off — no leftover layers',
      'Decking inspection & replacement',
      'Insurance-ready photo documentation',
      'Architectural shingles, metal & flat systems',
      'Manufacturer & workmanship warranty',
    ],
    process: [
      {
        title: 'Inspect and document',
        body: 'Drone and satellite imaging plus a hands-on inspection map damage and remaining life before we bid a replacement.',
      },
      {
        title: 'Tear off and protect',
        body: 'The old roof comes off, the deck is inspected, and the house is dried-in the same day whenever weather allows.',
      },
      {
        title: 'Install the new system',
        body: 'Underlayment, flashing, field, and ridge go on as a complete system. The yard is cleaned before we leave each day.',
      },
    ],
  },
  {
    slug: 'roof-inspections',
    name: 'Roof Inspections',
    formValue: 'Roof Inspection',
    category: 'roofing',
    eyebrow: 'Inspect & Document',
    description:
      'Pre-purchase, storm, and maintenance inspections with drone and satellite imaging — so you know what the roof actually needs before you spend.',
    longDescription:
      'A ladder-and-guess inspection is how Houston homeowners get surprised. Aztec inspects from the attic, the eaves, and the air. We document hail hits, worn sealant, soft decking, and ventilation problems with photos and imaging you can send to an adjuster, a buyer, or just keep for your records. If the roof only needs a repair, we will say so.',
    image: '/images/services/roof-inspections.jpg',
    imageAlt:
      'Roof inspector examining shingles and flashing on a Houston residential roof',
    bullets: [
      'Storm, hail & wind inspections',
      'Pre-purchase & listing inspections',
      'Drone & satellite imaging reports',
      'Attic, flashing & ventilation check',
      'Honest repair-vs-replace recommendation',
    ],
    process: [
      {
        title: 'Look from every angle',
        body: 'Attic, eaves, field, and aerial imaging — not just what you can see from the driveway.',
      },
      {
        title: 'Show you the evidence',
        body: 'You get photos and a plain-English report: what is damaged, what is wear, and what can wait.',
      },
      {
        title: "Recommend, don't upsell",
        body: 'If a repair will do, we price a repair. If the roof is done, we say that too — and help with the insurance file if you have one.',
      },
    ],
  },
  {
    slug: 'garage-addition',
    name: 'Garage Addition',
    formValue: 'Garage Addition',
    category: 'remodeling',
    eyebrow: 'Add a Garage',
    description:
      'Attached or detached garage additions from foundation to finish — structure, roof, electrical, and a door that actually fits Houston living.',
    longDescription:
      'Houston heat, flooding, and clay soil are hard on a garage that was an afterthought. Aztec designs and builds attached and detached garage additions with a foundation, roof, and drainage plan that belongs on this lot. We pull permits, match the brick or siding to the house, and finish the interior if you want storage, a workshop, or a future ADU above.',
    image: '/images/services/garage-addition.jpg',
    imageAlt:
      'Carpenters framing a new garage addition onto a Houston brick home',
    bullets: [
      'Attached & detached garage builds',
      'Foundation, roof & drainage designed for Houston',
      'Electrical, storage & workshop layouts',
      'Exterior match to the existing home',
      'Full permit & inspection management',
    ],
    process: [
      {
        title: 'Fit it to the lot',
        body: 'Setbacks, driveway, and drainage come first so the garage does not fight the house or the floodplain.',
      },
      {
        title: 'Permit and frame',
        body: 'City permits, slab or pier foundation, and framing that can take a Houston roof load.',
      },
      {
        title: 'Finish and match',
        body: 'Roof, brick or siding, door, and punch-list so it looks like it was always part of the house.',
      },
    ],
  },
  {
    slug: 'kitchen-addition',
    name: 'Kitchen Addition',
    formValue: 'Kitchen Addition',
    category: 'remodeling',
    eyebrow: 'Expand the Kitchen',
    description:
      'Need more than a cabinet refresh? We bump out the footprint, open the plan, and build a kitchen that can actually hold the family.',
    longDescription:
      'A kitchen remodel stays inside the walls. A kitchen addition grows them. Aztec frames the bump-out, ties the new roof into the old, relocates plumbing and electrical, and finishes cabinets, counters, and lighting as one project. You get more space for cooking, gathering, and a window that was not there before — without hiring five different companies.',
    image: '/images/services/kitchen-addition.jpg',
    imageAlt:
      'Expanded kitchen addition with warm wood cabinets and large windows in a Houston home',
    bullets: [
      'Structural bump-outs & open-concept layouts',
      'Roof tie-in, plumbing & electrical relocation',
      'Cabinets, counters, tile & lighting',
      'Dust control while you keep living in the house',
      'Permits and inspections included',
    ],
    process: [
      {
        title: 'Plan how you cook',
        body: 'We walk the existing kitchen, talk through how the family actually uses it, and price a bump-out that is worth the square footage.',
      },
      {
        title: 'Open the structure',
        body: 'Foundation, framing, and roof tie-in are sequenced so the addition is weathertight before cabinets ever show up.',
      },
      {
        title: 'Finish the room',
        body: 'Cabinets, counters, tile, and punch-list are completed as one walkthrough — not a trail of leftover trades.',
      },
    ],
  },
  {
    slug: 'room-addition',
    name: 'New Room Addition',
    formValue: 'New Room Addition',
    category: 'remodeling',
    eyebrow: 'Add Living Space',
    description:
      'A new living room, office, playroom, or flex space built onto the house you already have — from foundation through finish.',
    longDescription:
      'Houston families outgrow floor plans long before they want to move. Aztec builds new room additions that match the existing home: foundation, framing, roof, windows, and interior finish under one contract. Whether you need a home office, a den, or a flex room that can become something else later, we design to the lot and to the way you actually live.',
    image: '/images/services/room-addition.jpg',
    imageAlt:
      'Carpenters framing a new room addition onto the side of a Houston house',
    bullets: [
      'Living, office, playroom & flex-space additions',
      'Foundation, framing & roof matching the house',
      'Windows, insulation & Houston climate details',
      'Interior finish: drywall, flooring, paint, trim',
      'Structural drawings, permits & inspections',
    ],
    process: [
      {
        title: 'Design the addition',
        body: 'We look at setbacks, roof lines, and how the new room will sit against the house before we price lumber.',
      },
      {
        title: 'Engineer and permit',
        body: "Structural drawings and city permits are Aztec's job. You are not chasing paperwork.",
      },
      {
        title: 'Build and blend',
        body: 'The addition is dried-in, finished, and detailed so it does not look bolted on.',
      },
    ],
  },
  {
    slug: 'bedroom-addition',
    name: 'Bedroom Addition',
    formValue: 'Bedroom Addition',
    category: 'remodeling',
    eyebrow: 'Add a Bedroom',
    description:
      'A real bedroom — closet, egress, quiet, and optionally a bath — added onto the home instead of converting a dining room.',
    longDescription:
      'A bedroom addition is not a partition in the living room. It needs egress, a closet, sound, and often a bath. Aztec builds bedroom additions that meet code and feel like they belong: foundation through paint, with HVAC and electrical sized for Houston summers. Growing family, aging parent, or a guest room that is actually private — we build the room, not a workaround.',
    image: '/images/services/bedroom-addition.jpg',
    imageAlt:
      'Newly finished bedroom addition with warm wood floors and large window in a Houston home',
    bullets: [
      'Code-compliant egress, closet & HVAC',
      'Optional en-suite bathroom',
      'Sound, insulation & privacy detailing',
      'Roof, windows & exterior match',
      'Permits, inspections & punch-list included',
    ],
    process: [
      {
        title: 'Plan the suite',
        body: 'Sleeping space, closet, and bath (if you want one) are laid out so the addition is a bedroom, not leftover square footage.',
      },
      {
        title: 'Build it quiet',
        body: 'Framing, insulation, and HVAC are specified so the new room does not hear the rest of the house — or Houston heat.',
      },
      {
        title: 'Finish for living',
        body: 'Floors, paint, trim, and fixtures are punched out so you can move a bed in the day we wrap.',
      },
    ],
  },
  {
    slug: 'remodeling',
    name: 'Remodeling',
    formValue: 'Remodeling',
    category: 'remodeling',
    eyebrow: 'Kitchen · Bath · Interior',
    description:
      'Full-service interior remodeling inside the walls you already have — kitchens, bathrooms, flooring, drywall, and stucco, done with one crew.',
    longDescription:
      'When you do not need more square footage, you need the square footage you have to work harder. Aztec remodels kitchens, bathrooms, living spaces, flooring, drywall, and stucco as a general contractor — not a weekend flip crew. Permits, dust control, and a finish that holds up in Houston humidity are part of the job.',
    image: '/images/services/remodeling.jpg',
    imageAlt:
      'Finished interior remodel with warm wood cabinets in a Houston home',
    bullets: [
      'Kitchen & bathroom remodels',
      'Flooring, drywall & stucco',
      'Open-concept layouts inside existing walls',
      'Dust control & daily cleanup',
      'Full permit & inspection support',
    ],
    process: [
      {
        title: 'Scope the house',
        body: 'We walk every room you want touched, talk budget, and write a scope that will not grow in secret on week three.',
      },
      {
        title: 'Protect and permit',
        body: 'Dust barriers, a livable house, and city permits are in the plan — not afterthoughts.',
      },
      {
        title: 'Finish like it is ours',
        body: 'Cabinets, tile, paint, and trim get a real walkthrough. We do not call it done from the driveway.',
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceCategory(id: ServiceCategoryId) {
  return serviceCategories.find((category) => category.id === id);
}

export function getServicesByCategory(category: ServiceCategoryId) {
  return services.filter((service) => service.category === category);
}

export function getRelatedServices(slug: string, limit = 3) {
  const current = getService(slug);
  if (!current) return services.slice(0, limit);

  const sameCategory = services.filter(
    (service) => service.category === current.category && service.slug !== slug,
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const others = services.filter(
    (service) => service.category !== current.category && service.slug !== slug,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export type Review = {
  name: string;
  text: string;
  rating: number;
  source: 'Google';
};

export const reviews: Review[] = [
  {
    name: 'Parsa Tork',
    text: 'Aztec Contractors Houston did an amazing job! From start to finish, their team was professional, efficient, and super easy to work with. They used advanced imaging for accurate estimates and got everything done quickly without cutting corners. The quality of work speaks for itself! Highly recommend.',
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Wendell Johnson',
    text: 'They were very professional. Their cleanup was astounding and truly great. A truly great roofing company.',
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Ummehani Ismail',
    text: 'Stucco and drywall repair. Absolutely fantastic! Very professional and the quote was reasonable too. They were very knowledgeable and did a great job with everything.',
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Chris Stephenson',
    text: 'As a home inspector, I know what to look for and these guys did an amazing job. The process was explained as far as my insurance goes and the work was done as advertised. Highly recommend.',
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Andre Breton',
    text: 'I needed extensive roof repairs on all of our investment properties. Aztec provided a quick-turnaround estimate with detailed information and pictures to justify the work needed. Rey was very helpful throughout the projects. I highly recommend his services.',
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Irfan Khan',
    text: "We had a great experience with Aztec Contractors. They don't just provide a competitive quote, but follow up with good work and guarantee their service. Reynaldo also fixed a follow-up issue at no extra charge — that says a lot about how they honor their guarantee.",
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Latricia Battles',
    text: "Aztec Contractor's did a great job! They showed up on time and were careful and professional. I was able to pick out the color of the shingles to match my house. They kept in contact with me through the entire process. I love my new roof.",
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Michael Sigman',
    text: 'Strong recommendation for Reynaldo and his team. Highly competent, prompt, reliable, reasonable and friendly service. We have used them for roof maintenance, repairs in the attic, interior painting and general home repair. They go above and beyond.',
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Snorch 2',
    text: 'Did a great job patching our roof. Very quick turnaround. Fair price and very good communication. Would definitely use again.',
    rating: 5,
    source: 'Google',
  },
];
