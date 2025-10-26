import { useMutation } from 'react-query';
import api from '../../config/api';
import { LoginRequest, AuthResponse } from '../../interfaces/Auth';

const LOGIN_MUTATION_NAME = 'loginMutation';
const LOGIN_MUTATION_API = '/auth/login';

export const useLoginMutation = (options?) => {
  return useMutation<AuthResponse, Error, LoginRequest>({
    mutationKey: LOGIN_MUTATION_NAME,
    mutationFn: (credentials) => setLoginMutation(credentials),
    retry: false,
    ...options
  });
};

const setLoginMutation = async (credentials: LoginRequest): Promise<AuthResponse> => {
  try {
    const response = await api.post<AuthResponse>(LOGIN_MUTATION_API, credentials);
    return response.data;
  } catch (error: any) {
    if (error.response?.data) {
      return error.response.data;
    }
    return {
      success: false,
      message: 'Erro de conexão durante o login'
    };
  }
};
