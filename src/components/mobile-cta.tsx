'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PhoneIcon, ClipboardListIcon } from 'lucide-react';

import { site } from '@/lib/site';

export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 pb-safe backdrop-blur-md transition-transform duration-300 sm:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={site.phoneHref}
          className="flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-card text-sm font-semibold transition-colors active:bg-muted"
        >
          <PhoneIcon className="size-4 text-primary" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex h-12 items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-white transition-opacity active:opacity-90"
        >
          <ClipboardListIcon className="size-4" />
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
