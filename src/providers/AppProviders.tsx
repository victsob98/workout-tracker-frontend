import { Provider as PaperThemeProvider } from "react-native-paper";
import { AppProvidersProps } from "./AppProviders.types";
import { LocaleContextController } from "@context/locale/localeContextController/LocaleContextController";
import { ApiClientContextController } from "@context/apiClient/apiClientContextController/ApiClientContextController";

export const AppProviders = ({ children }: AppProvidersProps) => (
  <PaperThemeProvider>
    <LocaleContextController>
      <ApiClientContextController>{children}</ApiClientContextController>
    </LocaleContextController>
  </PaperThemeProvider>
);
