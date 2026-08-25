import type { Metadata } from 'next';
import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  CheckIcon,
  MailIcon,
  ArrowRightIcon,
  StarIcon,
} from 'lucide-react';

import { FadeIn } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { LeadForm } from '@/components/lead-form';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Free Estimate — Contact Us',
  description: `Get a free, no-obligation estimate from ${site.name}. Call ${site.phone} or submit your project details online.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free estimate · no obligation"
        title="Let's talk about your project"
        description="Call us, email us, or fill out the form and we'll respond quickly with an honest, transparent estimate."
        compact
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <FadeIn className="space-y-5">
            <div>
              <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/15">
                Houston, TX · Free Estimates
              </Badge>
              <h2 className="font-heading text-2xl font-bold tracking-tight">Get in touch</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Whether it&apos;s storm damage, a needed remodel, or an insurance claim you need
                help navigating — Aztec&apos;s team is ready to help.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  icon: PhoneIcon,
                  label: 'Phone',
                  value: site.phone,
                  href: site.phoneHref,
                  sub: 'Call or text anytime',
                },
                {
                  icon: MailIcon,
                  label: 'Email',
                  value: site.email,
                  href: `mailto:${site.email}`,
                  sub: 'For estimates & project questions',
                },
                {
                  icon: MapPinIcon,
                  label: 'Office',
                  value: `${site.address.street}, ${site.address.city} ${site.address.state} ${site.address.zip}`,
                  sub: 'Serving greater Houston area',
                },
                {
                  icon: ClockIcon,
                  label: 'Hours',
                  value: site.hours.weekdays,
                  sub: site.hours.saturday,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:glow-primary"
                >
                  <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-0.5 flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                        <ArrowRightIcon className="size-3" />
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-semibold">{item.value}</p>
                    )}
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust signals */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                Why choose Aztec
              </p>
              <div className="space-y-2">
                {[
                  'Free, no-obligation estimates',
                  'Insurance claim specialists',
                  '5,000+ projects completed',
                  'A+ Better Business Bureau rating',
                  'Reynaldo personally oversees every job',
                ].map((p) => (
                  <div key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckIcon className="size-3.5 shrink-0 text-primary" />
                    {p}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="size-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-1 text-sm font-medium">Google Rated</span>
            </div>
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <h2 className="font-heading text-xl font-bold">Request your free estimate</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Fill out the form and we&apos;ll reach out quickly to schedule a visit or
              provide an initial estimate.
            </p>
            <div className="my-5 border-t border-border" />
            <LeadForm />
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
