import { AuthContextProviderProps } from "./AuthContextProvider.types";
import { AuthContext } from "../authContext/AuthContext";
import { useState } from "react";
import { AuthState } from "../authContext/AuthContext.types";
import { setStorageItem } from "./AuthContextProvider.helpers";
import { useMutation } from "src/hooks/useMutation/useMutation";
import { useSnackbar } from "src/hooks/useSnackbar/useSnackbar";
import { SnackbarType } from "@context/snackbar/SnackbarContext/Snackbar.enum";

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const { setSnackbarState } = useSnackbar();
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: false,
    user: null,
  });

  const { mutateAsync: logIn, isPending } = useMutation("loginMutation", {
    onSuccess(data) {
      const { accessToken, ...rest } = data;
      setStorageItem("accessToken", accessToken);
      setAuthState({
        isAuthenticated: true,
        isLoading: isPending,
        user: { ...rest },
      });
      setSnackbarState({
        visible: true,
        text: "You have been logged successfully",
      });
    },
    onError(error) {
      setSnackbarState({
        visible: true,
        text: "Something went wrong",
        type: SnackbarType.Error,
      });
    },
  });

  const logOut = () => {
    setStorageItem("accessToken", null);
    setAuthState({
      isAuthenticated: false,
      isLoading: isPending,
      user: null,
    });
    setSnackbarState({
      visible: true,
      text: "You have been logged out successfully",
    });
  };

  const ctxValue = { ...authState, logIn, logOut };

  return (
    <AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
  );
};
