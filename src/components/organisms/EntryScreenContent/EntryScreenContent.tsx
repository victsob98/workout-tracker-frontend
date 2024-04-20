import Button from "@atoms/Button";
import { Link } from "expo-router";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { useCustomRouter } from "src/hooks/useCustomRouter/useCustomRouter";
import { useLocale } from "src/hooks/useLocale/useLocale";

import styles from "./EntryScreenContent.styles";

export const EntryScreenContent = () => {
  const { navigate } = useCustomRouter();
  const { t } = useLocale();

  return (
    <View style={styles.container}>
      <Text variant="displayMedium" style={styles.displayMedium}>
        {t("entry.welcome")}
      </Text>
      <Text variant="displaySmall" style={styles.displaySmall}>
        {t("entry.appName")}
      </Text>
      <Text variant="bodyLarge" style={styles.bodyLarge}>
        {t("entry.description")}
      </Text>
      <Button
        style={styles.button}
        onPress={() => {
          navigate("/login");
        }}
      >
        {t("button.login")}
      </Button>
      <Link href="/register" style={styles.link}>
        {t("entry.register")}
      </Link>
    </View>
  );
};

export default EntryScreenContent;
