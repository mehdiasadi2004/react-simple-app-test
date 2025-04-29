// filepath: /e:/SepeherAcademy/MainApp/src/core/services/interceptor/index.interceptor.ts
import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import toast from "react-hot-toast";

import { getItem } from "../common/storage.service";
const baseURL = import.meta.env.VITE_BASE_URL;
const instance: AxiosInstance = axios.create({
  baseURL: baseURL,
});

let activeRequests = 0;
let toastId: string;

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (activeRequests === 0) {
      toastId = toast.loading("Loading...");
    }
    activeRequests++;
    return config;
  },
  (error) => {
    activeRequests--;
    if (activeRequests === 0) {
      toast.dismiss(toastId);
    }
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    activeRequests--;
    if (activeRequests === 0) {
      toast.dismiss(toastId);
    }
    return response;
  },
  (error) => {
    console.log(error.response);
  }
);

instance.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig<any>
  ): Promise<InternalAxiosRequestConfig> => {
    return config;
  }
);

const methods = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  patch: instance.patch,
  delete: instance.delete,
  request: instance.request,
};

export default methods;
