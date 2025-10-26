import { useQuery } from 'react-query';
import api from '../../config/api';

const GET_REVIEWS_QUERY_NAME = 'getReviews';
const GET_REVIEWS_QUERY_API = '/get-reviews';

export const useGetReviewsQuery = (options?) => {
  return useQuery<any, Error>({
    queryKey: GET_REVIEWS_QUERY_NAME,
    queryFn: () => getReviewsQuery(),
    retry: false,
    ...options
  });
};

const getReviewsQuery = async () => {
  const response = await api.get(GET_REVIEWS_QUERY_API);
  return response.data;
};
