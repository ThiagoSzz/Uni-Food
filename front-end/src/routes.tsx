import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@ui5/webcomponents-react';

import { Home } from './pages/Home/Home';
import { AppRoute } from './enums/AppRoutesEnum';
import { CreateReview } from './pages/CreateReview/CreateReview';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

function AppRoutes() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path={AppRoute.Home} element={<Home />} />
            <Route
              path={AppRoute.CreateReview}
              element={
                <ProtectedRoute>
                  <CreateReview />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default AppRoutes;
