import React, { useState } from 'react';
import {
  Label,
  Input,
  Button,
  ButtonDesign,
  FlexBox,
  FlexBoxDirection
} from '@ui5/webcomponents-react';
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
      onError('Por favor, preencha todos os campos');
      return;
    }

    setIsLoading(true);

    try {
      const response = await AuthApiService.login(formData);

      if (response.success && response.data) {
        login(response.data.token, response.data.user);
        onSuccess();
      } else {
        // Translate specific error messages to Portuguese
        if (
          response.message?.includes('Invalid email or password') ||
          response.message?.includes('Email ou senha inválidos')
        ) {
          onError('Email ou senha incorretos');
        } else {
          onError(response.message || 'Erro ao fazer login');
        }
      }
    } catch (error: any) {
      // Handle thrown errors (like from the backend service)
      if (
        error.message?.includes('Invalid email or password') ||
        error.message?.includes('Email ou senha inválidos')
      ) {
        onError('Email ou senha incorretos');
      } else {
        onError('Erro inesperado. Tente novamente.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ width: '100%', boxSizing: 'border-box' }}>
      <FlexBox direction={FlexBoxDirection.Column} style={{ gap: '1rem', width: '100%' }}>
        <div style={{ width: '100%' }}>
          <Label required>Email:</Label>
          <Input
            type="Email"
            value={formData.email}
            onChange={handleInputChange('email')}
            placeholder="seu.email@universidade.br"
            required
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ width: '100%' }}>
          <Label required>Senha:</Label>
          <Input
            type="Password"
            value={formData.senha}
            onChange={handleInputChange('senha')}
            placeholder="Digite sua senha"
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
          {isLoading ? 'Entrando...' : 'Entrar'}
        </Button>
      </FlexBox>
    </div>
  );
};
