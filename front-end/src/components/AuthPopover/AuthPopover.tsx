import React, { useState, useEffect } from 'react';
import {
  Popover,
  Title,
  TitleLevel,
  Button,
  ButtonDesign,
  MessageStrip,
  MessageStripDesign,
  Text,
  FlexBox,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  FlexBoxAlignItems
} from '@ui5/webcomponents-react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { useTranslation } from 'react-i18next';

interface AuthPopoverProps {
  opener?: string;
  open?: boolean;
  onClose?: () => void;
}

export const AuthPopover: React.FC<AuthPopoverProps> = ({ opener, open, onClose }) => {
  const { t } = useTranslation();

  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Reset to login mode and clear messages when popover opens
  useEffect(() => {
    if (open) {
      setIsLoginMode(true);
      setError(null);
      setSuccess(null);
      setIsLoading(false);
    }
  }, [open]);

  const clearMessages = () => {
    if (error) setError(null);
    if (success) setSuccess(null);
  };

  const switchMode = () => {
    setIsLoginMode(!isLoginMode);
    clearMessages();
  };

  const handleSuccess = () => {
    setSuccess(isLoginMode ? 'Login realizado com sucesso!' : 'Conta criada com sucesso!');

    // If it was a registration, switch to login mode for next time
    if (!isLoginMode) {
      setIsLoginMode(true);
    }

    setTimeout(() => {
      onClose?.();
    }, 1000);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
  };

  return (
    <Popover
      opener={opener}
      open={open}
      onAfterClose={onClose}
      placementType="Bottom"
      style={{ width: '400px' }}
    >
      <div
        style={{
          padding: '1.5rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        <FlexBox
          direction={FlexBoxDirection.Column}
          alignItems={FlexBoxAlignItems.Center}
          style={{ marginBottom: '1.5rem' }}
        >
          <Title level={TitleLevel.H3}>{isLoginMode ? t('auth.login') : t('auth.register')}</Title>
          <Text style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            {isLoginMode ? t('auth.loginDesc') : t('auth.registerDesc')}
          </Text>
        </FlexBox>

        {error && (
          <MessageStrip
            design={MessageStripDesign.Negative}
            style={{ marginBottom: '1rem' }}
            onClose={() => setError(null)}
          >
            {error}
          </MessageStrip>
        )}

        {success && (
          <MessageStrip
            design={MessageStripDesign.Positive}
            style={{ marginBottom: '1rem' }}
            onClose={() => setSuccess(null)}
          >
            {success}
          </MessageStrip>
        )}

        {isLoginMode ? (
          <LoginForm
            onSuccess={handleSuccess}
            onError={handleError}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        ) : (
          <RegisterForm
            onSuccess={handleSuccess}
            onError={handleError}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        )}

        <FlexBox justifyContent={FlexBoxJustifyContent.Center} style={{ marginTop: '1.5rem' }}>
          <Text>
            {isLoginMode ? t('auth.noAccount') : t('auth.hasAccount')}
            <Button
              design={ButtonDesign.Transparent}
              onClick={switchMode}
              style={{
                color: '#0854a0',
                textDecoration: 'underline',
                padding: '0',
                height: 'auto',
                minHeight: 'auto'
              }}
            >
              {isLoginMode ? t('auth.registerCta') : t('auth.loginCta')}
            </Button>
          </Text>
        </FlexBox>
      </div>
    </Popover>
  );
};
