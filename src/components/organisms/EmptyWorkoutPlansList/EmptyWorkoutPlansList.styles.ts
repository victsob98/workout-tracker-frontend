import { theme } from "@theme/Theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 70,
  },
  titleLarge: {
    color: theme.colors.secondary,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  titleSmall: {
    color: theme.colors.lightGrey,
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: theme.colors.secondary,
    padding: 35,
    opacity: 0.7,
    borderRadius: 110,
    marginBottom: 40,
  },
});
