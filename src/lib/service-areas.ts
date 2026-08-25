export type ServiceAreaFaq = {
  question: string;
  answer: string;
};

export type ServiceAreaCondition = {
  title: string;
  body: string;
};

export type ServiceArea = {
  slug: string;
  name: string;
  nameWithState: string;
  county: string;
  intro: string;
  hubSummary: string;
  heroImage: string;
  heroImageAlt: string;
  conditions: ServiceAreaCondition[];
  neighborhoods: string[];
  zips: string[];
  faqs: ServiceAreaFaq[];
};

export function serviceAreaHref(slug: string) {
  return `/roofing-contractor-in-${slug}`;
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'katy-tx',
    name: 'Katy',
    nameWithState: 'Katy, TX',
    county: 'Harris, Fort Bend & Waller Counties',
    intro:
      'Katy grew fast in the late 1990s and 2000s — and the roofs that went on those homes are now hitting the end of their service life at the same time.',
    hubSummary: 'Whole subdivisions hitting the 20-year mark at the same time.',
    heroImage: '/images/gallery/024.jpg',
    heroImageAlt:
      'Completed Aztec Contractors roofing project serving Katy, Texas homeowners',
    conditions: [
      {
        title: 'Roofs ageing together',
        body: 'Whole subdivisions in Katy were built within a few years of each other, so entire streets reach the 20-year mark at once. If your neighbours are replacing roofs, yours is likely the same age and the same original builder-grade shingle.',
      },
      {
        title: 'Storm and flood history',
        body: 'Katy has taken direct hits from Harvey and repeated spring hail. Wind-lifted shingles often survive a storm visually but lose their seal, which shows up as leaks months later rather than immediately.',
      },
      {
        title: 'Builder-grade three-tab',
        body: "Much of Katy's 1995–2010 housing stock went up with basic three-tab shingles rated for around 20 years. Architectural shingles now cost only slightly more and last considerably longer in Gulf Coast heat.",
      },
    ],
    neighborhoods: [
      'Cinco Ranch',
      'Cross Creek Ranch',
      'Grand Lakes',
      'Firethorne',
      'Seven Meadows',
      'Falcon Landing',
      'Katy Old Towne',
      'Nottingham Country',
      'Pine Forest',
      'Green Trails',
    ],
    zips: ['77450', '77449', '77493', '77494'],
    faqs: [
      {
        question: 'How old is too old for a Katy roof?',
        answer:
          'Most builder-grade shingles installed in Katy through the 1990s and 2000s were rated 20–25 years, and Gulf Coast heat and humidity tend to shorten that. If your home was built before 2005 and still has its original roof, it is worth a free inspection.',
      },
      {
        question:
          'My neighbours all got new roofs after the last hailstorm. Should I file too?',
        answer:
          'Possibly. Hail damage is often uneven across a street, but if several homes on your block were approved, there is a good chance yours sustained damage too. We inspect free and tell you honestly whether a claim is worth filing.',
      },
    ],
  },
  {
    slug: 'cypress-tx',
    name: 'Cypress',
    nameWithState: 'Cypress, TX',
    county: 'Northwest Harris County',
    intro:
      'Northwest Harris County sits in one of the most hail-prone corridors in the Houston metro, and Cypress takes the brunt of it most springs.',
    hubSummary: 'One of the most hail-prone corridors in the metro.',
    heroImage: '/images/gallery/024.jpg',
    heroImageAlt:
      'Aztec roofing crew working on a residential roof in the Cypress, Texas area',
    conditions: [
      {
        title: 'Spring hail',
        body: "Cypress sees more hail activity than most of the metro. Hail bruises a shingle by knocking off the granule layer — the damage is genuinely hard to see from the ground, but it exposes the asphalt underneath and shortens the roof's life dramatically.",
      },
      {
        title: 'A wide mix of roof ages',
        body: 'Cypress spans everything from 1990s Coles Crossing homes to brand-new Bridgeland construction. A ten-year-old roof and a twenty-five-year-old roof need completely different conversations, and we will not sell you a replacement you do not need.',
      },
      {
        title: 'Open exposure to wind',
        body: 'Newer Cypress developments sit on formerly open prairie with limited mature tree cover, so roofs catch more direct wind. Ridge caps and rake edges are usually the first components to lift.',
      },
    ],
    neighborhoods: [
      'Bridgeland',
      'Towne Lake',
      'Fairfield',
      'Coles Crossing',
      'Blackhorse Ranch',
      'Longwood',
      'Cypress Creek Lakes',
      'Miramesa',
      'Stone Gate',
      'Lakes of Fairhaven',
    ],
    zips: ['77429', '77433', '77410'],
    faqs: [
      {
        question: 'How do I know if I have hail damage? My roof looks fine.',
        answer:
          'That is the normal experience — hail bruising is very difficult to identify from the ground. Book a free inspection and we will walk the roof and photograph anything we find.',
      },
      {
        question: 'Is there a deadline to file a hail claim in Texas?',
        answer:
          'Policies commonly set a filing window measured from the date of loss, and it varies by carrier. Check your policy, and if you think a recent storm caused damage, get it inspected sooner rather than later.',
      },
    ],
  },
  {
    slug: 'sugar-land-tx',
    name: 'Sugar Land',
    nameWithState: 'Sugar Land, TX',
    county: 'Fort Bend County',
    intro:
      "Sugar Land's established neighbourhoods come with mature tree canopy and strict HOA architectural standards — both of which change how a roof replacement has to be handled.",
    hubSummary: 'Mature tree canopy and strict HOA architectural approval.',
    heroImage: '/images/gallery/035.jpg',
    heroImageAlt:
      'Finished residential roof replacement by Aztec Contractors in Sugar Land, Texas',
    conditions: [
      {
        title: 'HOA architectural approval',
        body: 'Most Sugar Land communities restrict shingle colour and profile, and several require approval before work begins. We handle the submission and match to the approved palette rather than leaving you to sort it out afterwards.',
      },
      {
        title: 'Mature trees overhead',
        body: 'First Colony, Sugar Creek and Greatwood have decades-old canopy. Overhanging limbs abrade shingles, drop debris into valleys, and keep sections of roof permanently shaded — which is where algae streaking and moisture retention begin.',
      },
      {
        title: 'Higher-value homes, higher stakes',
        body: 'Larger Sugar Land roofs often combine multiple planes, dormers and complex valleys. Those transitions are where flashing fails, and where a cheap repair tends to come back within a year.',
      },
    ],
    neighborhoods: [
      'First Colony',
      'Telfair',
      'Riverstone',
      'New Territory',
      'Greatwood',
      'Sugar Creek',
      'Avalon',
      'Imperial',
      'Sugar Lakes',
      'Commonwealth',
    ],
    zips: ['77478', '77479', '77496', '77498'],
    faqs: [
      {
        question: 'Will you deal with my HOA?',
        answer:
          'Yes. We prepare the architectural submission and match your replacement to the approved colour and profile list for your community, so approval is handled before crews arrive.',
      },
      {
        question: 'What are those black streaks on my roof?',
        answer:
          'Almost always Gloeocapsa magma, an algae that thrives in Houston humidity and shows up first on shaded north-facing slopes. It is mostly cosmetic early on, but it holds moisture against the shingle. Algae-resistant shingles prevent it recurring.',
      },
    ],
  },
  {
    slug: 'spring-tx',
    name: 'Spring',
    nameWithState: 'Spring, TX',
    county: 'North Harris County',
    intro:
      "Spring's heavy pine canopy is the defining factor for roofs here — it causes problems no other part of the metro deals with to the same degree.",
    hubSummary: 'Pine needles in the valleys and limbs on the roof.',
    heroImage: '/images/gallery/010.jpg',
    heroImageAlt:
      'Residential roofing work by Aztec Contractors near Spring, Texas',
    conditions: [
      {
        title: 'Pine needles in the valleys',
        body: 'Needles collect in roof valleys and behind chimneys, hold water against the shingle, and block drainage. It is the single most common cause of premature roof failure we see in Spring, and it is entirely preventable with maintenance.',
      },
      {
        title: 'Falling limbs',
        body: 'Mature pines drop heavy limbs in storms. Impact damage is obvious when a limb punches through, but the far more common outcome is a cracked or displaced shingle that leaks quietly for months.',
      },
      {
        title: 'Constant shade and damp',
        body: 'Shaded roof sections never fully dry in Houston humidity. That accelerates algae growth and rots decking beneath the shingle, which is why we always check the deck rather than just the surface.',
      },
    ],
    neighborhoods: [
      'Gleannloch Farms',
      'Klein',
      'Augusta Pines',
      'Benders Landing',
      'Spring Trails',
      'Northampton',
      'Memorial Northwest',
      'Cypresswood',
      'Harmony',
      'Old Town Spring',
    ],
    zips: ['77373', '77379', '77386', '77388', '77389'],
    faqs: [
      {
        question: 'How often should I have my roof cleared in Spring?',
        answer:
          'With significant pine cover, twice a year is realistic — after autumn needle drop and again in spring. Clearing valleys and gutters costs a fraction of the water damage that blocked drainage eventually causes.',
      },
      {
        question: 'A limb hit my roof. Is that an insurance claim?',
        answer:
          'Usually yes — falling-limb impact is typically a covered peril. Photograph it, and get it inspected before it rains again. We can review the damage and handle the claim with your adjuster.',
      },
    ],
  },
  {
    slug: 'pearland-tx',
    name: 'Pearland',
    nameWithState: 'Pearland, TX',
    county: 'Brazoria & Harris Counties',
    intro:
      'Pearland sits closer to the coast than most of the metro, which means wind exposure is the first thing to think about — not the last.',
    hubSummary: 'Closest to the Gulf — wind exposure comes first.',
    heroImage: '/images/gallery/023.jpg',
    heroImageAlt:
      'Aztec Contractors roof replacement on a Pearland-area Houston home',
    conditions: [
      {
        title: 'Coastal wind exposure',
        body: 'Being nearer the Gulf, Pearland roofs see higher sustained wind loads in tropical systems. Wind rating and fastening pattern matter far more here than they do inland, and correct nailing is the difference between a roof that stays on and one that does not.',
      },
      {
        title: 'Hurricane season, every year',
        body: 'From June to November, a roof that was merely adequate becomes a liability. Ridge caps, rake edges and flashing are where wind starts lifting a roof, and they are exactly where a proper inspection focuses.',
      },
      {
        title: 'Fast newer growth',
        body: 'Shadow Creek Ranch and the newer Pearland developments went up quickly. Fast build schedules can mean rushed roof installs, and installation defects show up as leaks around penetrations rather than as worn shingles.',
      },
    ],
    neighborhoods: [
      'Shadow Creek Ranch',
      'Silverlake',
      'Southdown',
      'Riverstone Ranch',
      'Pearland Heights',
      'West Oaks',
      'Country Place',
      'Green Tee Terrace',
      'Massey Oaks',
      'Old Townsite',
    ],
    zips: ['77581', '77584', '77588'],
    faqs: [
      {
        question: 'Does a wind-rated roof lower my insurance?',
        answer:
          'It can. Many Texas carriers offer premium discounts for impact-resistant or higher wind-rated roofing systems. Ask your agent what your policy recognises before choosing materials — the discount sometimes offsets much of the upgrade.',
      },
      {
        question:
          'My roof lost shingles in a storm but there is no leak. Do I need to act?',
        answer:
          'Yes. Missing shingles expose underlayment that was never meant to be the outer layer. It may not leak in the next light rain, but it will in the next real storm, and by then the deck underneath may be compromised too.',
      },
    ],
  },
  {
    slug: 'the-woodlands-tx',
    name: 'The Woodlands',
    nameWithState: 'The Woodlands, TX',
    county: 'Montgomery County',
    intro:
      'The Woodlands was built into the forest rather than clearing it — which is exactly what makes roofs here wear differently from anywhere else in the metro.',
    hubSummary: 'Built into the forest, so roofs never fully dry.',
    heroImage: '/images/gallery/055.jpg',
    heroImageAlt:
      'Shaded residential roof typical of The Woodlands, photographed on an Aztec project',
    conditions: [
      {
        title: 'Canopy over almost every roof',
        body: 'The tree cover that defines The Woodlands also keeps roofs permanently shaded and damp. Shaded slopes never dry fully in Montgomery County humidity, which is where algae streaking starts and where decking quietly rots beneath intact-looking shingles.',
      },
      {
        title: 'Village age varies enormously',
        body: "Grogan's Mill homes date to the 1970s while Creekside Park is barely a decade old. A roof conversation in one village bears no resemblance to the next, and we inspect before recommending rather than assuming.",
      },
      {
        title: 'Development standards are strict',
        body: 'The Woodlands enforces residential design review on exterior changes, including roofing. Colour and profile need approval, and doing it in the wrong order means redoing the paperwork after the fact.',
      },
    ],
    neighborhoods: [
      "Grogan's Mill",
      'Panther Creek',
      "Cochran's Crossing",
      'Indian Springs',
      'Alden Bridge',
      'College Park',
      'Sterling Ridge',
      'Creekside Park',
      'Carlton Woods',
      'Windvale',
    ],
    zips: ['77380', '77381', '77382', '77384', '77385', '77389'],
    faqs: [
      {
        question:
          'Do I need approval before replacing my roof in The Woodlands?',
        answer:
          'Generally yes — exterior changes fall under the residential development standards for your village. We prepare the submission and match to approved colours so the process runs before crews arrive rather than after.',
      },
      {
        question:
          'Why does my north-facing slope look so much worse than the rest?',
        answer:
          'Because it gets the least sun and stays damp longest under the canopy. That slope will nearly always show algae and wear first, and it is a good early indicator of how the whole roof is ageing.',
      },
    ],
  },
  {
    slug: 'missouri-city-tx',
    name: 'Missouri City',
    nameWithState: 'Missouri City, TX',
    county: 'Fort Bend County',
    intro:
      'Missouri City spans nearly fifty years of housing stock, from 1970s Quail Valley through to new Sienna construction — and those two extremes need completely different roofing conversations.',
    hubSummary: 'Fifty years of housing stock, two very different jobs.',
    heroImage: '/images/gallery/060.jpg',
    heroImageAlt:
      'Aztec Contractors roofing project serving Missouri City, Texas homes',
    conditions: [
      {
        title: 'Two very different housing generations',
        body: 'Quail Valley and Hunters Glen homes are decades old and many are on their second or third roof, where decking condition matters as much as shingles. Sienna homes are new enough that any problem is usually an installation defect rather than wear.',
      },
      {
        title: 'Fort Bend clay soils',
        body: 'The expansive clay under much of Fort Bend County swells and shrinks with the seasons. That movement transfers through the structure, and on older Missouri City homes it shows up as separated flashing and cracked mortar at chimney lines.',
      },
      {
        title: 'Open exposure on newer builds',
        body: 'The newer master-planned sections have limited mature canopy, so roofs take direct wind and sun. Ridge caps lift first, and south-facing slopes weather noticeably faster than the rest of the roof.',
      },
    ],
    neighborhoods: [
      'Sienna',
      'Quail Valley',
      'Lake Olympia',
      'Vicksburg',
      'Colony Lakes',
      'Hunters Glen',
      'Riverstone',
      'Bridgewater',
      'Park Lakes',
      'Thunderbird',
    ],
    zips: ['77459', '77489', '77545'],
    faqs: [
      {
        question: 'My house is from the 1970s. Is the decking still good?',
        answer:
          'It might be, but it has to be checked. On roofs that old we lift and inspect rather than shingling over an unknown. Rotten decking under a new roof is the most expensive mistake a homeowner can pay for twice.',
      },
      {
        question:
          'My Sienna home is only a few years old and already leaking. How?',
        answer:
          "Almost always an installation detail rather than material failure — flashing at a penetration, an improperly sealed valley, or nailing outside the manufacturer's pattern. It is usually a repair, not a replacement, and it may still be under builder warranty.",
      },
    ],
  },
  {
    slug: 'humble-tx',
    name: 'Humble',
    nameWithState: 'Humble, TX',
    county: 'North Harris County',
    intro:
      'Sitting beside Lake Houston, Humble and Atascocita carry more moisture load than most of the metro — and the flooding history here has left a lot of roofs that were repaired in a hurry.',
    hubSummary: 'Lake Houston humidity and rushed post-flood repairs.',
    heroImage: '/images/gallery/024.jpg',
    heroImageAlt:
      'Aztec roofing work on a home in the Humble and Atascocita area',
    conditions: [
      {
        title: 'Moisture from every direction',
        body: 'Proximity to Lake Houston keeps humidity high year-round. Damp roofs grow algae faster, hold water in valleys longer, and give minor flashing gaps far more opportunity to become active leaks.',
      },
      {
        title: 'Repairs made under pressure',
        body: 'After the major flood events, an enormous amount of emergency roof work was done in this area very quickly and not all of it well. We regularly find patch jobs from that period that were never meant to be permanent.',
      },
      {
        title: 'Pine and hardwood debris',
        body: 'The wooded stretches around Kingwood and Atascocita drop constant debris. Needles and leaves pack into valleys and behind chimneys, hold water against the shingle, and block the drainage path the roof depends on.',
      },
    ],
    neighborhoods: [
      'Atascocita',
      'Eagle Springs',
      'Fall Creek',
      'Summerwood',
      'Walden on Lake Houston',
      'Kings Manor',
      'Balmoral',
      'Lakeshore',
      'Northshire',
      'Old Humble',
    ],
    zips: ['77338', '77339', '77345', '77346', '77396'],
    faqs: [
      {
        question:
          'My roof was repaired after the flooding. Should I have it checked?',
        answer:
          'Yes, particularly if the work was done during the rush immediately afterwards. A lot of that repair work was genuinely emergency triage. An inspection tells you whether it was a permanent fix or a temporary one still holding on.',
      },
      {
        question: "How much does humidity actually shorten a roof's life?",
        answer:
          'It is less about the humidity itself and more about drying time. A roof that stays damp supports algae growth and keeps moisture against the decking, so problems that would be slow elsewhere develop faster here.',
      },
    ],
  },
  {
    slug: 'richmond-tx',
    name: 'Richmond',
    nameWithState: 'Richmond, TX',
    county: 'Fort Bend County',
    intro:
      'Richmond has some of the newest housing stock in the Houston area — which changes the roofing question entirely. Here it is rarely about age, and almost always about how well the roof went on in the first place.',
    hubSummary: 'The newest homes — installation quality, not age.',
    heroImage: '/images/gallery/024.jpg',
    heroImageAlt:
      'Newer-home roofing installation by Aztec Contractors in Richmond, Texas',
    conditions: [
      {
        title: 'Young roofs, installation-era problems',
        body: 'Aliana, Harvest Green and Long Meadow Farms went up fast during a building boom. When a roof this new has a problem it is nearly always workmanship — nailing outside the pattern, poorly sealed valleys, or flashing detail at penetrations.',
      },
      {
        title: 'Builder warranties still in play',
        body: 'Many Richmond roofs remain inside their builder or manufacturer warranty period. We will tell you when that is the case, because the right first call may be to the builder rather than to us.',
      },
      {
        title: 'Brazos River humidity and clay',
        body: 'Richmond sits along the Brazos, on the same expansive Fort Bend clay. Seasonal ground movement works on the structure, and the resulting stress shows at roof-to-wall transitions long before it shows anywhere else.',
      },
    ],
    neighborhoods: [
      'Aliana',
      'Harvest Green',
      'Long Meadow Farms',
      'Grand Mission',
      'Pecan Grove',
      'Waterside Estates',
      'Rivers Edge',
      'Del Webb Sweetgrass',
      'Lakes of Bella Terra',
      'Old Richmond',
    ],
    zips: ['77406', '77407', '77469'],
    faqs: [
      {
        question:
          'My home is under ten years old. Why would it need roof work?',
        answer:
          'New does not mean faultless. During fast building cycles, roofing crews work at pace and details get missed. Nearly every problem we find on Richmond roofs of this age is an installation defect, not worn-out material — which usually means a targeted repair.',
      },
      {
        question: 'Is my roof still under warranty?',
        answer:
          'Quite possibly. Builder warranties and manufacturer shingle warranties run on different clocks and cover different things. Bring us the paperwork at your free inspection and we will tell you honestly whether you should be calling the builder first.',
      },
    ],
  },
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}

export const serviceAreaLegacyRedirects: {
  source: string;
  destination: string;
}[] = [
  {
    source: '/roofing-contractor-in-richmond-tx-aztec-contractors',
    destination: serviceAreaHref('richmond-tx'),
  },
  {
    source: '/roofing-contractor-in-missouri-city-tx-aztec-contractors',
    destination: serviceAreaHref('missouri-city-tx'),
  },
  {
    source: '/roofing-contractor-in-the-woodlands-tx-aztec-contractors',
    destination: serviceAreaHref('the-woodlands-tx'),
  },
  {
    source: '/roofing-contractor-in-pearland-tx-aztec-contractors',
    destination: serviceAreaHref('pearland-tx'),
  },
  {
    source: '/roofing-contractor-in-spring-tx-aztec-contractors',
    destination: serviceAreaHref('spring-tx'),
  },
  {
    source: '/roofing-contractor-in-sugar-land-tx-aztec-contractors',
    destination: serviceAreaHref('sugar-land-tx'),
  },
];
