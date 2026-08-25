import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, PhoneIcon } from 'lucide-react';

import { Reveal } from '@/components/motion';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: `This page isn't on the blueprint. Find roofing, remodeling, and insurance claim help from ${site.name} in Houston.`,
  robots: { index: false, follow: true },
};

const shortcuts = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/service-areas', label: 'Service areas' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Free estimate' },
] as const;

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center overflow-hidden bg-[#0c0a09] px-4 py-20 text-center md:px-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(224,85,51,0.2),transparent_58%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/20"
      />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center">
        <Reveal>
          <p className="mb-6 text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Lost on the job site
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <p
            aria-hidden
            className="flex items-center justify-center font-heading text-[4.75rem] font-bold leading-none tracking-tighter text-white sm:text-[7.5rem] md:text-[10.5rem] lg:text-[12.5rem]"
          >
            <span>4</span>
            <span className="relative mx-[0.04em] inline-block size-[0.9em] shrink-0">
              <span className="absolute inset-[18%] rounded-full bg-primary/40 blur-2xl" />
              <Image
                src="/logo/emblem.png"
                alt=""
                fill
                priority
                sizes="(max-width: 640px) 72px, (max-width: 768px) 120px, 200px"
                className="object-contain drop-shadow-[0_0_28px_rgba(224,85,51,0.45)]"
              />
            </span>
            <span>4</span>
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <h1 className="mt-8 max-w-xl font-heading text-3xl font-bold tracking-tight text-balance text-white md:text-4xl">
            <span className="sr-only">404. </span>
            This page isn&apos;t on the blueprint.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-300 md:text-lg">
            The link you followed doesn&apos;t exist — or that job hasn&apos;t
            been framed yet. {site.name} is still here for roofing, remodeling,
            and insurance claims across Houston.
          </p>
        </Reveal>

        <Reveal delay={0.28} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild className="h-12 px-6 text-base font-semibold">
            <Link href="/">
              Back to home
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 border-white/30 bg-white/10 px-6 text-base font-medium text-white hover:bg-white/20 hover:text-white"
          >
            <Link href="/contact">Get a free estimate</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 border-white/30 bg-transparent px-6 text-base font-medium text-white hover:bg-white/15 hover:text-white"
          >
            <a href={site.phoneHref}>
              <PhoneIcon className="size-4" />
              {site.phone}
            </a>
          </Button>
        </Reveal>

        <Reveal delay={0.36}>
          <nav
            aria-label="Popular pages"
            className="mt-10 flex flex-wrap items-center justify-center gap-y-2 text-sm text-zinc-400"
          >
            {shortcuts.map((item, index) => (
              <span key={item.href} className="flex items-center">
                {index > 0 ? (
                  <span aria-hidden className="mx-2.5 text-zinc-600">
                    ·
                  </span>
                ) : null}
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>
        </Reveal>
      </div>
    </div>
  );
}
