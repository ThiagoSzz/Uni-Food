import { useEffect, useRef, useCallback } from 'react';

interface UseResizeObserverOptions {
  debounceMs?: number;
  onResize?: (entry: ResizeObserverEntry) => void;
}

export const useResizeObserver = (
  elementRef: React.RefObject<Element>,
  options: UseResizeObserverOptions = {}
) => {
  const { debounceMs = 16, onResize } = options;
  const timeoutRef = useRef<NodeJS.Timeout>();
  const observerRef = useRef<ResizeObserver>();

  const debouncedCallback = useCallback(
    (entries: ResizeObserverEntry[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        if (entries.length > 0 && onResize) {
          onResize(entries[0]);
        }
      }, debounceMs);
    },
    [onResize, debounceMs]
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    try {
      observerRef.current = new ResizeObserver(debouncedCallback);
      observerRef.current.observe(element);
    } catch (error) {
      console.warn('ResizeObserver not supported or failed to initialize:', error);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [elementRef, debouncedCallback]);

  return observerRef.current;
};
