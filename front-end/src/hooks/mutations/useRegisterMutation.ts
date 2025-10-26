import { useMutation } from 'react-query';
import api from '../../config/api';
import { RegisterRequest, AuthResponse } from '../../interfaces/Auth';

const REGISTER_MUTATION_NAME = 'registerMutation';
const REGISTER_MUTATION_API = '/auth/register';

export const useRegisterMutation = (options?) => {
  return useMutation<AuthResponse, Error, RegisterRequest>({
    mutationKey: REGISTER_MUTATION_NAME,
    mutationFn: (userData) => setRegisterMutation(userData),
    retry: false,
    ...options
  });
};

const setRegisterMutation = async (userData: RegisterRequest): Promise<AuthResponse> => {
  try {
    const response = await api.post<AuthResponse>(REGISTER_MUTATION_API, userData);
    return response.data;
  } catch (error: any) {
    if (error.response?.data) {
      return error.response.data;
    }
    return {
      success: false,
      message: 'Erro de conexão durante o cadastro'
    };
  }
};
