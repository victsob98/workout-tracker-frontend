import { AllRoutes, SearchParams, useRouter } from "expo-router";
import { useCallback, useMemo } from "react";

export const useCustomRouter = () => {
  const { navigate: expoNavigate, ...rest } = useRouter();

  const navigate = useCallback(
    (scene: AllRoutes, params?: SearchParams<AllRoutes>) => {
      return expoNavigate({ pathname: scene, params });
    },
    [expoNavigate],
  );

  return useMemo(() => ({ navigate, ...rest }), [navigate, rest]);
};
