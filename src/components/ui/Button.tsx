import type { ComponentPropsWithoutRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark';
type Size = 'sm' | 'md' | 'lg';

interface ButtonStyleProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap ' +
  'transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary: 'bg-accent-600 text-white shadow-card hover:bg-accent-700',
  secondary: 'bg-white text-ink-900 ring-1 ring-inset ring-cream-300 hover:bg-cream-50 hover:ring-cream-400',
  ghost: 'text-ink-800 hover:bg-cream-200',
  onDark: 'bg-accent-500 text-ink-900 hover:bg-accent-400',
};

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 px-5 text-[0.9375rem]',
  lg: 'h-12 px-7 text-base',
};

/** Shared by <Button> and <ButtonLink> so links and buttons look identical. */
function buttonClasses({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
}: ButtonStyleProps & { className?: string } = {}): string {
  return cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className);
}

export function Button({
  variant,
  size,
  fullWidth,
  className,
  type = 'button',
  ...props
}: ComponentPropsWithoutRef<'button'> & ButtonStyleProps) {
  return <button type={type} className={buttonClasses({ variant, size, fullWidth, className })} {...props} />;
}

export function ButtonLink({
  variant,
  size,
  fullWidth,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Link> & ButtonStyleProps) {
  return <Link className={buttonClasses({ variant, size, fullWidth, className })} {...props} />;
}
