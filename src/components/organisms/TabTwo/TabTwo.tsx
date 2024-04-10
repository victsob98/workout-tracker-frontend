import { Text, View } from "react-native";
import styles from "./TabTwo.styles";
import { EditScreenInfo } from "@templates/EditScreenInfo/EditScreenInfo";

export const TabTwo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
};
