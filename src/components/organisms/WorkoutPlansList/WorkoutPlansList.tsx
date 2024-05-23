import { WorkoutPlan } from "@organisms/WorkoutPlan/WorkoutPlan";
import { MeasurmentUnit, Series, WorkoutPlan as WorkoutProps } from "@organisms/WorkoutPlan/WorkoutPlan.types";
import { FlatList } from "react-native";

export const WorkoutPlansList = () => {
  const seriesA: Series[] = [
    {
      exercise: {
        id: 1,
        title: "Chest press",
        description: "lslsllalsllssllassssssssssssssssssssssssdsdsd",
        subcategories: [
          { id: 1, title: "bicep" },
          { id: 2, title: "chest" },
          { id: 1, title: "tricep" },
        ],
      },
      category: "strength",
      sets: [
        { reps: 1, unit: MeasurmentUnit.Kg, weight: 60 },
        { reps: 4, unit: MeasurmentUnit.Kg, weight: 50 },
      ],
    },
  ];
  const workoutPlans: WorkoutProps[] = [
    {
      series: seriesA,
      workout: {
        duration: 1,
        id: 1,
        name: "Fbw",
        userId: 1,
      },
    },
  ];

  return <FlatList data={workoutPlans} renderItem={({ item }) => <WorkoutPlan workoutPlan={item} />} />;
};
