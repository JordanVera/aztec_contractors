'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MenuIcon, PhoneIcon, XIcon } from 'lucide-react';

import { SiteLogo } from '@/components/site-logo';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { getServicesByCategory, serviceCategories } from '@/lib/services';
import { nav, site } from '@/lib/site';
import { cn } from '@/lib/utils';

function isNavActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

const linkClass = (active: boolean) =>
  cn(
    'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
    active ? 'text-primary' : 'text-foreground/70 hover:text-foreground',
  );

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const servicesActive = isNavActive(pathname, '/services');

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <SiteLogo size="lg" priority />

        <div className="hidden items-center gap-3 lg:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {nav.map((item) => {
                if (item.label === 'Services') {
                  return (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuTrigger
                        className={cn(
                          navigationMenuTriggerStyle(),
                          'h-auto bg-transparent px-3 py-1.5 hover:bg-transparent focus:bg-transparent data-open:bg-transparent data-popup-open:bg-transparent',
                          servicesActive
                            ? 'text-primary'
                            : 'text-foreground/70 hover:text-foreground',
                        )}
                      >
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-136 grid-cols-2 gap-6 p-4">
                          {serviceCategories.map((category) => (
                            <div key={category.id}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={`/services#${category.id}`}
                                  className="mb-1 block rounded-md px-2 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase"
                                >
                                  {category.name}
                                </Link>
                              </NavigationMenuLink>
                              <ul className="flex flex-col">
                                {getServicesByCategory(category.id).map(
                                  (service) => (
                                    <li key={service.slug}>
                                      <NavigationMenuLink asChild>
                                        <Link
                                          href={`/services/${service.slug}`}
                                          className="block rounded-md px-2 py-1.5 text-sm text-foreground/80 hover:text-foreground"
                                        >
                                          {service.name}
                                        </Link>
                                      </NavigationMenuLink>
                                    </li>
                                  ),
                                )}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-border px-4 py-3">
                          <NavigationMenuLink asChild>
                            <Link
                              href="/services"
                              className="block text-center text-sm font-semibold text-primary"
                            >
                              View all services
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }

                if (item.label === 'Free Estimate') {
                  return (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="ml-2 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={linkClass(isNavActive(pathname, item.href))}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <a
            href={site.phoneHref}
            className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-semibold transition-colors hover:bg-muted sm:flex"
          >
            <PhoneIcon className="size-3.5 text-primary" />
            Call
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                {open ? (
                  <XIcon className="size-4" />
                ) : (
                  <MenuIcon className="size-4" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader className="pb-2">
                <SheetTitle>
                  <SiteLogo size="sm" />
                </SheetTitle>
              </SheetHeader>
              <div className="px-4 pb-2">
                <Button asChild className="h-11 w-full">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Get Free Estimate
                  </Link>
                </Button>
                <a
                  href={site.phoneHref}
                  onClick={() => setOpen(false)}
                  className="mt-2 flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-border text-sm font-medium"
                >
                  <PhoneIcon className="size-4" />
                  {site.phone}
                </a>
              </div>
              <nav className="flex flex-col gap-0.5 px-4 pb-8 pt-4">
                {nav
                  .filter((i) => i.label !== 'Free Estimate')
                  .map((item) =>
                    item.label === 'Services' ? (
                      <Accordion
                        key={item.href}
                        type="single"
                        collapsible
                        defaultValue={servicesActive ? 'services' : undefined}
                      >
                        <AccordionItem value="services" className="border-none">
                          <AccordionTrigger
                            className={cn(
                              'rounded-lg px-3 py-2.5 hover:no-underline',
                              servicesActive
                                ? 'bg-primary/10 text-primary'
                                : 'text-foreground hover:bg-muted',
                            )}
                          >
                            Services
                          </AccordionTrigger>
                          <AccordionContent className="pb-1 [&_a]:no-underline">
                            <Link
                              href="/services"
                              onClick={() => setOpen(false)}
                              className="mb-1 block rounded-lg px-3 py-2 text-sm font-medium text-primary"
                            >
                              All services
                            </Link>
                            {serviceCategories.map((category) => (
                              <div key={category.id} className="mt-2">
                                <p className="px-3 pb-1 text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                                  {category.name}
                                </p>
                                {getServicesByCategory(category.id).map(
                                  (service) => (
                                    <Link
                                      key={service.slug}
                                      href={`/services/${service.slug}`}
                                      onClick={() => setOpen(false)}
                                      className={cn(
                                        'block rounded-lg px-3 py-2 text-sm transition-colors',
                                        pathname === `/services/${service.slug}`
                                          ? 'bg-primary/10 text-primary'
                                          : 'text-foreground/80 hover:bg-muted hover:text-foreground',
                                      )}
                                    >
                                      {service.name}
                                    </Link>
                                  ),
                                )}
                              </div>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          'rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                          isNavActive(pathname, item.href)
                            ? 'bg-primary/10 text-primary'
                            : 'text-foreground hover:bg-muted',
                        )}
                      >
                        {item.label}
                      </Link>
                    ),
                  )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
