import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';
import config from '../config';

axios.defaults.withCredentials = true;

const requestInterceptor = (axiosConfig: AxiosRequestConfig) => {
  if (axiosConfig.headers) {
    axiosConfig.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
  }
  return axiosConfig;
};

const responseInterceptorOnSuccess = (axiosConfig: AxiosResponse) => axiosConfig;
const responseInterceptorOnError = async (error: any) => {
  if (error.response?.status === 500) {
    message.error('Внутренняя ошибка сервера');
  } else if (error?.response?.data?.message) {
    message.error(error?.response?.data?.message);
  }
  throw error;
};

const transport = axios.create({ baseURL: config.backend });

transport.interceptors.response.use(responseInterceptorOnSuccess, responseInterceptorOnError);
transport.interceptors.request.use(requestInterceptor);

export default transport;
