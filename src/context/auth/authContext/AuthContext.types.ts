import {
  LoginMutationArguments,
  LoginMutationResponse,
  User,
} from "@api/actions/auth/auth.types";
import { UseMutateAsyncFunction } from "@tanstack/react-query";

export type AuthState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User | null;
};

export interface AuthContextValueType extends AuthState {
  logIn: UseMutateAsyncFunction<
    LoginMutationResponse,
    unknown,
    LoginMutationArguments,
    unknown
  >;
  logOut: () => void;
}
