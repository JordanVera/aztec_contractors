'use client';

import { FadeIn } from '@/components/motion';
import { Section, SectionHeading } from '@/components/section';
import { YoutubeEmbed } from '@/components/youtube-embed';

const VIDEO_ID = 'pr3P6d2KZKk';

export function VideoShowcase() {
  return (
    <Section className="bg-card/30">
      <SectionHeading
        eyebrow="See Aztec at work"
        title="Watch how we build for Houston families"
        description="A look at Aztec Contractors on the job — the crews, the process, and the standard Reynaldo's team holds on every roof, remodel, and restoration."
        centered
      />
      <FadeIn className="mx-auto max-w-4xl">
        <YoutubeEmbed
          videoId={VIDEO_ID}
          title="Aztec Contractors marketing video"
        />
      </FadeIn>
    </Section>
  );
}
