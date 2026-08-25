import { reviews } from '@/lib/services';
import { site } from '@/lib/site';

export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: site.name,
    description: site.description,
    url: site.url,
    sameAs: [site.google.reviewsUrl],
    logo: `${site.url}/logo/logo-main-black.png`,
    image: `${site.url}/logo/logo-main-white.png`,
    telephone: site.phone,
    email: site.email,
    foundingDate: String(site.founded),
    founder: [
      {
        '@type': 'Person',
        name: 'Reynaldo Serenil',
        jobTitle: 'Co-Owner',
      },
      {
        '@type': 'Person',
        name: 'Valeria E. Serenil',
        jobTitle: 'Co-Owner',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: 'Houston',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: String(reviews.length),
    },
    openingHoursSpecification: site.hours.schema.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
