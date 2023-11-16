import { useQuery } from 'react-query';
import api from '../config/api';

const TEST_QUERY_NAME = 'testQuery';
const TEST_QUERY_API = '/testquery';

const TIMEOUT_QUERY = 5000;

interface TestQueryRequest {
  testParam: string;
}

interface TestQueryResponse {
  testReturnedValue: string;
}

export const useTestQuery = (params: TestQueryRequest, options?) => {
  return useQuery<TestQueryResponse, Error>({
    queryKey: TEST_QUERY_NAME,
    queryFn: () => getTestQuery(params),
    enabled: false,
    ...options,
  });
};

const getTestQuery = (params: TestQueryRequest) => {
  return api
    .get(TEST_QUERY_API, { params, timeout: TIMEOUT_QUERY })
    .then((result) => {
      return result.data;
    });
};
