import { getAccessToken } from "@/app/api/auth/_actions";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

interface ApiAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

export function createAxiosClient(baseURL: string) {
  const axiosInstance = axios.create({ baseURL, withCredentials: true });

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      if (error.response?.status === 401) {
        const originalRequest = error.config as ApiAxiosRequestConfig;

        if (!originalRequest.headers) {
          originalRequest.headers = {};
        }

        if (!originalRequest._retry) {
          const newAccessToken = await getAccessToken();

          originalRequest._retry = true;
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return axiosInstance.request(originalRequest);
        }
      }

      return Promise.reject(error);
    },
  );

  return axiosInstance;
}
