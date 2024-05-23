import { theme } from "@theme/Theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 8,
    display: "flex",
    width: "auto",
    borderBottomWidth: 1,
    borderRadius: 10,
    gap: 20,
    alignItems: "center",
    backgroundColor: theme.colors.background,
    flexDirection: "row",
  },
  contentBox: { display: "flex", flexDirection: "column", width: 200, gap: 8 },
  bodyLarge: { color: theme.colors.secondary, fontWeight: "700" },
  subcategoriesContainer: {
    flexDirection: "row",
    gap: 6,
    flexWrap: "wrap",
  },
});
