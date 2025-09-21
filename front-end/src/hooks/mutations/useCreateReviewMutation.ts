import { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { CreateReviewRequestDTO } from '../../interfaces/dtos/CreateReviewsRequestDTO';
import api from '../../config/api';

const CREATE_REVIEWS_MUTATION_NAME = 'createReviewsMutation';
const CREATE_REVIEWS_MUTATION_API = '/create-review';

export const useCreateReviewMutation = (options?) => {
  return useMutation<AxiosResponse<any, any>, Error, CreateReviewRequestDTO>({
    mutationKey: CREATE_REVIEWS_MUTATION_NAME,
    mutationFn: (data) => setCreateReviewMutation(data),
    retry: false,
    ...options
  });
};

const setCreateReviewMutation = async (data: CreateReviewRequestDTO) => {
  try {
    const response = await api.post(CREATE_REVIEWS_MUTATION_API, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
