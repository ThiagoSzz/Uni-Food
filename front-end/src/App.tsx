import Routes from './routes';

import './assets/styles/global.css';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './config/client';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}

export default App;
