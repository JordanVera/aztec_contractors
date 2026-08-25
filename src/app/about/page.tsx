import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, HeartHandshakeIcon, PhoneIcon } from 'lucide-react';

import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { YoutubeEmbed } from '@/components/youtube-embed';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { aboutVideos, founders, originStory } from '@/lib/about';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'About Aztec Contractors',
  description:
    'Meet Reynaldo and Valeria Serenil, the father-daughter team behind Aztec Contractors Houston. Family-owned since 2005, A+ BBB, 5,000+ projects across greater Houston.',
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              {originStory.eyebrow}
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
              {originStory.title}
            </h2>
            {originStory.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-4 text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: site.stats.years, label: 'Years in Houston' },
                { value: site.stats.projects, label: 'Projects completed' },
                { value: site.stats.bbb, label: 'BBB rating' },
                { value: 'Family', label: 'Owned & operated' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <p className="text-3xl font-bold tracking-tight text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card/30">
        <SectionHeading
          eyebrow="The owners"
          title="Meet the family behind the work"
          description="A contractor who still shows up, and a next-generation operator building the business and the workforce behind it."
        />
        <div className="space-y-16 md:space-y-24">
          {founders.map((person, index) => (
            <div
              key={person.name}
              className={cn(
                'grid items-center gap-8 lg:grid-cols-2 lg:gap-14',
                index % 2 === 1 && 'lg:[&>div:first-child]:order-2',
              )}
            >
              <FadeIn>
                <div className="relative aspect-2/3 overflow-hidden rounded-2xl ring-1 ring-foreground/10">
                  <Image
                    src={person.image}
                    alt={person.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </FadeIn>
              <FadeIn delay={0.08}>
                <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">
                  {person.title} · {person.credential}
                </Badge>
                <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
                  {person.name}
                </h2>
                <p className="mt-5 text-base italic leading-relaxed text-primary/90">
                  &ldquo;{person.quote}&rdquo;
                </p>
                {person.bio.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="mt-4 text-base leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="h-11 px-5">
                    <a href={site.phoneHref}>
                      <PhoneIcon className="size-4" />
                      Call {person.shortName}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="h-11 px-5">
                    <a href={`mailto:${site.email}`}>Email the team</a>
                  </Button>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="From the crew"
          title="Three things Houston homeowners should hear"
          description="Short, straight talk from Aztec — protecting your home, what we actually do, and how to hire a roofer who will still be here after the storm."
          centered
        />
        <Stagger className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
          {aboutVideos.map((video) => (
            <StaggerItem key={video.id}>
              <YoutubeEmbed
                videoId={video.id}
                title={video.title}
                aspect="short"
              />
              <p className="mt-3 text-sm font-semibold">{video.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {video.caption}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="bg-card/30 stripe-pattern">
        <SectionHeading
          eyebrow="What we stand for"
          title="Five values. Every job."
          description="These are not posters in a break room. They are how Reynaldo was raised, and how Valeria is building the next chapter."
        />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {site.coreValues.map((value) => (
            <StaggerItem key={value.name}>
              <Card className="h-full py-0">
                <CardContent className="p-5">
                  <p className="font-mono text-xs font-bold text-primary/70">
                    {value.number}
                  </p>
                  <p className="mt-2 font-semibold">{value.name}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <div className="overflow-hidden rounded-2xl border border-primary/20 bg-primary/6">
          <div className="grid items-center gap-8 p-6 md:grid-cols-[auto_1fr] md:p-10">
            <FadeIn>
              <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <HeartHandshakeIcon className="size-7" />
              </div>
            </FadeIn>
            <FadeIn delay={0.06}>
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Community · Second Blessing
              </p>
              <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight md:text-3xl">
                Building more than houses
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Valeria founded Second Blessing to train people facing
                employment barriers in construction, business, and life skills —
                with a path toward a full workforce-development program. Aztec
                exists to serve Houston families. Second Blessing exists so more
                Houstonians can build those families a living.
              </p>
            </FadeIn>
          </div>
        </div>
      </Section>

      <div className="border-y border-primary/20 bg-primary/8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center md:flex-row md:px-6 md:text-left">
          <FadeIn>
            <p className="mb-1 text-xs font-semibold tracking-widest text-primary uppercase">
              Family owned · A+ BBB · Est. {site.founded}
            </p>
            <h2 className="font-heading text-2xl font-bold">
              Ready to meet the crew?
            </h2>
            <p className="mt-1.5 max-w-lg text-sm text-muted-foreground">
              Call Reynaldo&apos;s team, or send the project details. We show
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
