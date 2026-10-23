import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  id: string;
  title: string;
  description?: ReactNode;
  /** Lets the heading receive programmatic focus (used after "search" / category jumps). */
  focusable?: boolean;
  className?: string;
}

export function SectionHeading({ id, title, description, focusable = false, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <h2
        id={id}
        tabIndex={focusable ? -1 : undefined}
        className="rounded-md text-3xl font-bold text-ink-900 outline-offset-8 sm:text-4xl"
      >
        {title}
      </h2>
      {description ? <p className="mt-3 text-base text-ink-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}
