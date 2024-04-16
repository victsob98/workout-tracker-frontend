import { useContext, useCallback, useMemo } from "react";
import { useIntl } from "react-intl";

import { LocaleContext } from "@context/locale/localeContext/LocaleContext";

import { UseLocaleReturnType } from "./useLocale.types";
import { TranslateFn } from "@i18n/messages";

export const useLocale: UseLocaleReturnType = () => {
  const intl = useIntl();
  const localeContext = useContext(LocaleContext);

  if (localeContext === undefined) {
    throw new Error(
      "LocaleContext is unavailable, make sure you are using LocaleContextController"
    );
  }

  const t: TranslateFn = useCallback(
    (id, value?) => intl.formatMessage({ id }, value),
    [intl]
  );

  return useMemo(
    () => ({
      ...intl,
      ...localeContext,
      t,
    }),
    [intl, localeContext, t]
  );
};
