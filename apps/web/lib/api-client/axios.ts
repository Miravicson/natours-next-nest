// import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// type ApiResponse<T> = Promise<{
//   data: T;
//   response: AxiosResponse<T>;
// }> & { cancel: () => void };

// const Api: AxiosInstance | null = null;

// const createAxiosInstance = (): AxiosInstance => {
//   if (Api) return Api;
//   return Axios.create({
//     baseURL: process.env.API_URL ?? process.env.NEXT_PUBLIC_API_URL,
//     withCredentials: true,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };

// export const customInstance = <T>(
//   config: AxiosRequestConfig,
//   options?: AxiosRequestConfig,
// ): ApiResponse<T> => {
//   const controller = new AbortController();
//   const Api = createAxiosInstance();
//   Api.interceptors.request.use(
//     (request) => request,
//     (error) => Promise.reject(error),
//   );

//   Api.interceptors.response.use(
//     (response) => response,
//     (error) => Promise.reject(error),
//   );
//   const promise = Api({
//     ...config,
//     ...options,
//     signal: controller.signal,
//   }).then((value: AxiosResponse<T>) => ({
//     data: value.data,
//     response: value,
//   })) as ApiResponse<T>;

//   promise.cancel = () => {
//     controller.abort();
//   };

//   return promise;
// };


import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

type ApiResponse<T> = Promise<{
  data: T;
  response: AxiosResponse<T>;
}> & { cancel: () => void };

// Create a function that returns a fresh axios instance
export const createAxiosInstance = (): AxiosInstance => {
  // In Next.js app router, server components should use process.env directly
  // While client components should use the NEXT_PUBLIC_ prefixed variables
  const baseURL = process.env.NEXT_PUBLIC_API_URL || '';
  
  return axios.create({
    baseURL,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

// Singleton instance (optional)
let apiInstance: AxiosInstance | null = null;

export const getApiInstance = (): AxiosInstance => {
  if (!apiInstance) {
    apiInstance = createAxiosInstance();
    
    // Add interceptors to the singleton instance
    apiInstance.interceptors.request.use(
      (request) => request,
      (error) => Promise.reject(error),
    );

    apiInstance.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error),
    );
  }
  
  return apiInstance;
};

export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): ApiResponse<T> => {
  const controller = new AbortController();
  const api = getApiInstance();
  
  const promise = api({
    ...config,
    ...options,
    signal: controller.signal,
  }).then((response: AxiosResponse<T>) => ({
    data: response.data,
    response,
  })) as ApiResponse<T>;

  promise.cancel = () => {
    controller.abort();
  };

  return promise;
};