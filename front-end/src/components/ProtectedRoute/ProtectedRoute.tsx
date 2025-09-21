import React, { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { AppRoute } from '../../enums/AppRoutesEnum';
import {
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  FlexBoxAlignItems,
  BusyIndicator,
  MessageStrip,
  MessageStripDesign
} from '@ui5/webcomponents-react';
import { useTranslation } from 'react-i18next';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const { t } = useTranslation();
  const [showRedirectMessage, setShowRedirectMessage] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setShowRedirectMessage(true);
      const timer = setTimeout(() => {
        setShouldRedirect(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, isAuthenticated]);

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

  // Show message and then redirect if not authenticated
  if (!isAuthenticated) {
    if (shouldRedirect) {
      return <Navigate to={AppRoute.Home} replace />;
    }

    if (showRedirectMessage) {
      return (
        <FlexBox
          direction={FlexBoxDirection.Column}
          justifyContent={FlexBoxJustifyContent.Center}
          alignItems={FlexBoxAlignItems.Center}
          style={{ minHeight: '100vh', padding: '2rem' }}
        >
          <MessageStrip
            design={MessageStripDesign.Information}
            style={{ maxWidth: '500px', marginBottom: '1rem' }}
          >
            {t('auth.loginToCreateReview')}
          </MessageStrip>
        </FlexBox>
      );
    }
  }

  // Render protected content if authenticated
  return <>{children}</>;
};
