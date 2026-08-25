import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  PhoneIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  BadgeCheckIcon,
  ClockIcon,
  CameraIcon,
  HandshakeIcon,
  FileCheckIcon,
} from 'lucide-react';

import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { GalleryGrid } from '@/components/gallery-grid';
import { Section, SectionHeading } from '@/components/section';
import { ServiceCategorySection } from '@/components/service-category-section';
import { ReviewCard } from '@/components/review-card';
import { VideoShowcase } from '@/components/video-showcase';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LeadForm } from '@/components/lead-form';
import { featuredGalleryImages, galleryImages } from '@/lib/gallery';
import { reviews } from '@/lib/services';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title:
    'General Contractor Houston TX | Roofing, Remodeling & Insurance Claims',
  description: site.description,
};

const whyUs = [
  {
    icon: CameraIcon,
    title: 'Advanced imaging estimates',
    body: 'We use drone and satellite imaging to produce accurate, documented estimates — faster and more thorough than a standard ladder inspection.',
  },
  {
    icon: FileCheckIcon,
    title: 'Insurance claim specialists',
    body: 'Our team documents every detail, coordinates directly with your adjuster, and fights to maximize your payout. We have helped with thousands of claims.',
  },
  {
    icon: HandshakeIcon,
    title: 'We honor our guarantee',
    body: 'Multiple reviews mention Reynaldo coming back to fix issues at no charge. When we sign off on a job, we mean it.',
  },
  {
    icon: ClockIcon,
    title: 'On time, every time',
    body: 'We show up when we say we will, communicate through every stage, and clean up every day before we leave your property.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border hero-gradient">
        <div className="pointer-events-none absolute inset-0 stripe-pattern opacity-40" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-40">
          <FadeIn>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Badge className="bg-primary/15 border-primary/30 text-primary hover:bg-primary/20">
                <BadgeCheckIcon className="mr-1.5 size-3" />
                A+ BBB Rating
              </Badge>
              <Badge variant="outline" className="text-muted-foreground">
                <StarIcon className="mr-1 size-3 fill-amber-400 text-amber-400" />
                Google Rated · 18+ Years · Houston TX
              </Badge>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <h1 className="max-w-4xl font-heading text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
              Houston&apos;s trusted{' '}
              <span className="text-primary">general contractor</span> since{' '}
              {site.founded}.
            </h1>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Roofing, remodeling, building additions, and insurance claim
              specialists. Family-owned and operated by Reynaldo &amp; Valeria
              Serenil — over{' '}
              <strong className="font-semibold text-foreground">
                5,000 completed projects
              </strong>{' '}
              across the greater Houston area.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="h-12 px-6 text-base font-semibold">
              <Link href="/contact">
                Get a free estimate
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 px-6 text-base font-medium"
            >
              <a href={site.phoneHref}>
                <PhoneIcon className="size-4" />
                {site.phone}
              </a>
            </Button>
          </FadeIn>

          <FadeIn delay={0.28} className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
            {site.badges.map((b) => (
              <span
                key={b}
                className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
              >
                <CheckCircleIcon className="size-3.5 text-primary" />
                {b}
              </span>
            ))}
          </FadeIn>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {[
            {
              value: site.stats.projects,
              label: 'Projects Completed',
              sub: 'Houston & surrounds',
            },
            {
              value: site.stats.years,
              label: 'Years in Business',
              sub: `Est. ${site.founded}`,
            },
            {
              value: site.stats.bbb,
              label: 'BBB Rating',
              sub: 'Better Business Bureau',
            },
            {
              value: '★★★★★',
              label: 'Google Reviews',
              sub: 'Consistent 5-star service',
            },
          ].map((stat) => (
            <FadeIn key={stat.label}>
              <div className="flex flex-col items-center gap-1 p-8 text-center">
                <p className="text-4xl font-bold tracking-tight text-primary">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <VideoShowcase />

      {/* Services */}
      <Section id="services">
        <ServiceCategorySection categoryId="roofing" />
      </Section>
      <Section className="bg-card/30">
        <ServiceCategorySection categoryId="remodeling" />
        <FadeIn className="mt-10 text-center">
          <Button asChild variant="outline" className="h-11 px-6">
            <Link href="/services">
              View all services
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
        </FadeIn>
      </Section>

      {/* Why Aztec */}
      <Section className="bg-card/30 stripe-pattern">
        <SectionHeading
          eyebrow="Why Aztec"
          title="What makes us different"
          description="We've earned our reputation one job at a time — with honest pricing, documented estimates, and a guarantee we actually back up."
        />
        <Stagger className="grid gap-5 sm:grid-cols-2">
          {whyUs.map((item) => (
            <StaggerItem key={item.title}>
              <div className="flex gap-4 rounded-xl border border-border bg-card/80 p-5 transition-shadow hover:glow-primary">
                <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="size-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* About / story */}
      <Section id="about">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              eyebrow="Our story"
              title="Family-built from the ground up"
            />
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              Aztec Contractors was founded in 2005 by Reynaldo Serenil, who
              grew up watching his father work with clients and build with
              integrity. Those values — honesty, craftsmanship, and community —
              are the foundation of everything Aztec does today.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Today it is a father-daughter company. Reynaldo still oversees the
              work. Valeria is building the business — and Second Blessing, a
              nonprofit training Houstonians for construction careers.
            </p>
            <p className="mt-4 text-sm italic text-primary/80">
              &ldquo;At Aztec, we don&apos;t just construct buildings — we
              create homes, elevate living spaces, and design environments where
              memories are made.&rdquo;
            </p>
            <Button asChild className="mt-6 h-11 px-5">
              <Link href="/about">
                Meet Reynaldo &amp; Valeria
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Link
              href="/about"
              className="group relative block overflow-hidden rounded-2xl ring-1 ring-foreground/10"
            >
              <div className="relative aspect-4/5">
                <Image
                  src="/images/owners.jpg"
                  alt="Reynaldo and Valeria Serenil, co-owners of Aztec Contractors, with the Houston skyline behind them"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[center_18%] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-5">
                <p className="text-sm font-semibold text-white">
                  Reynaldo &amp; Valeria Serenil
                </p>
                <p className="text-xs text-white/75">Co-owners · Houston, TX</p>
              </div>
            </Link>
          </FadeIn>
        </div>
      </Section>

      {/* Gallery */}
      <Section id="gallery" className="bg-card/30">
        <SectionHeading
          eyebrow="Our work"
          title="Recent Houston projects"
          description="Roofing, remodeling, and additions from real jobs. Open a photo here, or browse the full gallery."
          centered
        />
        <GalleryGrid images={featuredGalleryImages} />
        <FadeIn className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild className="h-11 px-6">
            <Link href="/gallery">
              See all {galleryImages.length} photos
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-11 px-6">
            <Link href="/contact">Get a free estimate</Link>
          </Button>
        </FadeIn>
      </Section>

      {/* Reviews */}
      <Section id="reviews">
        <SectionHeading
          eyebrow="What clients say"
          title="Real reviews from real Houston homeowners"
          description="A sample of Google reviews for Aztec Contractor's Roofing & Construction — read them here, or open the full listing."
          centered
        />
        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 6).map((review) => (
            <StaggerItem key={review.name}>
              <ReviewCard review={review} />
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button asChild className="h-11 px-6">
            <Link href="/reviews">
              See all reviews
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-11 px-6">
            <a
              href={site.google.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read us on Google
            </a>
          </Button>
        </FadeIn>
      </Section>

      {/* Lead form */}
      <Section id="estimate" className="stripe-pattern">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              100% free · no obligation
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Get your free estimate today
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Tell us about your project and we&apos;ll come out, assess the
              situation, and give you a clear, honest estimate — no pressure, no
              gimmicks.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2">
              {[
                'Free estimate, no obligation',
                'Insurance claim help',
                'Fast response',
                'A+ BBB rated',
              ].map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <CheckCircleIcon className="size-3.5 shrink-0 text-primary" />
                  {p}
                </div>
              ))}
            </div>
            <LeadForm />
          </FadeIn>
        </div>
      </Section>

      {/* Final CTA */}
      <div className="border-y border-primary/20 bg-primary/8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Family Owned · A+ BBB · Est. {site.founded}
            </p>
            <h2 className="font-heading text-2xl font-bold">
              Ready to start your project?
            </h2>
            <p className="mt-1.5 max-w-lg text-sm text-muted-foreground">
              We show up when we say we will, do what we promise, and guarantee
              every job. Call Reynaldo&apos;s team today.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
            <Button asChild className="h-11 px-6 font-semibold">
              <Link href="/contact">
                Get free estimate
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
