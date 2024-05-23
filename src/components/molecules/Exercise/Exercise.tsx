import { Checkbox } from "@atoms/Checkbox/Checkbox";
import { TextChipBox } from "@molecules/TextChipBox/TextChipBox";
import { theme } from "@theme/Theme";
import { useState } from "react";
import { Pressable, View } from "react-native";
import { Icon, Text } from "react-native-paper";

import { styles } from "./Exercise.styles";
import { ExerciseProps } from "./Exercise.types";

export const Exercise = ({ category, title, description, subcategories }: ExerciseProps) => {
  const [isChecked, setChecked] = useState(false);
  const subcategoriesTitles = subcategories?.map(({ title: subcategoryTitle }) => subcategoryTitle) ?? [];

  return (
    <Pressable onPress={() => setChecked(!isChecked)}>
      <View style={styles.container}>
        <Icon source={category === "strength" ? "dumbbell" : "run-fast"} size={40} color={theme.colors.tertiary} />
        <View style={styles.contentBox}>
          <Text variant="bodyLarge" style={styles.bodyLarge}>
            {title}
          </Text>
          <TextChipBox titles={subcategoriesTitles} />
          <Text variant="bodyMedium" style={{ color: theme.colors.secondary }}>
            {description}
          </Text>
        </View>
        <Checkbox isChecked={isChecked} />
      </View>
    </Pressable>
  );
};
