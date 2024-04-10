import { StyleSheet, View, Text } from "react-native";
import styles from "./EditScreenInfo.styles";
import { EditScreenInfoProps } from "./EditScreenInfo.types";

export const EditScreenInfo = ({ path }: EditScreenInfoProps) => {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>
          Open up the code for this screen:
        </Text>
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
        >
          <Text>{path}</Text>
        </View>
        <Text style={styles.getStartedText}>
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>
      </View>
    </View>
  );
};
