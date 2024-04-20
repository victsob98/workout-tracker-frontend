import { SnackbarType } from "@context/snackbar/SnackbarContext/Snackbar.enum";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { useApiClient } from "src/hooks/useApiClient/useApiClient";
import { useCustomRouter } from "src/hooks/useCustomRouter/useCustomRouter";
import { useMutation } from "src/hooks/useMutation/useMutation";
import { useSnackbar } from "src/hooks/useSnackbar/useSnackbar";

import { AuthContext } from "../authContext/AuthContext";
import { AuthState } from "../authContext/AuthContext.types";

import { getStorageItems, setStorageItems, deleteStorageItems, isTokenValid } from "./AuthContextProvider.helpers";
import { AuthContextProviderProps } from "./AuthContextProvider.types";

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const { setSnackbarState } = useSnackbar();
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: false,
    user: null,
  });
  const { client } = useApiClient();

  const { navigate } = useCustomRouter();

  const setNotAuthenticated = useCallback(() => {
    navigate("/");
    deleteStorageItems(["accessToken", "user"]);
    setAuthState({
      isAuthenticated: false,
      isLoading: false,
      user: null,
    });
    client.defaults.headers.common.Authorization = undefined;
  }, [client.defaults.headers.common, navigate]);

  useFocusEffect(
    useCallback(() => {
      const checkUserToken = async () => {
        const [accessToken, user] = await getStorageItems(["accessToken", "user"]);
        if (!accessToken && !user) {
          setNotAuthenticated();
        } else {
          navigate("/(tabs)/");
          if (user) {
            setAuthState({
              isAuthenticated: true,
              isLoading: false,
              user: JSON.parse(user),
            });
          }
        }
      };
      checkUserToken();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      const checkUserToken = async () => {
        const result = await isTokenValid();
        if (!result) {
          setNotAuthenticated();
        }
        navigate("/(tabs)/");
      };

      checkUserToken();
    }, [navigate, setNotAuthenticated]),
  );

  const { mutateAsync: logIn, isPending } = useMutation("loginMutation", {
    onSuccess: async (data) => {
      const { token, ...rest } = data;
      await setStorageItems([
        { key: "accessToken", value: token },
        { key: "user", value: JSON.stringify({ ...rest }) },
      ]);
      setAuthState({
        isAuthenticated: true,
        isLoading: isPending,
        user: { ...rest },
      });
      client.defaults.headers.common.Authorization = token;
      setSnackbarState({
        visible: true,
        text: "You have been logged successfully",
      });
    },
    onError: () => {
      setSnackbarState({
        visible: true,
        text: "Something went wrong",
        type: SnackbarType.Error,
      });
    },
  });

  const logOut = () => {
    setNotAuthenticated();
    setSnackbarState({
      visible: true,
      text: "You have been logged out successfully",
    });
  };

  const ctxValue = { ...authState, logIn, logOut };

  return <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>;
};
