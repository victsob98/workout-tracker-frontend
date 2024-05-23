import { theme } from "@theme/Theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "auto",
    borderBottomWidth: 1,
    borderRadius: 10,
    position: "relative",
    backgroundColor: theme.colors.background,
    overflow: "hidden",
    marginBottom: 20,
  },
  contentBox: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    backgroundColor: theme.colors.lightBackground,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 30,
  },
  bodyLarge: { color: theme.colors.secondary, fontWeight: "700" },
  subcategoriesContainer: {
    flexDirection: "row",
    gap: 6,
    flexWrap: "wrap",
  },
});
