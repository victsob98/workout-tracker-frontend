import {
  UseMutationResult,
  useMutation as useRQMutation,
  UseMutationOptions,
  MutationKey,
} from "@tanstack/react-query";

import { AxiosMutationsType, mutations } from "@api/actions";

import { DataForMutation, GetMutationParams } from "./useMutation.types";
import { useApiClient } from "../useApiClient/useApiClient";

export const useMutation = <
  Key extends keyof AxiosMutationsType,
  TError = unknown,
>(
  mutation: Key,
  options?: UseMutationOptions<DataForMutation<Key>, TError>
) => {
  const { client } = useApiClient();
  const mutationFn = mutations[mutation](client);
  const mutationKey: MutationKey = [mutation];

  return useRQMutation({
    mutationKey,
    mutationFn: async (args) => await mutationFn(args),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(options as any),
  }) as UseMutationResult<DataForMutation<Key>, TError, GetMutationParams<Key>>;
};
