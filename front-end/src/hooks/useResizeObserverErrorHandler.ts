import { useEffect } from 'react';

export const useResizeObserverErrorHandler = () => {
  useEffect(() => {
    // Suppress ResizeObserver loop errors
    const handleResizeObserverError = (event: ErrorEvent) => {
      const message = event.message || event.error?.message || '';

      if (
        typeof message === 'string' &&
        (message === 'ResizeObserver loop completed with undelivered notifications.' ||
          message.includes('ResizeObserver loop'))
      ) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();

        // Hide the error overlay in development
        const errorOverlay = document.getElementById('webpack-dev-server-client-overlay-div');
        if (errorOverlay) {
          errorOverlay.style.display = 'none';
        }

        return false;
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const message = reason?.message || reason?.toString?.() || '';

      if (typeof message === 'string' && message.includes('ResizeObserver loop')) {
        event.preventDefault();
        return false;
      }
    };

    window.addEventListener('error', handleResizeObserverError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleResizeObserverError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);
};
