import { Text } from "react-native-paper";

import { styles } from "./TextChip.styles";
import { TextChipProps } from "./TextChip.types";

export const TextChip = ({ title }: TextChipProps) => {
  return (
    <Text variant="labelSmall" style={styles.chip}>
      {title}
    </Text>
  );
};
