import { useQuery } from 'react-query';
import { ReviewsApiService } from '../../services/reviewsService';

const COURSE_NAMES_QUERY_KEY = 'courseNames';

export const useCourseNames = () => {
  return useQuery<string[], Error>({
    queryKey: COURSE_NAMES_QUERY_KEY,
    queryFn: ReviewsApiService.getCourseNames,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10
  });
};
