'use client';

import Image from 'next/image';
import { useCallback, useEffect, useId, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';

import type { GalleryImage } from '@/lib/gallery';
import { cn } from '@/lib/utils';

export function GalleryGrid({
  images,
  className,
}: {
  images: GalleryImage[];
  className?: string;
}) {
  const labelId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(() => {
    setOpenIndex((current) =>
      current === null ? current : (current - 1 + images.length) % images.length,
    );
  }, [images.length]);
  const showNext = useCallback(() => {
    setOpenIndex((current) =>
      current === null ? current : (current + 1) % images.length,
    );
  }, [images.length]);

  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') showNext();
      if (event.key === 'ArrowLeft') showPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [openIndex, close, showNext, showPrev]);

  const openImage = openIndex === null ? null : images[openIndex];

  return (
    <>
      <ul className={cn('columns-2 gap-3 sm:columns-3 lg:columns-4', className)}>
        {images.map((image, index) => (
          <li key={image.src} className="mb-3 break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative block w-full overflow-hidden rounded-xl ring-1 ring-foreground/10 outline-none transition-transform hover:ring-primary/40 focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="h-auto w-full bg-muted object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/15" />
            </button>
          </li>
        ))}
      </ul>

      {openImage && openIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelId}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 p-4 md:p-8"
          onClick={close}
        >
          <p id={labelId} className="sr-only">
            {openImage.alt}
          </p>
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute top-4 right-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <XIcon className="size-5" />
          </button>
          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous photo"
                className="absolute top-1/2 left-3 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6"
              >
                <ChevronLeftIcon className="size-6" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Next photo"
                className="absolute top-1/2 right-3 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6"
              >
                <ChevronRightIcon className="size-6" />
              </button>
            </>
          ) : null}
          <div
            className="relative max-h-[88vh] max-w-[min(1100px,92vw)]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={openImage.src}
              alt={openImage.alt}
              width={openImage.width}
              height={openImage.height}
              priority
              sizes="92vw"
              className="max-h-[88vh] w-auto rounded-lg object-contain"
            />
            <p className="mt-3 text-center text-xs text-white/70">
              {openIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
