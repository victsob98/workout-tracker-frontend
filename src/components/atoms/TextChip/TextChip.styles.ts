import { theme } from "@theme/Theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  chip: {
    color: theme.colors.secondary,
    paddingHorizontal: 5,
    borderRadius: 5,
    maxWidth: "auto",
    backgroundColor: theme.colors.lightBackground,
    display: "flex",
    alignSelf: "flex-start",
  },
});
