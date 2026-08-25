import Link from 'next/link';
import { CheckCircleIcon } from 'lucide-react';

import { FadeIn } from '@/components/motion';
import { Button } from '@/components/ui/button';

const claims = [
  'In writing: no cost beyond your deductible',
  'No settlement reached means no obligation',
  'We meet your adjuster on the roof',
  'Re-inspection or arbitration if underpaid',
];

export function ClaimsCta({ city }: { city?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-primary/20 bg-primary/6">
      <div className="grid gap-8 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10">
        <FadeIn>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Storm & insurance claims
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight md:text-3xl">
            Storm damage? You only ever pay your deductible.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            We handle the whole insurance claim
            {city ? ` for ${city} homeowners` : ' wherever you are in the Houston area'}{' '}
            — the inspection, the adjuster meeting, the build, and the final
            lien waiver.
          </p>
          <Button asChild className="mt-6 h-11 px-5 font-semibold">
            <Link href="/contact">See how we handle claims</Link>
          </Button>
        </FadeIn>
        <FadeIn delay={0.08}>
          <ul className="space-y-3">
            {claims.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </div>
  );
}
