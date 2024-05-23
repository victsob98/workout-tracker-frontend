import { ExerciseProps } from "@molecules/Exercise/Exercise.types";

export enum MeasurmentUnit {
  Kg = "kg",
  Lbs = "lbs",
}
export type Workout = {
  id: number;
  name: string;
  duration: number;
  userId: number;
};

export type CardioExercise = {
  category: "cardio";
  time: number;
};

export type Set = {
  weight: number;
  unit: MeasurmentUnit;
  reps: number;
};

export type StrengthExercise = {
  category: "strength";
  sets: Set[];
};

export type Series = {
  exercise: Omit<ExerciseProps, "category">;
} & (CardioExercise | StrengthExercise);

export type WorkoutPlan = {
  workout: Workout;
  series: Series[];
};

export type WorkoutPlanProps = {
  workoutPlan: WorkoutPlan;
};
