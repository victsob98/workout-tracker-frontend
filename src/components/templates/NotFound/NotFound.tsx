import { Link, Stack } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import styles from "./NotFound.styles";

export const NotFound = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
};
