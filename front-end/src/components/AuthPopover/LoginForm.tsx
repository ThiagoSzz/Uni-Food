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
import { useLoginMutation } from '../../hooks/mutations/useLoginMutation';
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

  const loginMutation = useLoginMutation({
    onSuccess: (response) => {
      if (response.success && response.data) {
        login(response.data.token, response.data.user);
        onSuccess();
      } else {
        if (
          response.message?.includes('Email ou senha incorretos')
        ) {
          onError(t('auth.invalidCredentials'));
        } else {
          onError(response.message || t('auth.loginError'));
        }
      }
      setIsLoading(false);
    },
    onError: (error: any) => {
      if (
        error.message?.includes('Email ou senha incorretos')
      ) {
        onError(t('auth.invalidCredentials'));
      } else {
        onError(t('auth.unexpectedError'));
      }
      setIsLoading(false);
    }
  });

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
    loginMutation.mutate(formData);
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
