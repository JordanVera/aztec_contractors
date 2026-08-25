import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { LocalBusinessJsonLd } from '@/components/json-ld';
import { MobileCta } from '@/components/mobile-cta';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { site } from '@/lib/site';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `General Contractor Houston TX | Roofing, Remodeling & More | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    locale: 'en_US',
    type: 'website',
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocalBusinessJsonLd />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <MobileCta />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
