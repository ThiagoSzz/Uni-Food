import { useMutation } from 'react-query';
import api from '../config/api';
import { AxiosResponse } from 'axios';
import { TestMutationRequest } from '../interfaces/dtos/TestMutationRequestDTO';

const TEST_MUTATION_NAME = 'testMutation';
const TEST_MUTATION_API = '/testmutation';

const TIMEOUT_MUTATION = 5000;

export const useTestMutation = (options?) => {
  return useMutation<AxiosResponse<any, any>, Error, TestMutationRequest>({
    mutationKey: TEST_MUTATION_NAME,
    mutationFn: (data) => setTestMutation(data),
    retry: false,
    ...options
  });
};

const setTestMutation = (data: TestMutationRequest) => {
  const { testData, ...params } = data;

  // aqui também pode ser um api.post()
  return api
    .patch(TEST_MUTATION_API, { testData }, { params, timeout: TIMEOUT_MUTATION })
    .then((result) => {
      return result;
    });
};
