import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@ui5/webcomponents-react';

import { Home } from './pages/Home/Home';
import { AppRoute } from './enums/AppRoutesEnum';

function AppRoutes() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Home} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default AppRoutes;
