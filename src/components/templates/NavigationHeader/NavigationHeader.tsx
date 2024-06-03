import { theme } from "@theme/Theme";
import { View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import { useCustomRouter } from "src/hooks/useCustomRouter/useCustomRouter";

import styles from "./NavigationHeader.styles";
import { NavigationHeaderProps } from "./NavigationHeader.types";

export const NavigationHeader = ({ title, leftComponent, rightComponent }: NavigationHeaderProps) => {
  const { back } = useCustomRouter();

  return (
    <View style={styles.header}>
      {leftComponent ? (
        leftComponent
      ) : (
        <IconButton icon={"chevron-left"} onPress={back} size={35} iconColor={theme.colors.secondary} />
      )}
      <Text variant="headlineSmall" style={styles.title}>
        {title}
      </Text>
      {rightComponent ? rightComponent : <Text>Save</Text>}
    </View>
  );
};

export default NavigationHeader;
