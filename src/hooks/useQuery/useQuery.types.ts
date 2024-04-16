import {
  QueryKey,
  UseQueryOptions as UseRQQueryOptions,
} from "@tanstack/react-query";

export type Query<TArgs> = {
  endpoint: string;
  args?: TArgs;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type QueryFn<
  TArgs = unknown,
  TParams = unknown,
  TResponse = TParams,
  TError = unknown,
> = (args?: TArgs) => Query<TArgs>;

export type UseQueryOptions<
  TArgs = unknown,
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = { args?: TArgs } & Omit<
  UseRQQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  "queryKey" | "queryFn"
>;
