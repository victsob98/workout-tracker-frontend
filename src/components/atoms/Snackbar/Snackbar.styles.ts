import { SnackbarType } from "@context/snackbar/SnackbarContext/Snackbar.enum";
import { theme } from "@theme/Theme";
import { StyleSheet } from "react-native";

export const styles = (type: SnackbarType) =>
  StyleSheet.create({
    container: {
      alignSelf: "center",
    },
    color: {
      backgroundColor: theme.colors[type],
    },
  });
