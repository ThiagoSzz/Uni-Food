import { useQuery } from 'react-query';
import api from '../../config/api';
import { ApiResponse, User } from '../../interfaces/Auth';

const GET_PROFILE_QUERY_NAME = 'getProfile';
const GET_PROFILE_QUERY_API = '/auth/profile';

export const useGetProfileQuery = (options?) => {
  return useQuery<ApiResponse<User>, Error>({
    queryKey: GET_PROFILE_QUERY_NAME,
    queryFn: () => getProfileQuery(),
    retry: false,
    ...options
  });
};

const getProfileQuery = async (): Promise<ApiResponse<User>> => {
  try {
    const response = await api.get<ApiResponse<User>>(GET_PROFILE_QUERY_API);
    return response.data;
  } catch (error: any) {
    if (error.response?.data) {
      return error.response.data;
    }
    return {
      success: false,
      message: 'Erro de conexão ao buscar perfil'
    };
  }
};
