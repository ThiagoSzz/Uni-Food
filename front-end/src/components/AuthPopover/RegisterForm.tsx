import React, { useState } from 'react';
import {
  Label,
  Input,
  Button,
  ButtonDesign,
  Select,
  Option,
  FlexBox,
  FlexBoxDirection
} from '@ui5/webcomponents-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { AuthApiService } from '../../services/authService';
import { RegisterRequest } from '../../interfaces/Auth';

interface RegisterFormProps {
  onSuccess: () => void;
  onError: (error: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSuccess,
  onError,
  isLoading,
  setIsLoading
}) => {
  const { t } = useTranslation();
  const { login } = useAuth();

  const [formData, setFormData] = useState<RegisterRequest>({
    email: '',
    senha: '',
    nome: '',
    sexo: '',
    idade: '',
    preferencia_alimentar: '',
    tipo: 1,
    nome_curso: '',
    periodo: ''
  });

  const handleInputChange = (field: keyof RegisterRequest) => (event: any) => {
    let value = event.target ? event.target.value : event.detail.selectedOption.value;

    if (field === 'tipo') {
      value = parseInt(value);
    }

    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.email || !formData.senha || !formData.nome) {
      onError(t('auth.fillRequired'));
      return;
    }

    if (formData.senha.length < 6) {
      onError(t('auth.passwordMin'));
      return;
    }

    setIsLoading(true);

    try {
      const response = await AuthApiService.register(formData);

      if (response.success && response.data) {
        login(response.data.token, response.data.user);
        onSuccess();
      } else {
        // Handle specific error messages
        if (
          response.message?.includes('User already exists') ||
          response.message?.includes('Usuário já existe')
        ) {
          onError(t('auth.emailExists'));
        } else {
          onError(response.message || t('auth.registerError'));
        }
      }
    } catch (error: any) {
      // Handle thrown errors
      if (
        error.message?.includes('User already exists') ||
        error.message?.includes('Usuário já existe')
      ) {
        onError(t('auth.emailExists'));
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
          <Label required>{t('auth.name')}:</Label>
          <Input
            type="Text"
            value={formData.nome}
            onChange={handleInputChange('nome')}
            placeholder={t('auth.namePlaceholder')}
            required
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
        </div>

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
            placeholder={t('auth.passwordMinPlaceholder')}
            required
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
        </div>

        <FlexBox style={{ gap: '1rem' }}>
          <div style={{ flex: 1 }}>
            <div style={{ width: '100%' }}>
              <Label>{t('auth.gender')}:</Label>
              <Select
                value={formData.sexo}
                onChange={handleInputChange('sexo')}
                style={{ width: '100%', boxSizing: 'border-box' }}
              >
                <Option value="">{t('auth.select')}</Option>
                <Option value="M">{t('auth.male')}</Option>
                <Option value="F">{t('auth.female')}</Option>
                <Option value="O">{t('auth.other')}</Option>
              </Select>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ width: '100%' }}>
              <Label>{t('auth.age')}:</Label>
              <Input
                type="Number"
                value={formData.idade}
                onChange={handleInputChange('idade')}
                placeholder={t('auth.agePlaceholder')}
                style={{ width: '100%', boxSizing: 'border-box' }}
              />
            </div>
          </div>
        </FlexBox>

        <div style={{ width: '100%' }}>
          <Label>{t('auth.diet')}:</Label>
          <Select
            value={formData.preferencia_alimentar}
            onChange={handleInputChange('preferencia_alimentar')}
            style={{ width: '100%', boxSizing: 'border-box' }}
          >
            <Option value="">{t('auth.select')}</Option>
            <Option value="Onívoro">{t('diet.onívoro')}</Option>
            <Option value="Vegetariano">{t('diet.vegetariano')}</Option>
            <Option value="Vegano">{t('diet.vegano')}</Option>
          </Select>
        </div>

        <div style={{ width: '100%' }}>
          <Label>{t('auth.courseName')}:</Label>
          <Input
            type="Text"
            value={formData.nome_curso}
            onChange={handleInputChange('nome_curso')}
            placeholder={t('auth.coursePlaceholder')}
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ width: '100%' }}>
          <Label>{t('auth.period')}:</Label>
          <Input
            type="Text"
            value={formData.periodo}
            onChange={handleInputChange('periodo')}
            placeholder={t('auth.periodPlaceholder')}
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ width: '100%' }}>
          <Label>{t('auth.type')}:</Label>
          <Select
            value={formData.tipo?.toString()}
            onChange={handleInputChange('tipo')}
            style={{ width: '100%', boxSizing: 'border-box' }}
          >
            <Option value="1">{t('auth.type.student')}</Option>
            <Option value="6">{t('auth.type.teacher')}</Option>
            <Option value="7">{t('auth.type.staff')}</Option>
          </Select>
        </div>

        <Button
          design={ButtonDesign.Emphasized}
          disabled={isLoading}
          onClick={handleSubmit}
          style={{ width: '100%', marginTop: '1rem', boxSizing: 'border-box' }}
        >
          {isLoading ? t('auth.creatingAccount') : t('auth.createAccount')}
        </Button>
      </FlexBox>
    </div>
  );
};
