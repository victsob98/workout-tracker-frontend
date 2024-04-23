import { theme } from "@theme/Theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginHorizontal: 50,
    gap: 10,
    marginVertical: 150,
    justifyContent: "center",
  },
  displayMedium: {
    color: theme.colors.secondary,
    width: 200,
    marginBottom: 20,
  },
  displaySmall: {
    color: theme.colors.tertiary,
  },
  bodyLarge: {
    color: theme.colors.secondary,
  },
  link: {
    color: theme.colors.secondary,
    textDecorationLine: "underline",
    alignSelf: "center",
    marginBottom: 10,
  },
  button: {
    marginTop: 100,
    marginBottom: 10,
    width: "80%",
    alignSelf: "center",
  },
});
