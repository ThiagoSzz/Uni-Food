import { useQuery } from 'react-query';
import api from '../../config/api';

const GET_COURSE_NAMES_QUERY_NAME = 'getCourseNames';
const GET_COURSE_NAMES_QUERY_API = '/get-course-names';

export const useGetCourseNamesQuery = (options?) => {
  return useQuery<string[], Error>({
    queryKey: GET_COURSE_NAMES_QUERY_NAME,
    queryFn: () => getCourseNamesQuery(),
    retry: false,
    ...options
  });
};

const getCourseNamesQuery = async (): Promise<string[]> => {
  try {
    const response = await api.get<string[]>(GET_COURSE_NAMES_QUERY_API);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching course names:', error);
    return [];
  }
};
