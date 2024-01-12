import { useQuery } from 'react-query';
import api from '../config/api';
import { TestQueryRequestDTO } from '../interfaces/dtos/TestQueryRequestDTO';
import { TestQueryResponseDTO } from '../interfaces/dtos/TestQueryResponseDTO';

const TEST_QUERY_NAME = 'testQuery';
const TEST_QUERY_API = '/testquery';

const TIMEOUT_QUERY = 5000;

export const useTestQuery = (params: TestQueryRequestDTO, options?) => {
  return useQuery<TestQueryResponseDTO, Error>({
    queryKey: TEST_QUERY_NAME,
    queryFn: () => getTestQuery(params),
    enabled: false,
    retry: false,
    ...options
  });
};

const getTestQuery = (params: TestQueryRequestDTO) => {
  return api.get(TEST_QUERY_API, { params, timeout: TIMEOUT_QUERY }).then((result) => {
    return result.data;
  });
};
