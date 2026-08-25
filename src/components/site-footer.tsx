import Link from 'next/link';
import { MapPinIcon, PhoneIcon, MailIcon, StarIcon, ShieldCheckIcon } from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-primary/30 bg-card">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-border py-5">
          {site.badges.map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheckIcon className="size-4 shrink-0 text-primary" />
              {badge}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="md:col-span-1">
          <div className="mb-1 flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-lg warm-gradient">
              <span className="text-sm font-black text-white">AC</span>
            </div>
            <div>
              <p className="font-bold leading-tight">Aztec Contractors</p>
              <p className="text-[10px] font-medium tracking-widest text-muted-foreground uppercase">Houston, TX</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Family-owned general contractor serving Houston since {site.founded}. Quality
            workmanship, honest estimates, and a guarantee you can count on.
          </p>
          <div className="mt-4 flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="size-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-1.5 text-xs font-medium text-muted-foreground">Google Rated</span>
          </div>
          <div className="mt-5 space-y-2.5 text-sm">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-primary"
            >
              <PhoneIcon className="size-4 shrink-0 text-primary" />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <MailIcon className="size-4 shrink-0 text-primary" />
              {site.email}
            </a>
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" />
              <div className="text-xs">
                <p>{site.address.street}</p>
                <p>{site.address.city}, {site.address.state} {site.address.zip}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <span className="text-muted-foreground">{s.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'Get Free Estimate', href: '/contact' },
              { label: 'Our Services', href: '/#services' },
              { label: 'About Us', href: '/#about' },
              { label: 'Customer Reviews', href: '/#reviews' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Hours & Coverage
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>{site.hours.weekdays}</p>
            <p>{site.hours.saturday}</p>
            <p className="pt-2 text-xs font-medium text-foreground/60">Serving Greater Houston:</p>
            {['Houston', 'Katy', 'Sugar Land', 'Pearland', 'The Woodlands', 'Pasadena', 'League City'].map((city) => (
              <p key={city} className="flex items-center gap-1.5 text-xs">
                <span className="size-1 rounded-full bg-primary/50 shrink-0" />
                {city}
              </p>
            ))}
          </div>
        </div>
      </div>

      <Separator />
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row md:justify-between md:px-6">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>Est. {site.founded} · A+ BBB · Licensed & Insured · Houston, TX</p>
      </div>
    </footer>
  );
}
