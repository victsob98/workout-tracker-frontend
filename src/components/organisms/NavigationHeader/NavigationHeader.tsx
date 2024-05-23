import { View } from "react-native";
import { Text } from "react-native-paper";

import styles from "./NavigationHeader.styles";
import { NavigationHeaderProps } from "./NavigationHeader.types";

export const NavigationHeader = ({ title, leftComponent, rightComponent }: NavigationHeaderProps) => {
  return (
    <View style={styles.header}>
      {leftComponent}
      <Text variant="headlineSmall" style={styles.title}>
        {title}
      </Text>
      {rightComponent}
    </View>
  );
};

export default NavigationHeader;
