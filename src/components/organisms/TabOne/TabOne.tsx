import { View, Text } from "react-native";

import styles from "./TabOne.styles";

export const TabOne = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
    </View>
  );
};
