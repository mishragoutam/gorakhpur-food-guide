import { useEffect } from 'react';
import { BRAND_NAME } from '@/components/layout/Logo';

export const DEFAULT_PAGE_TITLE = `${BRAND_NAME} | Discover the best food in Gorakhpur`;

/** Keeps the browser tab / history title in step with the current route. */
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${BRAND_NAME}` : DEFAULT_PAGE_TITLE;
  }, [title]);
}
