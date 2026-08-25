import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon, PhoneIcon } from 'lucide-react';

import { FadeIn } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section } from '@/components/section';
import { ServiceCategorySection } from '@/components/service-category-section';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Roofing & Remodeling Services',
  description:
    'Aztec Contractors Houston roofing and remodeling — roof repair, new installation, replacement, inspections, garage, kitchen, room and bedroom additions, and interior remodels. Free estimates.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Our complete services"
        description="Roofing and remodeling for Houston homes — the same crew, the same standards, and the same guarantee whether we are patching a leak or adding a bedroom."
      >
        <Button asChild className="h-11 px-6 font-semibold">
          <Link href="/contact">
            Get a free estimate
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" className="h-11 px-6">
          <a href={site.phoneHref}>
            <PhoneIcon className="size-4" />
            {site.phone}
          </a>
        </Button>
      </PageHero>

      <Section>
        <ServiceCategorySection categoryId="roofing" />
      </Section>

      <Section className="bg-card/30">
        <ServiceCategorySection categoryId="remodeling" />
      </Section>

      <div className="border-y border-primary/20 bg-primary/8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center md:flex-row md:px-6 md:text-left">
          <FadeIn>
            <p className="mb-1 text-xs font-semibold tracking-widest text-primary uppercase">
              Free estimates · A+ BBB · Est. {site.founded}
            </p>
            <h2 className="font-heading text-2xl font-bold">
              Not sure which service you need?
            </h2>
            <p className="mt-1.5 max-w-lg text-sm text-muted-foreground">
              Tell us what is going on with the house. We will inspect, explain
              the options, and give you an honest scope — repair or replace,
              insurance or out of pocket.
            </p>
          </FadeIn>
          <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
            <Button asChild className="h-11 px-6 font-semibold">
              <Link href="/contact">
                Request an estimate
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 px-6">
              <a href={site.phoneHref}>
                <PhoneIcon className="size-4" />
                Call now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
