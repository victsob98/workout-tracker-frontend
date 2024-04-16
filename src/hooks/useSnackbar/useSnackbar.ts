import { SnackbarContext } from "@context/snackbar/SnackbarContext/SnackbarContext";
import { useContext } from "react";

export const useSnackbar = () => {
  const ctx = useContext(SnackbarContext);

  if (ctx === undefined) {
    throw new Error("useSnackbar hook is not wrapped by a SnackbarProvider");
  }

  return ctx;
};
