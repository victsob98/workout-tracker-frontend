import { useState } from "react";
import { IntlProvider } from "react-intl";

import { AppLocale } from "../AppLocale.enum";
import { defaultLocale } from "../defaultLocale";
import { translations } from "@i18n/messages";
import { LocaleContext } from "../localeContext/LocaleContext";

import { LocaleContextControllerProps } from "./LocaleContextController.types";

export const LocaleContextController = ({
  children,
}: LocaleContextControllerProps) => {
  const [locale, setLocale] = useState<AppLocale>(defaultLocale);

  const value = { defaultLocale, locale, setLocale };

  return (
    <IntlProvider
      defaultLocale={defaultLocale}
      locale={locale}
      messages={translations[locale]}
    >
      <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
    </IntlProvider>
  );
};
