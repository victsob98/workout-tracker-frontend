import { TextChip } from "@atoms/TextChip/TextChip";
import { View } from "react-native";

import { styles } from "./TextChipBox.styles";
import { TextChipBoxProps } from "./TextChipBox.types";

export const TextChipBox = ({ titles }: TextChipBoxProps) => {
  return (
    <View style={styles.textChipContainer}>
      {titles?.map((title) => {
        return <TextChip title={title} />;
      })}
    </View>
  );
};
