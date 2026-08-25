export const site = {
  name: 'Aztec Contractors',
  shortName: 'Aztec',
  tagline: 'Transforming Houston Homes, One Project at a Time',
  description:
    "Aztec Contractors is Houston's trusted family-owned general contractor. With 18+ years of experience, A+ BBB rating, and 5,000+ completed projects, we specialize in roofing, remodeling, building additions, and insurance claim work.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aztec-contractors.com',
  phone: '(832) 703-9638',
  phoneHref: 'tel:+18327039638',
  email:
    process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL ??
    'Azteccontractorshouston@gmail.com',
  address: {
    street: '1807 Hickory St.',
    city: 'Houston',
    state: 'TX',
    zip: '77007',
  },
  city: 'Houston',
  state: 'TX',
  region: 'Houston, TX',
  founded: 2005,
  stats: {
    projects: '5,000+',
    years: '18+',
    bbb: 'A+',
    reviews: 'Google Rated',
  },
  badges: [
    'A+ BBB Rating',
    'Licensed & Insured',
    'Insurance Claim Specialists',
    'Free Estimates',
  ],
  coreValues: [
    {
      number: '01',
      name: 'Integrity',
      description:
        'Honesty and transparency guide every decision. We build trust by standing behind our work and our word.',
    },
    {
      number: '02',
      name: 'Excellence',
      description:
        "We don't cut corners. Best materials, cutting-edge technology, and the highest industry standards.",
    },
    {
      number: '03',
      name: 'Community',
      description:
        'Aztec is committed to giving back to Houston through job creation, mentorship, and outreach.',
    },
    {
      number: '04',
      name: 'Growth',
      description:
        'We challenge ourselves daily — investing in education, training, and innovation to stay ahead.',
    },
    {
      number: '05',
      name: 'Reliability',
      description:
        "When we say we'll do something, we mean it. Consistent, dependable, and true to our commitments.",
    },
  ],
  hours: {
    weekdays: 'Monday – Friday: 8:00 AM – 6:00 PM',
    saturday: 'Saturday: By Appointment',
    schema: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
  },
  google: {
    listingName: "Aztec Contractor's Roofing & Construction",
    reviewsUrl:
      'https://www.google.com/maps/search/?api=1&query=Aztec+Contractor%27s+Roofing+%26+Construction+Houston+TX',
  },
} as const;

export const formsubmitEndpoint = `https://formsubmit.co/${site.email}`;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Free Estimate' },
] as const;
