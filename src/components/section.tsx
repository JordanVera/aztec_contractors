import { FadeIn } from '@/components/motion';
import { cn } from '@/lib/utils';

export function Section({
  children,
  className,
  id,
  narrow = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  narrow?: boolean;
}) {
  return (
    <section id={id} className={cn('px-4 py-16 md:px-6 md:py-24', className)}>
      <div className={cn('mx-auto w-full', narrow ? 'max-w-3xl' : 'max-w-6xl')}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <FadeIn className={cn('mb-10 max-w-2xl', centered && 'mx-auto text-center')}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className={cn('mt-4 text-base leading-relaxed text-muted-foreground', centered && 'mx-auto')}>
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
