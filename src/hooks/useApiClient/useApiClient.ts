import { ApiClientContext } from "@context/apiClient/apiClientContext/ApiClientContext";
import { useContext } from "react";

export const useApiClient = () => {
  const ctx = useContext(ApiClientContext);

  if (ctx === undefined) {
    throw new Error("useApiClient hook is not wrapped by ApiClient provider");
  }

  return ctx;
};
