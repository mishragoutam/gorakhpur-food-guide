import { useCallback, useEffect, useState } from 'react';
import type { DependencyList } from 'react';

type AsyncState<T> =
  | { status: 'loading' }
  | { status: 'error'; error: Error }
  | { status: 'ready'; data: T };

/**
 * Minimal loader for promise-returning data sources. Handles cancellation on
 * unmount / dependency change and exposes `reload` for retry buttons.
 * Swap for TanStack Query later if caching or mutations are needed.
 */
export function useAsyncData<T>(load: () => Promise<T>, deps: DependencyList) {
  const [state, setState] = useState<AsyncState<T>>({ status: 'loading' });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setState((previous) => (previous.status === 'loading' ? previous : { status: 'loading' }));

    load().then(
      (data) => {
        if (!cancelled) setState({ status: 'ready', data });
      },
      (error: unknown) => {
        if (!cancelled) {
          setState({ status: 'error', error: error instanceof Error ? error : new Error(String(error)) });
        }
      },
    );

    return () => {
      cancelled = true;
    };
    // `load` is intentionally excluded: callers describe what to reload through `deps`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, attempt]);

  const reload = useCallback(() => setAttempt((count) => count + 1), []);

  return { ...state, reload };
}
