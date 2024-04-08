import { theme } from "@theme/Theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: theme.colors.background,
    padding: 50,
    marginVertical: 90,
    marginHorizontal: 25,
    borderRadius: 10,
  },
  displayMedium: {
    color: theme.colors.secondary,
    marginBottom: 20,
  },
  button: {
    marginTop: 30,
    marginBottom: 10,
    width: "80%",
    alignSelf: "center",
  },
});
