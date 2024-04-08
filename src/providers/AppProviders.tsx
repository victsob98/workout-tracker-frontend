import { Provider as PaperThemeProvider } from "react-native-paper";
import { AppProvidersProps } from "./AppProviders.types";
import { LocaleContextController } from "@context/locale/localeContextController/LocaleContextController";
import { ApiClientContextController } from "@context/apiClient/apiClientContextController/ApiClientContextController";
import { theme } from "@theme/Theme";

export const AppProviders = ({ children }: AppProvidersProps) => (
  <PaperThemeProvider theme={theme}>
    <LocaleContextController>
      <ApiClientContextController>{children}</ApiClientContextController>
    </LocaleContextController>
  </PaperThemeProvider>
);
