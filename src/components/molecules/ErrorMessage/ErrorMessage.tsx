import React, { FC } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { ErrorProps } from "./ErrorMessage.types";
import { styles } from "./ErrorMessage.styles";

export const ErrorMessage: FC<ErrorProps> = ({ errorText, errorStyle }) => (
  <View style={[styles.container, errorStyle]}>
    <Text variant="labelSmall" style={styles.error}>
      {errorText}
    </Text>
  </View>
);

export default ErrorMessage;
