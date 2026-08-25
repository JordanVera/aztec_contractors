import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon, PhoneIcon } from 'lucide-react';

import { ClaimsCta } from '@/components/claims-cta';
import { GalleryGrid } from '@/components/gallery-grid';
import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { Button } from '@/components/ui/button';
import { featuredGalleryImages } from '@/lib/gallery';
import { serviceAreaHref, serviceAreas } from '@/lib/service-areas';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Roofing Service Areas | Houston Metro',
  description:
    'Aztec Contractors serves Houston and its suburbs — Katy, Cypress, Sugar Land, Spring, Pearland, The Woodlands, Missouri City, Humble, and Richmond. See what actually damages roofs where you live.',
};

const stats = [
  { value: site.stats.projects, label: 'Projects completed' },
  { value: `${site.stats.years} yrs`, label: 'Serving Houston' },
  { value: site.stats.bbb, label: 'BBB rating' },
  { value: '1 yr', label: 'Workmanship warranty' },
];

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Serving the greater Houston area"
        title={
          <>
            Roofing and restoration across{' '}
            <em className="not-italic text-primary">Houston and its suburbs</em>
          </>
        }
        description="Aztec Contractors has worked on Houston-area roofs for over eighteen years. Every part of the metro wears roofs differently — pick your area below and we will tell you what actually matters where you live."
        image="/images/gallery/015.jpg"
        imageAlt="Aztec Contractors roofing crew on a Houston-area residential project"
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
          eyebrow="Where we work"
          title="Choose your area"
          description="Hail in Cypress, pine needles in Spring, HOA approval in Sugar Land, coastal wind in Pearland. Each page covers what damages roofs in that specific area — and what to do about it."
        />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area) => (
            <StaggerItem key={area.slug}>
              <Link
                href={serviceAreaHref(area.slug)}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-shadow hover:glow-primary"
              >
                <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                  {area.county}
                </p>
                <h2 className="mt-2 font-heading text-xl font-bold tracking-tight">
                  {area.name}
                  <ArrowRightIcon className="ml-1.5 inline size-4 text-primary transition-transform group-hover:translate-x-0.5" />
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {area.hubSummary}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-card/30">
        <ClaimsCta />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our work"
          title="Recent Aztec projects"
          description="Real jobs photographed by our own crews across the Houston area — not stock photography."
          centered
        />
        <GalleryGrid images={featuredGalleryImages.slice(0, 6)} />
        <FadeIn className="mt-10 text-center">
          <Button asChild variant="outline" className="h-11 px-6">
            <Link href="/gallery">
              See the full gallery
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
        </FadeIn>
      </Section>

      <div className="border-y border-primary/20 bg-primary/8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center md:flex-row md:px-6 md:text-left">
          <FadeIn>
            <p className="mb-1 text-xs font-semibold tracking-widest text-primary uppercase">
              Family owned · A+ BBB · Est. {site.founded}
            </p>
            <h2 className="font-heading text-2xl font-bold">
              Not sure whether your roof needs work?
            </h2>
            <p className="mt-1.5 max-w-lg text-sm text-muted-foreground">
              Book a free on-site inspection, or send photos. We will tell you
              honestly whether it is a repair, a replacement, or nothing yet.
            </p>
          </FadeIn>
          <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
            <Button asChild className="h-11 px-6 font-semibold">
              <Link href="/contact">
                Check my roof free
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 px-6">
              <a href={site.phoneHref}>
                <PhoneIcon className="size-4" />
                {site.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
