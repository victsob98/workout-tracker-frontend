import { AxiosQueriesType, queries } from "@api/actions";
import { DataForQuery, GetQueryParams } from "@api/types/types";
import {
  QueryKey,
  UseQueryResult,
  UseQueryOptions,
  useQuery as useRQQuery,
  QueryFunction,
} from "@tanstack/react-query";
import { parseQueryKey } from "src/utils/parseQueryKey";

import { useApiClient } from "../useApiClient/useApiClient";

export const useQuery = <Key extends keyof AxiosQueriesType, TError = unknown>(
  query: Key,
  args: GetQueryParams<Key>,
  options?: UseQueryOptions<DataForQuery<Key>, TError>,
) => {
  const { client } = useApiClient();
  const queryFn: QueryFunction = queries[query](client);
  const queryKey: QueryKey = parseQueryKey(query, args);

  const result = useRQQuery({
    queryKey,
    queryFn: async () => await queryFn(args),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(options as any),
  }) as UseQueryResult<DataForQuery<Key>, TError>;

  return {
    ...result,
    isLoadingAndEnabled: result.isLoading && result.fetchStatus !== "idle",
  };
};
