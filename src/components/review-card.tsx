import { ShieldCheckIcon, StarIcon } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import type { Review } from '@/lib/services';

export function ReviewCard({ review }: { review: Review }) {
  return (
    <Card className="flex h-full flex-col">
      <CardContent className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex gap-0.5">
          {[...Array(review.rating)].map((_, i) => (
            <StarIcon
              key={i}
              className="size-4 fill-amber-400 text-amber-400"
            />
          ))}
        </div>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          &ldquo;{review.text}&rdquo;
        </p>
        <div className="flex items-center gap-2 border-t border-border pt-3">
          <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
            {review.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold">{review.name}</p>
            <p className="text-xs text-muted-foreground">
              Verified {review.source} review
            </p>
          </div>
          <ShieldCheckIcon className="ml-auto size-4 text-muted-foreground/40" />
        </div>
      </CardContent>
    </Card>
  );
}
