import { env } from '@/env';
import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

type ApiResponse<T> = Promise<{
  data: T;
  response: AxiosResponse<T>;
}> & { cancel: () => void };

let Api: AxiosInstance | null = null;

const createAxiosInstance = (): AxiosInstance => {
  if (Api) return Api;
  return Axios.create({
    baseURL: env.API_URL,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): ApiResponse<T> => {
  const controller = new AbortController();
  const Api = createAxiosInstance();
  Api.interceptors.request.use(
    (request) => request,
    (error) => Promise.reject(error),
  );

  Api.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
  );
  const promise = Api({
    ...config,
    ...options,
    signal: controller.signal,
  }).then((value: AxiosResponse<T>) => ({
    data: value.data,
    response: value,
  })) as ApiResponse<T>;

  promise.cancel = () => {
    controller.abort();
  };

  return promise;
};
