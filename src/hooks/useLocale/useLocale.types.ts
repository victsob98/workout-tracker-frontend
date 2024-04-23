import type { LocaleContextValueType } from "@context/locale/localeContext/LocaleContext.types";
import type { TranslateFn } from "@i18n/messages";
import type { IntlShape } from "react-intl";

export type WithTranslateFn = {
  t: TranslateFn;
};

export type UseLocaleReturnType = () => IntlShape & LocaleContextValueType & WithTranslateFn;
