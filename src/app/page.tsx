import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PhoneIcon,
  HomeIcon,
  HammerIcon,
  FileCheckIcon,
  PaintBucketIcon,
  LayoutTemplateIcon,
  TreesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  StarIcon,
  BadgeCheckIcon,
  ClockIcon,
  CameraIcon,
  HandshakeIcon,
} from 'lucide-react';

import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { Section, SectionHeading } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LeadForm } from '@/components/lead-form';
import { services, reviews } from '@/lib/services';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'General Contractor Houston TX | Roofing, Remodeling & Insurance Claims',
  description: site.description,
};

const serviceIconMap: Record<string, React.ElementType> = {
  Home: HomeIcon,
  Hammer: HammerIcon,
  FileCheck: FileCheckIcon,
  PaintBucket: PaintBucketIcon,
  LayoutTemplate: LayoutTemplateIcon,
  Trees: TreesIcon,
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
              <span className="text-primary">general contractor</span>{' '}
              since {site.founded}.
            </h1>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Roofing, remodeling, building additions, and insurance claim specialists.
              Family-owned and operated by Reynaldo &amp; Valeria Serenil — over{' '}
              <strong className="font-semibold text-foreground">5,000 completed projects</strong>{' '}
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
            <Button asChild variant="outline" className="h-12 px-6 bg-black/20 text-base font-medium">
              <a href={site.phoneHref}>
                <PhoneIcon className="size-4" />
                {site.phone}
              </a>
            </Button>
          </FadeIn>

          <FadeIn delay={0.28} className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
            {site.badges.map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
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
            { value: site.stats.projects, label: 'Projects Completed', sub: 'Houston & surrounds' },
            { value: site.stats.years, label: 'Years in Business', sub: `Est. ${site.founded}` },
            { value: site.stats.bbb, label: 'BBB Rating', sub: 'Better Business Bureau' },
            { value: '★★★★★', label: 'Google Reviews', sub: 'Consistent 5-star service' },
          ].map((stat) => (
            <FadeIn key={stat.label}>
              <div className="flex flex-col items-center gap-1 p-8 text-center">
                <p className="text-4xl font-bold tracking-tight text-primary">{stat.value}</p>
                <p className="text-sm font-semibold">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Services */}
      <Section id="services">
        <SectionHeading
          eyebrow="What we do"
          title="Full-service general contracting"
          description="From storm-damaged roofs to full kitchen remodels — Aztec handles it all under one roof, with the same crew, the same standards, and the same guarantee."
        />
        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIconMap[service.icon] ?? HomeIcon;
            return (
              <StaggerItem key={service.slug}>
                <Card className="group h-full transition-all hover:glow-primary">
                  <CardHeader>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                        {service.eyebrow}
                      </span>
                    </div>
                    <CardTitle className="mt-3 text-base leading-snug">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircleIcon className="mt-0.5 size-3.5 shrink-0 text-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
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
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
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
              Aztec Contractors was founded in 2005 by Reynaldo Serenil, who grew up watching
              his father work with clients and build with integrity. Those values — honesty,
              craftsmanship, and community — are the foundation of everything Aztec does today.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Reynaldo brings over 25 years of hands-on construction experience. His daughter
              Valeria, a student at the #1-ranked Wolff Center for Entrepreneurship, is also the
              heart behind{' '}
              <strong className="font-semibold text-foreground">Second Blessing</strong> — a
              nonprofit providing construction and business training for individuals facing
              employment barriers.
            </p>
            <p className="mt-4 text-sm italic text-primary/80">
              "At Aztec, we don't just construct buildings — we create homes, elevate living
              spaces, and design environments where memories are made."
            </p>
            <div className="mt-6 flex flex-wrap gap-5">
              {[
                { name: 'Reynaldo Serenil', title: 'Co-Owner · 25+ yrs experience' },
                { name: 'Valeria E. Serenil', title: 'Co-Owner · Wolff Center for Entrepreneurship' },
              ].map((person) => (
                <div key={person.name} className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                    {person.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{person.name}</p>
                    <p className="text-xs text-muted-foreground">{person.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Core Values
                </h3>
                <div className="space-y-4">
                  {site.coreValues.map((value) => (
                    <div key={value.name} className="flex gap-3">
                      <span className="mt-0.5 font-mono text-xs font-bold text-primary/60">
                        {value.number}
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{value.name}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* Reviews */}
      <Section id="reviews" className="bg-card/30">
        <SectionHeading
          eyebrow="What clients say"
          title="Real reviews from real Houston homeowners"
          centered
        />
        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <StaggerItem key={review.name}>
              <Card className="flex h-full flex-col">
                <CardContent className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} className="size-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-2 border-t border-border pt-3">
                    <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{review.name}</p>
                      <p className="text-xs text-muted-foreground">Verified Google Review</p>
                    </div>
                    <ShieldCheckIcon className="ml-auto size-4 text-muted-foreground/40" />
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
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
              Tell us about your project and we&apos;ll come out, assess the situation, and give you
              a clear, honest estimate — no pressure, no gimmicks.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2">
              {['Free estimate, no obligation', 'Insurance claim help', 'Fast response', 'A+ BBB rated'].map((p) => (
                <div key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
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
              We show up when we say we will, do what we promise, and guarantee every job.
              Call Reynaldo&apos;s team today.
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
