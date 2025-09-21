// Development-only utility to suppress ResizeObserver errors in webpack overlay
export const suppressResizeObserverErrors = () => {
  if (process.env.NODE_ENV === 'development') {
    // Override console.error to filter out ResizeObserver loop errors
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
      const message = args.join(' ');
      if (
        typeof message === 'string' &&
        (message.includes('ResizeObserver loop completed with undelivered notifications') ||
          message.includes('ResizeObserver loop limit exceeded'))
      ) {
        return;
      }
      originalConsoleError.apply(console, args);
    };

    const handleError = (event: ErrorEvent) => {
      const message = event.message || event.error?.message || '';

      if (typeof message === 'string' && message.includes('ResizeObserver loop')) {
        event.preventDefault();
        event.stopImmediatePropagation();

        const errorOverlay =
          document.querySelector('[data-test-id="error-overlay"]') ||
          document.getElementById('webpack-dev-server-client-overlay') ||
          document.getElementById('webpack-dev-server-client-overlay-div');

        if (errorOverlay) {
          (errorOverlay as HTMLElement).style.display = 'none';
        }

        return false;
      }
    };

    window.addEventListener('error', handleError, true);

    return () => {
      console.error = originalConsoleError;
      window.removeEventListener('error', handleError, true);
    };
  }

  return () => {}; // No-op in production
};
