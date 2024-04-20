import { SnackbarType } from "@context/snackbar/SnackbarContext/Snackbar.enum";
import { theme } from "@theme/Theme";
import { StyleSheet } from "react-native";

export const styles = (type: SnackbarType) =>
  StyleSheet.create({
    container: {
      alignSelf: "center",
      width: "85%",
      bottom: 40,
    },
    color: {
      backgroundColor: theme.colors[type],
    },
    content: { display: "flex", flexDirection: "row", alignItems: "center", gap: 10, marginRight: 2 },
    closeIcon: { marginLeft: 20 },
  });
