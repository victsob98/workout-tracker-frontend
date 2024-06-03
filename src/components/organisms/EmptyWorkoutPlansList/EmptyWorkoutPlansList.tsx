import Button from "@atoms/Button";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { useCustomRouter } from "src/hooks/useCustomRouter/useCustomRouter";
import { useLocale } from "src/hooks/useLocale/useLocale";

import EmptyList from "../../../assets/icons/noData.svg";

import { styles } from "./EmptyWorkoutPlansList.styles";

export const EmptyWorkoutPlansList = () => {
  const { navigate } = useCustomRouter();
  const { t } = useLocale();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <EmptyList width={150} height={150} />
      </View>
      <Text style={styles.titleLarge} variant="titleLarge">
        {t("emptyWorkoutList.title")}
      </Text>
      <Text style={styles.titleSmall} variant="titleSmall">
        {t("emptyWorkoutList.subtitle")}
      </Text>
      <Button onPress={() => navigate("/workoutPlan/createWorkoutPlan")}>{t("emptyWorkoutList.button")}</Button>
    </View>
  );
};
