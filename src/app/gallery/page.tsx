import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon, PhoneIcon } from 'lucide-react';

import { GalleryGrid } from '@/components/gallery-grid';
import { FadeIn } from '@/components/motion';
import { PageHero } from '@/components/page-hero';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { galleryHeroImage, galleryImages } from '@/lib/gallery';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Project Gallery',
  description: `Photos from Aztec Contractors jobs across Houston — roofing, remodeling, and additions. ${galleryImages.length} project photos from real homes we have worked on.`,
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Project gallery"
        description="Roofing, remodeling, and additions across Houston — the same crew, the same standards. Click any photo to open it."
        image={galleryHeroImage.src}
        imageAlt={galleryHeroImage.alt}
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
          className="h-11 border-white/25 bg-white/10 px-6 text-white hover:bg-white/20 hover:text-white"
        >
          <a href={site.phoneHref}>
            <PhoneIcon className="size-4" />
            {site.phone}
          </a>
        </Button>
      </PageHero>

      <Section>
        <FadeIn className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            {galleryImages.length} photos from Houston jobs
          </p>
        </FadeIn>
        <GalleryGrid images={galleryImages} />
      </Section>

      <div className="border-y border-primary/20 bg-primary/8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center md:flex-row md:px-6 md:text-left">
          <FadeIn>
            <p className="mb-1 text-xs font-semibold tracking-widest text-primary uppercase">
              Family owned · A+ BBB · Est. {site.founded}
            </p>
            <h2 className="font-heading text-2xl font-bold">
              Want this kind of work on your house?
            </h2>
            <p className="mt-1.5 max-w-lg text-sm text-muted-foreground">
              Send photos or a short description. We will inspect, explain the
              options, and give you an honest scope.
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
