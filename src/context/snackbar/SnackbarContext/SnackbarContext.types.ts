import { SnackbarType } from "./Snackbar.enum";

export type SnackbarState = {
  visible: boolean;
  text?: string;
  type?: SnackbarType;
};

export type SnackbarContextValueType = {
  setSnackbarState: (value: SnackbarState) => void;
};
