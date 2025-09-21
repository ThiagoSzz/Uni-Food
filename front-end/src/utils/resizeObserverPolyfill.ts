import ResizeObserverPolyfill from 'resize-observer-polyfill';

class SafeResizeObserver extends ResizeObserverPolyfill {
  constructor(callback: ResizeObserverCallback) {
    const safeCallback: ResizeObserverCallback = (entries, observer) => {
      try {
        // Use requestAnimationFrame to avoid ResizeObserver loop errors
        requestAnimationFrame(() => {
          callback(entries, observer);
        });
      } catch (error) {
        if (error instanceof Error && error.message.includes('ResizeObserver loop')) {
          return;
        }
        throw error;
      }
    };

    super(safeCallback);
  }
}

// Replace the global ResizeObserver with safer version
if (typeof window !== 'undefined') {
  if (!window.ResizeObserver || window.ResizeObserver === ResizeObserverPolyfill) {
    window.ResizeObserver = SafeResizeObserver as any;
  }
}

export default SafeResizeObserver;
