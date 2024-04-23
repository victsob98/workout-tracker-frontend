import { AuthContextProvider } from "@context/auth/authContextProvider/AuthContextProvider";
import { RootNavigation } from "@navigation/RootNavigation/RootNavigation";
import { useRootLayoutConfig } from "@navigation/RootNavigation/useRootLayoutConfig";
import { AppProviders } from "@providers/AppProviders";
import * as SplashScreen from "expo-splash-screen";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  useRootLayoutConfig();

  return (
    <AppProviders>
      <AuthContextProvider>
        <RootNavigation />
      </AuthContextProvider>
    </AppProviders>
  );
};

export default RootLayout;
