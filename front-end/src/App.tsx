import './assets/styles/global.css';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './config/client';
import AppRoutes from './routes';
import { useResizeObserverErrorHandler } from './hooks/useResizeObserverErrorHandler';

function App() {
  // Handle ResizeObserver errors
  useResizeObserverErrorHandler();

  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
