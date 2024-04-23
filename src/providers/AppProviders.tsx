import { Provider as PaperThemeProvider } from "react-native-paper";
import { AppProvidersProps } from "./AppProviders.types";
import { LocaleContextController } from "@context/locale/localeContextController/LocaleContextController";
import { ApiClientContextController } from "@context/apiClient/apiClientContextController/ApiClientContextController";
import { theme } from "@theme/Theme";
import SnackbarContextProvider from "@context/snackbar/SnackbarContextProvider/SnackbarContextProvider";
import { AuthContextProvider } from "@context/auth/authContextProvider/AuthContextProvider";

export const AppProviders = ({ children }: AppProvidersProps) => (
  <PaperThemeProvider theme={theme}>
    <SnackbarContextProvider>
      <LocaleContextController>
        <ApiClientContextController>{children}</ApiClientContextController>
      </LocaleContextController>
    </SnackbarContextProvider>
  </PaperThemeProvider>
);
