import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { AppRoute } from '../../enums/AppRoutesEnum';
import {
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  FlexBoxAlignItems,
  BusyIndicator
} from '@ui5/webcomponents-react';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  // Show loading indicator while checking authentication status
  if (isLoading) {
    return (
      <FlexBox
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Center}
        style={{ minHeight: '100vh' }}
      >
        <BusyIndicator active size="Large" />
      </FlexBox>
    );
  }

  // Redirect to home if not authenticated (login will be handled by popover)
  if (!isAuthenticated) {
    return <Navigate to={AppRoute.Home} replace />;
  }

  // Render protected content if authenticated
  return <>{children}</>;
};
