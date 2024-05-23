import { theme } from "@theme/Theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.secondary,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
