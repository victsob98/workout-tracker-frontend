import { theme } from "@theme/Theme";

export const tabNavigationOptions = {
  tabBarActiveTintColor: theme.colors.primary,
  tabBarInactiveTintColor: theme.colors.secondary,
  tabBarInactiveBackgroundColor: "black",
  tabBarActiveBackgroundColor: "#0f0f0f",
  // Disable the static render of the header on web
  // to prevent a hydration error in React Navigation v6.
  headerStyle: { backgroundColor: theme.colors.onBackground },
  headerTintColor: theme.colors.secondary,
};