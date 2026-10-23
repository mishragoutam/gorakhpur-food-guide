import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/cn';

type Tone = 'neutral' | 'accent' | 'onImage';

const tones: Record<Tone, string> = {
  neutral: 'bg-cream-200 text-ink-800',
  accent: 'bg-accent-50 text-accent-700 ring-1 ring-inset ring-accent-200',
  onImage: 'bg-white/90 text-ink-900 shadow-card backdrop-blur-sm',
};

export function Badge({
  tone = 'neutral',
  className,
  ...props
}: ComponentPropsWithoutRef<'span'> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold leading-none',
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
