type ClassValue = string | false | null | undefined;

/**
 * Joins truthy class names. Small stand-in for clsx to avoid an extra dependency.
 *
 * It does NOT resolve conflicting Tailwind classes. Passing `hidden` to a component that already
 * sets `inline-flex` leaves both in the output, and `inline-flex` wins. To hide such a component
 * at some breakpoints use a variant instead: `max-sm:hidden`, `max-lg:hidden`, `sm:hidden`.
 */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ');
}
