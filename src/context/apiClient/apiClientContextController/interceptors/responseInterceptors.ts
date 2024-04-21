import { deleteStorageItems } from "@context/auth/authContextProvider/AuthContextProvider.helpers";
import { AxiosError, AxiosResponse } from "axios";
import { router } from "expo-router";

const notAuthenticated = async (error: AxiosError) => {
  if (error.response?.status === 401) {
    await deleteStorageItems(["accessToken", "user"]);
    router.navigate("/");
  }
};

export const responseSuccessInterceptor = (response: AxiosResponse) => response;
export const responseFailureInterceptor = async (error: AxiosError) => {
  await notAuthenticated(error);
  return Promise.reject(error);
};
