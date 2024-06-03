import { theme } from "@theme/Theme";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    backgroundColor: theme.colors.shadow,
    height: 100,
    alignContent: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  title: {
    color: theme.colors.secondary,
    fontWeight: "700",
  },
});
