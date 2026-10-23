function prefersReducedMotion(): boolean {
  return typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Scrolls an element into view (the sticky header is handled by `scroll-padding-top`)
 * and optionally moves keyboard / screen-reader focus to it.
 */
export function scrollToId(id: string, options: { focus?: boolean } = {}): void {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });

  if (options.focus) {
    element.focus({ preventScroll: true });
  }
}
