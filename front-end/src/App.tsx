/* eslint-disable no-restricted-globals */
import './assets/styles/global.css';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './config/client';
import AppRoutes from './routes';

function App() {
  // this ensures that when a ResizeObserver is created, the provided
  // callback function is debounced with a 20ms delay, handling and
  // preventing excessive calls to the callback
  const debounce = (callback: (...args: any[]) => void, delay: number) => {
    let tid: any;

    return function (...args: any[]) {
      const ctx = self;
      tid && clearTimeout(tid);
      tid = setTimeout(() => {
        callback.apply(ctx, args);
      }, delay);
    };
  };

  const _ = (window as any).ResizeObserver;
  (window as any).ResizeObserver = class ResizeObserver extends _ {
    constructor(callback: (...args: any[]) => void) {
      callback = debounce(callback, 20);
      super(callback);
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
