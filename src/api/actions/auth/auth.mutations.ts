import { ApiPaths } from "@api/axios/urls";
import { AxiosInstance } from "axios";

import {
  LoginMutationArguments,
  LoginMutationResponse,
  RegisterMutationArguments,
  // MUTATION_TYPE_IMPORTS
} from "./auth.types";

export const authMutations = {
  loginMutation: (client: AxiosInstance) => async (body: LoginMutationArguments) => {
    return (await client.post<LoginMutationResponse>(ApiPaths.Login, body)).data;
  },
  registerMutation: (client: AxiosInstance) => async (body: RegisterMutationArguments) => {
    return (await client.post(ApiPaths.Register, body)).data;
  },
  // MUTATION_FUNCTIONS_SETUP
};
