import { ChevronDown } from 'lucide-react';
import { useId } from 'react';
import type { ChangeEventHandler, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  children: ReactNode;
  className?: string;
}

/**
 * Native <select> with a visible label. Native controls give the best mobile
 * pickers and keyboard / screen-reader support. 16px text on mobile stops iOS
 * Safari from zooming the page on focus.
 */
export function SelectField({ label, value, onChange, children, className }: SelectFieldProps) {
  const id = useId();

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold tracking-wide text-ink-600 uppercase">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className={cn(
            'h-11 w-full appearance-none rounded-xl bg-white pr-10 pl-4 text-base font-medium text-ink-900 sm:text-sm',
            'ring-1 ring-cream-300 ring-inset transition-colors hover:ring-cream-400',
          )}
        >
          {children}
        </select>
        <ChevronDown
          aria-hidden="true"
          size={18}
          className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-ink-500"
        />
      </div>
    </div>
  );
}
