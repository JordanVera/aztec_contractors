import type { Metadata } from 'next';
import Link from 'next/link';
import { StarIcon } from 'lucide-react';

import { Reveal } from '@/components/motion';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Thank You — Estimate Requested',
  description: `Thanks for contacting ${site.name}. We'll be in touch shortly.`,
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <Reveal className="mx-auto flex max-w-xl flex-col items-start px-4 py-24 md:px-6">
      <div className="mb-4 flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="size-5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
        Estimate request received
      </p>
      <h1 className="font-heading text-4xl font-semibold tracking-tight">
        Thanks — we&apos;ll be in touch soon.
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Reynaldo&apos;s team has received your request and will reach out shortly to
        schedule your free estimate. If your project is urgent — storm damage, an active
        leak, or an insurance deadline — please call us directly at{' '}
        <a href={site.phoneHref} className="font-semibold text-primary hover:underline">
          {site.phone}
        </a>
        .
      </p>
      <p className="mt-3 text-sm text-muted-foreground">
        — Reynaldo &amp; Valeria Serenil, Aztec Contractors Houston
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild className="h-11 px-5">
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild variant="outline" className="h-11 px-5">
          <a href={site.phoneHref}>Call {site.phone}</a>
        </Button>
      </div>
    </Reveal>
  );
}
