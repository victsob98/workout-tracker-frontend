import { Link } from "expo-router";
import { View } from "react-native";
import Button from "@atoms/Button";
import { Text } from "react-native-paper";
import styles from "./EntryScreenContent.styles";
import { useRouter } from "expo-router";

export const EntryScreenContent = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text variant="displayMedium" style={styles.displayMedium}>
        Welcome to the
      </Text>
      <Text variant="displaySmall" style={styles.displaySmall}>
        Workout Tracker
      </Text>
      <Text variant="bodyLarge" style={styles.bodyLarge}>
        Manage your workout schedule efficiently
      </Text>
      <Button
        style={styles.button}
        onPress={() => {
          router.navigate("/login");
        }}
      >
        Login
      </Button>
      <Link href="/register" style={styles.link}>
        Register if you don't have an account
      </Link>
    </View>
  );
};

export default EntryScreenContent;
