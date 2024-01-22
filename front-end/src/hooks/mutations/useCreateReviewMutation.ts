import { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { CreateReviewRequestDTO } from '../../interfaces/dtos/CreateReviewsRequestDTO';
import api from '../../config/api';

const CREATE_REVIEWS_MUTATION_NAME = 'createReviewsMutation';
const CREATE_REVIEWS_MUTATION_API = '/avaliacao/inclui_avaliacao_usuario';

export const useCreateReviewMutation = (options?) => {
  return useMutation<AxiosResponse<any, any>, Error, CreateReviewRequestDTO>({
    mutationKey: CREATE_REVIEWS_MUTATION_NAME,
    mutationFn: (data) => setCreateReviewMutation(data),
    retry: false,
    ...options
  });
};

const setCreateReviewMutation = (data: CreateReviewRequestDTO) => {
  return api.post(api.defaults.baseURL + CREATE_REVIEWS_MUTATION_API, data);
};
