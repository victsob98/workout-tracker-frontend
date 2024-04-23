import { AxiosInstance } from "axios";

import {
  GetMeQueryResponse,
  // QUERY_TYPE_IMPORTS
} from "./auth.types";

export const authQueries = {
  getCurrentUser: (client: AxiosInstance) => async () => {
    return (await client.get<GetMeQueryResponse>("/me")).data;
  },
  // QUERY_FUNCTIONS_SETUP
};
