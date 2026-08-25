'use client';

import { ArrowRightIcon, ClockIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { services } from '@/lib/services';
import { formsubmitEndpoint, site } from '@/lib/site';

export function LeadForm({ defaultService }: { defaultService?: string }) {
  const nextUrl = `${site.url}/thank-you`;

  return (
    <form
      action={formsubmitEndpoint}
      method="POST"
      className="grid gap-5 sm:grid-cols-2"
    >
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="hidden" name="_subject" value={`New estimate request — ${site.name}`} />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <Field label="First name" htmlFor="firstName">
        <Input id="firstName" name="firstName" required autoComplete="given-name" className="h-11" />
      </Field>
      <Field label="Last name" htmlFor="lastName">
        <Input id="lastName" name="lastName" required autoComplete="family-name" className="h-11" />
      </Field>
      <Field label="Phone number" htmlFor="phone">
        <Input id="phone" name="phone" type="tel" required autoComplete="tel" className="h-11" />
      </Field>
      <Field label="Email" htmlFor="email">
        <Input id="email" name="email" type="email" autoComplete="email" className="h-11" />
      </Field>
      <Field label="Property address" htmlFor="address" className="sm:col-span-2">
        <Input id="address" name="address" autoComplete="street-address" placeholder="Street address, Houston TX" className="h-11" />
      </Field>
      <Field label="Service needed" htmlFor="service" className="sm:col-span-2">
        <Select name="service" defaultValue={defaultService ?? ''}>
          <SelectTrigger id="service" className="h-11 w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent position="popper">
            {services.map((s) => (
              <SelectItem key={s.slug} value={s.formValue}>
                {s.formValue}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <div className="grid gap-2 sm:col-span-2">
        <Label htmlFor="message">Tell us about your project</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Describe what's going on — damage details, scope, timeline, or insurance situation."
          className="min-h-24"
        />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" className="h-12 w-full px-6 text-base font-semibold">
          Request my free estimate
          <ArrowRightIcon className="size-4" />
        </Button>
        <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <ClockIcon className="size-3.5 shrink-0" />
          We typically respond within a few hours during business days.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid gap-2 ${className ?? ''}`}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
