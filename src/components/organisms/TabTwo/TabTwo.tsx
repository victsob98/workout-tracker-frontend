import { ExerciseList } from "@organisms/ExerciseList/ExerciseList";
import { View } from "react-native";

import styles from "./TabTwo.styles";

export const TabTwo = () => {
  return (
    <View style={styles.container}>
      <ExerciseList />
    </View>
  );
};
