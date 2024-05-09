import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";
import { getAccessToken } from "@/app/api/auth/_actions";
import { gql } from "@apollo/client";

interface ApiAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

const API_BASE_URL = "http://localhost:4000";

export class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({ baseURL, withCredentials: true });

    this.axiosInstance.interceptors.response.use((response) => response, this.handleUnauthorized());
  }

  private handleUnauthorized() {
    return async (error: AxiosError) => {
      if (error.response?.status === 401) {
        const originalRequest = error.config as ApiAxiosRequestConfig;

        if (!originalRequest.headers) {
          originalRequest.headers = {};
        }

        if (!originalRequest._retry) {
          const newAccessToken = await getAccessToken();

          originalRequest._retry = true;
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

          return this.axiosInstance.request(originalRequest);
        }
      }

      return Promise.reject(error);
    };
  }

  async getHello() {
    const { data } = await this.axiosInstance.post("/");

    console.log("hello", data.message);

    return data.message;
  }

  getGqlHello() {
    return gql(`
    	query getHello {
        hello
      }
    `);
  }
}

export default new ApiClient(API_BASE_URL);
