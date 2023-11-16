import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@ui5/webcomponents-react';

import { Home } from './pages/Home/Home';

function Routes() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        {/* <Route path="/new-review" exact component={NewReview} />
        <Route path="/authentication/register" exact component={Register} />
        <Route path="/authentication/login" exact component={Login} /> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Routes;
