import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@ui5/webcomponents-react';

import { Home } from './pages/Home/Home';
import { AppRoute } from './enums/AppRoutesEnum';
import { CreateReview } from './pages/CreateReview/CreateReview';

function AppRoutes() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Home} element={<Home />} />
          <Route path={AppRoute.CreateReview} element={<CreateReview />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default AppRoutes;
