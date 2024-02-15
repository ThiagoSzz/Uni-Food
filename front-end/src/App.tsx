/* eslint-disable no-restricted-globals */
import './assets/styles/global.css';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './config/client';
import AppRoutes from './routes';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
