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
      onError('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    if (formData.senha.length < 6) {
      onError('A senha deve ter pelo menos 6 caracteres');
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
          onError('Este email já está cadastrado');
        } else {
          onError(response.message || 'Erro ao criar conta');
        }
      }
    } catch (error: any) {
      // Handle thrown errors
      if (
        error.message?.includes('User already exists') ||
        error.message?.includes('Usuário já existe')
      ) {
        onError('Este email já está cadastrado');
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
          <Label required>Nome:</Label>
          <Input
            type="Text"
            value={formData.nome}
            onChange={handleInputChange('nome')}
            placeholder="Seu nome completo"
            required
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
        </div>

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
            placeholder="Mínimo 6 caracteres"
            required
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
        </div>

        <FlexBox style={{ gap: '1rem' }}>
          <div style={{ flex: 1 }}>
            <div style={{ width: '100%' }}>
              <Label>Sexo:</Label>
              <Select
                value={formData.sexo}
                onChange={handleInputChange('sexo')}
                style={{ width: '100%', boxSizing: 'border-box' }}
              >
                <Option value="">Selecione</Option>
                <Option value="M">Masculino</Option>
                <Option value="F">Feminino</Option>
                <Option value="O">Outro</Option>
              </Select>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ width: '100%' }}>
              <Label>Idade:</Label>
              <Input
                type="Number"
                value={formData.idade}
                onChange={handleInputChange('idade')}
                placeholder="Ex: 20"
                style={{ width: '100%', boxSizing: 'border-box' }}
              />
            </div>
          </div>
        </FlexBox>

        <div style={{ width: '100%' }}>
          <Label>Preferência Alimentar:</Label>
          <Select
            value={formData.preferencia_alimentar}
            onChange={handleInputChange('preferencia_alimentar')}
            style={{ width: '100%', boxSizing: 'border-box' }}
          >
            <Option value="">Selecione</Option>
            <Option value="Onívoro">Onívoro</Option>
            <Option value="Vegetariano">Vegetariano</Option>
            <Option value="Vegano">Vegano</Option>
          </Select>
        </div>

        <div style={{ width: '100%' }}>
          <Label>Nome do Curso:</Label>
          <Input
            type="Text"
            value={formData.nome_curso}
            onChange={handleInputChange('nome_curso')}
            placeholder="Ex: Ciência da Computação"
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ width: '100%' }}>
          <Label>Período:</Label>
          <Input
            type="Text"
            value={formData.periodo}
            onChange={handleInputChange('periodo')}
            placeholder="Ex: 2024.1"
            style={{ width: '100%', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ width: '100%' }}>
          <Label>Tipo:</Label>
          <Select
            value={formData.tipo?.toString()}
            onChange={handleInputChange('tipo')}
            style={{ width: '100%', boxSizing: 'border-box' }}
          >
            <Option value="1">Estudante</Option>
            <Option value="6">Professor</Option>
            <Option value="7">Funcionário</Option>
          </Select>
        </div>

        <Button
          design={ButtonDesign.Emphasized}
          disabled={isLoading}
          onClick={handleSubmit}
          style={{ width: '100%', marginTop: '1rem', boxSizing: 'border-box' }}
        >
          {isLoading ? 'Criando conta...' : 'Criar conta'}
        </Button>
      </FlexBox>
    </div>
  );
};
