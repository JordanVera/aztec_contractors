'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlayIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export function YoutubeEmbed({
  videoId,
  title,
  start,
  aspect = 'video',
  className,
}: {
  videoId: string;
  title: string;
  start?: number;
  aspect?: 'video' | 'short';
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const params = new URLSearchParams({
    autoplay: '1',
    rel: '0',
  });
  if (start) params.set('start', String(start));

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-border bg-black shadow-lg',
        aspect === 'short' ? 'aspect-9/16' : 'aspect-video',
        className
      )}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title}`}
          className="relative size-full cursor-pointer"
        >
          <Image
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            fill
            sizes={aspect === 'short' ? '(max-width: 768px) 100vw, 33vw' : '(max-width: 896px) 100vw, 896px'}
            className="object-cover"
          />
          <span className="absolute inset-0 bg-black/35" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-4 ring-white/20 transition-transform hover:scale-105 sm:size-16">
              <PlayIcon className="size-6 fill-current pl-0.5 sm:size-7" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
