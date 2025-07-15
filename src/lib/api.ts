
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { API_URL } from '@env';

type ApiConfig = AxiosRequestConfig & {
  timeout?: number;
};

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
} as ApiConfig);

api.interceptors.request.use(async (request) => {
  return request;
});

export default api;
