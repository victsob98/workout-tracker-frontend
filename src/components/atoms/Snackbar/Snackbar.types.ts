import { SnackbarType } from "@context/snackbar/SnackbarContext/Snackbar.enum";
import { SnackbarProps as PaperSnackbarProps } from "react-native-paper";

export interface SnackbarProps extends PaperSnackbarProps {
  type?: SnackbarType;
}

export const SNACKBAR_DEFAULT_DURATION = 3500;
