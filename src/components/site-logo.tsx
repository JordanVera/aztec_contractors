import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const sizeClass = {
  sm: 'h-12 w-auto',
  md: 'h-16 w-auto',
  lg: 'h-24 w-auto',
} as const;

export function SiteLogo({
  size = 'md',
  priority = false,
  className,
}: {
  size?: keyof typeof sizeClass;
  priority?: boolean;
  className?: string;
}) {
  const imageClass = cn(sizeClass[size], 'object-contain');

  return (
    <Link
      href="/"
      aria-label="Aztec Contractors home"
      className={cn('inline-flex shrink-0 items-center', className)}
    >
      <Image
        src="/logo/logo-horizontal-black.png"
        alt=""
        width={2000}
        height={2000}
        sizes="224px"
        priority={priority}
        className={cn(imageClass, 'dark:hidden')}
      />
      <Image
        src="/logo/logo-horizontal-white.png"
        alt=""
        width={2000}
        height={2000}
        sizes="224px"
        priority={priority}
        className={cn(imageClass, 'hidden dark:block')}
      />
    </Link>
  );
}
