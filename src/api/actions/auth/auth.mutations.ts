import { AxiosInstance } from "axios";

import {
  LoginMutationArguments,
  LoginMutationResponse,
  RegisterMutationArguments,
  // MUTATION_TYPE_IMPORTS
} from "./auth.types";
import { ApiPaths } from "@api/axios/urls";

export const authMutations = {
  loginMutation:
    (client: AxiosInstance) => async (body: LoginMutationArguments) => {
      return (await client.post<LoginMutationResponse>(ApiPaths.Login, body))
        .data;
    },
  registerMutation:
    (client: AxiosInstance) => async (body: RegisterMutationArguments) => {
      console.log(client.getUri());
      return (await client.post(ApiPaths.Register, body)).data;
    },
  // MUTATION_FUNCTIONS_SETUP
};
