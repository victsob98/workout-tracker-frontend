import { theme } from "@theme/Theme";
import { Pressable, View } from "react-native";
import { Text } from "react-native-paper";

import { styles } from "./WorkoutPlan.styles";
import { WorkoutPlanProps } from "./WorkoutPlan.types";

export const WorkoutPlan = ({ workoutPlan }: WorkoutPlanProps) => {
  const { workout, series } = workoutPlan;

  return (
    <Pressable style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",

          margin: 20,
        }}
      >
        <Text
          variant="headlineSmall"
          style={{
            fontWeight: "700",
          }}
        >
          {workout.name}
        </Text>
        <Text>created at: 10.02.2022</Text>
      </View>
      <View style={styles.contentBox}>
        {series.map((serie) => {
          if (serie.category === "strength") {
            return (
              <View key={serie.exercise.id}>
                <Text
                  variant="titleMedium"
                  style={{
                    borderBottomWidth: 1,
                    paddingBottom: 10,
                    fontWeight: "700",
                    marginBottom: 10,
                  }}
                >
                  {serie.exercise.title}
                </Text>
                {serie.sets.map(({ reps, unit, weight }, index) => {
                  return (
                    <View key={index} style={{ flexDirection: "row", gap: 10, padding: 5, alignItems: "center" }}>
                      <Text
                        variant="bodySmall"
                        style={{ color: theme.colors.onBackground, marginRight: 20 }}
                      >{`Set ${index + 1}`}</Text>
                      <Text variant="bodyMedium">{` ${reps} reps `}</Text>
                      <Text variant="titleMedium" style={{ color: theme.colors.tertiary }}>{`x`}</Text>
                      <Text variant="bodyMedium">{`${weight} ${unit}`}</Text>
                    </View>
                  );
                })}
              </View>
            );
          } else {
            return <View />;
          }
        })}
      </View>
    </Pressable>
  );
};
