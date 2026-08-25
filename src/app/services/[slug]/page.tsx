import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRightIcon, CheckCircleIcon, PhoneIcon } from 'lucide-react';

import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section, SectionHeading } from '@/components/section';
import { ServiceCard } from '@/components/service-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LeadForm } from '@/components/lead-form';
import { getRelatedServices, getService, getServiceCategory, services } from '@/lib/services';
import { site } from '@/lib/site';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: 'Service' };
  }

  return {
    title: `${service.name} in Houston TX`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.slug);

  return (
    <>
      <PageHero
        eyebrow={getServiceCategory(service.category)?.name}
        title={service.name}
        description={service.description}
        image={service.image}
        imageAlt={service.imageAlt}
      >
        <Button asChild className="h-11 px-6 font-semibold">
          <Link href="/contact">
            Get a free estimate
            <ArrowRightIcon className="size-4" />
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-11 px-6 bg-white/10 text-white hover:bg-white/20"
        >
          <a href={site.phoneHref}>
            <PhoneIcon className="size-4" />
            {site.phone}
          </a>
        </Button>
      </PageHero>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn>
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">
              {getServiceCategory(service.category)?.name} · Houston, TX
            </Badge>
            <h2 className="font-heading text-3xl font-bold tracking-tight">
              {service.name} done right
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {service.longDescription}
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {service.process.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-border bg-card p-4"
                >
                  <p className="font-mono text-xs font-bold text-primary/70">
                    0{index + 1}
                  </p>
                  <p className="mt-2 text-sm font-semibold">{step.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn
            delay={0.08}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              What&apos;s included
            </h3>
            <ul className="mt-4 space-y-3">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-sm">
                  <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                  {bullet}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-6 h-11 w-full font-semibold">
              <Link href="/contact">
                Request this service
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Or call{' '}
              <a
                href={site.phoneHref}
                className="font-semibold text-primary hover:underline"
              >
                {site.phone}
              </a>
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-card/30 stripe-pattern">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Free estimate · no obligation
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
              Tell us about your {service.name.toLowerCase()} project
            </h2>
          </FadeIn>
          <FadeIn
            delay={0.08}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <LeadForm defaultService={service.formValue} />
          </FadeIn>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section>
          <SectionHeading
            eyebrow="More from Aztec"
            title="Related services"
            description="Same crew, same guarantee — more from this side of the business."
          />
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <StaggerItem key={item.slug}>
                <ServiceCard service={item} />
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/services">View all services</Link>
            </Button>
          </div>
        </Section>
      ) : null}
    </>
  );
}
