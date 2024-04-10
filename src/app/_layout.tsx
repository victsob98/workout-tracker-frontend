import { RootNavigation } from "@navigation/RootNavigation/RootNavigation";
import { useRootLayoutConfig } from "@navigation/RootNavigation/useRootLayoutConfig";
import * as SplashScreen from "expo-splash-screen";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  useRootLayoutConfig();
  return <RootNavigation />;
};

export default RootLayout;
