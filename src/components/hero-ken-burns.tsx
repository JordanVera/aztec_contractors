'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

import type { GalleryImage } from '@/lib/gallery';
import { cn } from '@/lib/utils';

const SLIDE_MS = 7500;
const KEN_BURNS = [
  'ken-burns-a',
  'ken-burns-b',
  'ken-burns-c',
  'ken-burns-d',
  'ken-burns-e',
] as const;

export function HeroKenBurns({ images }: { images: GalleryImage[] }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || images.length < 2) return;

    let timeout: ReturnType<typeof setTimeout>;

    const schedule = () => {
      timeout = setTimeout(() => {
        setIndex((current) => (current + 1) % images.length);
        schedule();
      }, SLIDE_MS);
    };

    const onVisibility = () => {
      clearTimeout(timeout);
      if (!document.hidden) schedule();
    };

    if (!document.hidden) schedule();
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [images.length, reduce]);

  const activeIndex = reduce ? 0 : index;
  const prevIndex = (activeIndex - 1 + images.length) % images.length;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {images.map((image, i) => {
        const active = i === activeIndex;
        const fadingOut = !reduce && i === prevIndex;

        return (
          <div
            key={image.src}
            className={cn(
              'absolute inset-0 transition-opacity duration-[1600ms] ease-in-out',
              active ? 'opacity-100' : 'opacity-0',
            )}
          >
            <div
              className={cn(
                'absolute -inset-[10%]',
                !reduce &&
                  (active || fadingOut) &&
                  KEN_BURNS[i % KEN_BURNS.length],
              )}
            >
              <Image
                src={image.src}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        );
      })}
      <div className="absolute inset-0 bg-linear-to-r from-black/82 via-black/62 to-black/38" />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/25 to-black/30" />
    </div>
  );
}
