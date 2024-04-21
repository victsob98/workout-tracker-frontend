import { Text, View } from "react-native";

import styles from "./TabTwo.styles";

export const TabTwo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} />
    </View>
  );
};
