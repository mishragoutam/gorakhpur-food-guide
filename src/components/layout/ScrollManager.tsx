import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import { scrollToId } from '@/lib/scroll';

/**
 * Client-side navigation does not reset scroll or follow #anchors by itself.
 * - New page         -> scroll to top
 * - Link with #hash  -> scroll to that section (works for "Explore Restaurants")
 * - Back / forward   -> left to the browser
 */
export function ScrollManager() {
  const { key, hash } = useLocation();
  const navigationType = useNavigationType();
  const isFirstRender = useRef(true);

  useEffect(() => {
    const initialLoad = isFirstRender.current;
    isFirstRender.current = false;

    if (navigationType === 'POP' && !initialLoad) return;

    if (hash) {
      scrollToId(decodeURIComponent(hash.slice(1)));
    } else if (!initialLoad) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [key, hash, navigationType]);

  return null;
}
