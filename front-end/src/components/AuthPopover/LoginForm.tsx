import React, { useState } from 'react';
import {
  Label,
  Input,
  Button,
  ButtonDesign,
  FlexBox,
  FlexBoxDirection
} from '@ui5/webcomponents-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { AuthApiService } from '../../services/authService';
import { LoginRequest } from '../../interfaces/Auth';

interface LoginFormProps {
  onSuccess: () => void;
  onError: (error: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSuccess,
  onError,
  isLoading,
  setIsLoading
}) => {
  const { t } = useTranslation();
  const { login } = useAuth();

  const [formData, setFormData] = useState<LoginRequest>({
    email: '',
    senha: ''
  });

  const handleInputChange = (field: keyof LoginRequest) => (event: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.email || !formData.senha) {
      onError(t('auth.fillAllFields'));
      return;
    }

    setIsLoading(true);

    try {
      const response = await AuthApiService.login(formData);

      if (response.success && response.data) {
        login(response.data.token, response.data.user);
        onSuccess();
      } else {
        if (
          response.message?.includes('Invalid email or password') ||
          response.message?.includes('Email ou senha inválidos')
        ) {
          onError(t('auth.invalidCredentials'));
        } else {
          onError(response.message || t('auth.loginError'));
        }
      }
    } catch (error: any) {
      if (
        error.message?.includes('Invalid email or password') ||
        error.message?.includes('Email ou senha inválidos')
      ) {
        onError(t('auth.invalidCredentials'));
      } else {
        onError(t('auth.unexpectedError'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ width: '100%', boxSizing: 'border-box' }}>
      <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem', width: '100%' }}>
        <div style={{ width: '100%' }}>
          <Label required>{t('auth.email')}:</Label>
          <Input
            type="Email"
            value={formData.email}
            onChange={handleInputChange('email')}
            placeholder={t('auth.emailPlaceholder')}
            required
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ width: '100%' }}>
          <Label required>{t('auth.password')}:</Label>
          <Input
            type="Password"
            value={formData.senha}
            onChange={handleInputChange('senha')}
            placeholder={t('auth.passwordPlaceholder')}
            required
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
        </div>

        <Button
          design={ButtonDesign.Emphasized}
          disabled={isLoading}
          onClick={handleSubmit}
          style={{ width: '100%', marginTop: '1rem', boxSizing: 'border-box' }}
        >
          {isLoading ? t('auth.loggingIn') : t('auth.login')}
        </Button>
      </FlexBox>
    </div>
  );
};
