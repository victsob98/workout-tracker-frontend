import { Translation, isTranslationKey } from "@i18n/messages";
import React, { FC } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { useLocale } from "src/hooks/useLocale/useLocale";

import { styles } from "./ErrorMessage.styles";
import { ErrorProps } from "./ErrorMessage.types";

export const ErrorMessage: FC<ErrorProps> = ({ errorText, errorStyle }) => {
  const { t } = useLocale();

  return (
    <View style={[styles.container, errorStyle]}>
      <Text variant="labelSmall" style={styles.error}>
        {isTranslationKey(errorText) ? t(errorText as Translation) : errorText}
      </Text>
    </View>
  );
};

export default ErrorMessage;
