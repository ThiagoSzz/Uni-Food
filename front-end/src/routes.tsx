import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@ui5/webcomponents-react';

import { Home } from './pages/Home/Home';

function Routes() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Route path="/" exact render={() => <Home />} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Routes;
