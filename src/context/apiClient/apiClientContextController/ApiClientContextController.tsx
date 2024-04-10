import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ApiClientControllerProps } from "./ApiClientContextController.types";
import { ApiClientContextValue } from "../apiClientContext/ApiClientContext.types";
import { ApiClientContext } from "../apiClientContext/ApiClientContext";
import axiosClient from "@api/axios";

export const ApiClientContextController = ({
  children,
}: ApiClientControllerProps) => {
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
