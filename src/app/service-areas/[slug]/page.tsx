import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ServiceAreaPage } from '@/components/service-area-page';
import {
  getServiceArea,
  serviceAreaHref,
  serviceAreas,
} from '@/lib/service-areas';
import { site } from '@/lib/site';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) {
    return { title: 'Roofing Contractor' };
  }

  const title = `Roofing Contractor in ${area.nameWithState}`;
  const description = area.intro;
  const path = serviceAreaHref(area.slug);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${site.url}${path}`,
      images: [{ url: area.heroImage, alt: area.heroImageAlt }],
    },
  };
}

export default async function RoofingContractorAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) notFound();

  const path = serviceAreaHref(area.slug);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: site.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Service Areas',
            item: `${site.url}/service-areas`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: area.nameWithState,
            item: `${site.url}${path}`,
          },
        ],
      },
      {
        '@type': 'Service',
        name: `Roofing Contractor in ${area.nameWithState}`,
        description: area.intro,
        url: `${site.url}${path}`,
        provider: {
          '@type': 'GeneralContractor',
          name: site.name,
          telephone: site.phone,
        },
        areaServed: {
          '@type': 'City',
          name: area.name,
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: area.county,
          },
        },
        serviceType: 'Residential roofing',
      },
      {
        '@type': 'FAQPage',
        mainEntity: area.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceAreaPage area={area} />
    </>
  );
}
