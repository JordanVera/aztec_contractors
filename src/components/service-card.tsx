import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

import type { Service } from '@/lib/services';
import { cn } from '@/lib/utils';

export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        'group relative block aspect-3/4 overflow-hidden rounded-xl ring-1 ring-foreground/10 transition-shadow hover:glow-primary',
        className
      )}
    >
      <Image
        src={service.image}
        alt={service.imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5">
        <p className="text-[10px] font-semibold tracking-widest text-amber-300/90 uppercase">
          {service.eyebrow}
        </p>
        <h3 className="font-heading text-xl font-bold text-white text-balance">
          {service.name}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-white/80">
          {service.description}
        </p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
          Learn more
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
