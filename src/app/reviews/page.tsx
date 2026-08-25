import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon, ExternalLinkIcon, PhoneIcon, StarIcon } from 'lucide-react';

import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { ReviewCard } from '@/components/review-card';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { reviews } from '@/lib/services';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Customer Reviews',
  description: `Read Houston homeowner reviews of ${site.google.listingName}. See what clients say about Aztec roofing, remodeling, and construction — then read more on Google.`,
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="What clients say"
        title="Reviews from Houston homeowners"
        description="Real Google reviews of Aztec Contractor's Roofing & Construction — hosted here so you can read them, and linked through so you can see the full listing."
      >
        <Button asChild className="h-11 px-6 font-semibold">
          <a
            href={site.google.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read us on Google
            <ExternalLinkIcon className="size-4" />
          </a>
        </Button>
        <Button asChild variant="outline" className="h-11 px-6">
          <Link href="/contact">
            Get a free estimate
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
      </PageHero>

      <Section>
        <FadeIn className="mb-10 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Google Business Profile
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight md:text-3xl">
                {site.google.listingName}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Search for our listing on Google to see every public review,
                photos, and hours — then leave one of your own if we earned it.
              </p>
              <div className="mt-3 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="size-4 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-2 text-xs font-medium text-muted-foreground">
                  Google Rated · Houston, TX
                </span>
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button asChild className="h-11 px-5 font-semibold">
                <a
                  href={site.google.reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Google listing
                  <ExternalLinkIcon className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="h-11 px-5">
                <a
                  href={site.google.reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leave a Google review
                </a>
              </Button>
            </div>
          </div>
        </FadeIn>

        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <StaggerItem key={review.name}>
              <ReviewCard review={review} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <div className="border-y border-primary/20 bg-primary/8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center md:flex-row md:px-6 md:text-left">
          <FadeIn>
            <p className="mb-1 text-xs font-semibold tracking-widest text-primary uppercase">
              Family owned · A+ BBB · Est. {site.founded}
            </p>
            <h2 className="font-heading text-2xl font-bold">
              Ready to be the next review?
            </h2>
            <p className="mt-1.5 max-w-lg text-sm text-muted-foreground">
              Call Reynaldo&apos;s team or send the project details. We show
              up, we tell you the truth, and we guarantee the work.
            </p>
          </FadeIn>
          <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
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
          </div>
        </div>
      </div>
    </>
  );
}
