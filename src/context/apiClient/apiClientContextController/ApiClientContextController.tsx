import axiosClient from "@api/axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ApiClientContext } from "../apiClientContext/ApiClientContext";
import { ApiClientContextValue } from "../apiClientContext/ApiClientContext.types";

import { ApiClientControllerProps } from "./ApiClientContextController.types";

export const ApiClientContextController = ({ children }: ApiClientControllerProps) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });

  const ctx: ApiClientContextValue = { client: axiosClient };

  return (
    <ApiClientContext.Provider value={ctx}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ApiClientContext.Provider>
  );
};
