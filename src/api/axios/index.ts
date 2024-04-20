import {
  responseFailureInterceptor,
  responseSuccessInterceptor,
} from "@context/apiClient/apiClientContextController/interceptors/responseInterceptors";
import axios from "axios";

export const BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;

const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: BASE_URL,
});
axiosClient.interceptors.response.use(responseSuccessInterceptor, responseFailureInterceptor);

export default axiosClient;
