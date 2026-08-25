import Link from 'next/link';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  MapPinIcon,
  PhoneIcon,
} from 'lucide-react';

import { ClaimsCta } from '@/components/claims-cta';
import { GalleryGrid } from '@/components/gallery-grid';
import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { LeadForm } from '@/components/lead-form';
import { featuredGalleryImages } from '@/lib/gallery';
import type { ServiceArea } from '@/lib/service-areas';
import { serviceAreaHref, serviceAreas } from '@/lib/service-areas';
import { getServicesByCategory } from '@/lib/services';
import { site } from '@/lib/site';

const stats = [
  { value: site.stats.projects, label: 'Projects completed' },
  { value: `${site.stats.years} yrs`, label: 'Serving Houston' },
  { value: site.stats.bbb, label: 'BBB rating' },
  { value: '1 yr', label: 'Workmanship warranty' },
];

export function ServiceAreaPage({ area }: { area: ServiceArea }) {
  const roofing = getServicesByCategory('roofing');
  const otherAreas = serviceAreas.filter((item) => item.slug !== area.slug);
  const gallery = featuredGalleryImages.slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow={`${area.nameWithState} · ${area.county}`}
        title={
          <>
            Roofing contractor in{' '}
            <em className="not-italic text-primary">{area.nameWithState}</em>
          </>
        }
        description={area.intro}
        image={area.heroImage}
        imageAlt={area.heroImageAlt}
        trustRow={
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {site.badges.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-1.5 text-xs font-medium text-white/75"
              >
                <CheckCircleIcon className="size-3.5 text-primary" />
                {badge}
              </span>
            ))}
          </div>
        }
      >
        <Button asChild className="h-11 px-6 font-semibold">
          <Link href="/contact">
            Get a free roof assessment
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-11 border-white/25 bg-white/10 px-6 text-white hover:bg-white/20 hover:text-white"
        >
          <a href={site.phoneHref}>
            <PhoneIcon className="size-4" />
            {site.phone}
          </a>
        </Button>
      </PageHero>

      <div className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 p-6 text-center md:p-8"
            >
              <p className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="text-xs font-semibold md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <Section>
        <SectionHeading
          eyebrow="Local conditions"
          title={`What actually damages roofs in ${area.name}`}
          description="Every part of the Houston metro wears roofs differently. These are the factors that matter here."
        />
        <Stagger className="grid gap-5 md:grid-cols-3">
          {area.conditions.map((condition) => (
            <StaggerItem key={condition.title}>
              <div className="h-full rounded-xl border border-border bg-card p-5 transition-shadow hover:glow-primary">
                <p className="font-semibold">{condition.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {condition.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-card/30">
        <SectionHeading
          eyebrow="What we do"
          title={`Roofing services in ${area.name}`}
          description="Residential roofing and general contracting, from a single repair through to full insurance restoration."
        />
        <Stagger className="flex flex-wrap gap-3">
          {roofing.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
              >
                {service.name}
              </Link>
            </StaggerItem>
          ))}
          <StaggerItem>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
            >
              Storm & insurance claims
            </Link>
          </StaggerItem>
          <StaggerItem>
            <Link
              href="/services#remodeling"
              className="inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
            >
              Remodeling
            </Link>
          </StaggerItem>
        </Stagger>
      </Section>

      <Section>
        <ClaimsCta city={area.name} />
      </Section>

      <Section className="bg-card/30">
        <SectionHeading
          eyebrow="Where we work"
          title={`${area.name} neighbourhoods we serve`}
          description="If your street is not listed, call us anyway — this is not an exhaustive list."
        />
        <Stagger className="flex flex-wrap gap-2">
          {area.neighborhoods.map((neighborhood) => (
            <StaggerItem key={neighborhood}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm">
                <MapPinIcon className="size-3.5 text-primary" />
                {neighborhood}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-6 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">ZIP codes served:</span>{' '}
          {area.zips.join(' · ')}
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our work"
          title="Recent Aztec projects"
          description="Real jobs photographed by our own crews across the Houston area — not stock photography."
          centered
        />
        <GalleryGrid images={gallery} />
        <FadeIn className="mt-10 text-center">
          <Button asChild variant="outline" className="h-11 px-6">
            <Link href="/gallery">
              See the full gallery
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
        </FadeIn>
      </Section>

      <Section className="bg-card/30 stripe-pattern">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Free estimate · no obligation
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Not sure whether your {area.name} roof needs work?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Book a free on-site inspection. We will tell you honestly whether
              it is a repair, a replacement, or a call to the builder first.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.08}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <LeadForm defaultService="Roof Inspection" />
          </FadeIn>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Questions"
          title={`${area.name} roofing questions`}
        />
        <Accordion
          type="single"
          collapsible
          className="mx-auto max-w-3xl rounded-2xl border border-border bg-card px-4 md:px-6"
        >
          {area.faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section className="bg-card/30">
        <SectionHeading
          eyebrow="Houston metro"
          title="Other areas we serve"
          description="Hail in Cypress, pine needles in Spring, HOA approval in Sugar Land — each suburb wears roofs differently."
        />
        <div className="flex flex-wrap gap-2">
          {otherAreas.map((item) => (
            <Link
              key={item.slug}
              href={serviceAreaHref(item.slug)}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:border-primary/40 hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/service-areas"
            className="rounded-full border border-primary/30 bg-primary/8 px-4 py-2 text-sm font-semibold text-primary"
          >
            All service areas
          </Link>
        </div>
      </Section>
    </>
  );
}
