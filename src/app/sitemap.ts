import type { MetadataRoute } from 'next';
import { serviceAreaHref, serviceAreas } from '@/lib/service-areas';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${site.url}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${site.url}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${site.url}/service-areas`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    ...serviceAreas.map((area) => ({
      url: `${site.url}${serviceAreaHref(area.slug)}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${site.url}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${site.url}/gallery`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${site.url}/reviews`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${site.url}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
