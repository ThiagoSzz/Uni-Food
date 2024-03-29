import { useMutation } from 'react-query';
import api from '../../config/api';
import { AxiosResponse } from 'axios';

const GET_REVIEWS_MUTATION_NAME = 'getReviewsMutation';
const GET_REVIEWS_MUTATION_API = '/get-reviews';

export const useGetReviewsMutation = (options?) => {
  return useMutation<AxiosResponse<any, any>, Error>({
    mutationKey: GET_REVIEWS_MUTATION_NAME,
    mutationFn: () => setGetReviewsMutation(),
    retry: false,
    ...options
  });
};

const setGetReviewsMutation = async () => {
  const result = await api.get(api.defaults.baseURL + GET_REVIEWS_MUTATION_API).then((result) => {
    return result;
  });

  return result;
};
