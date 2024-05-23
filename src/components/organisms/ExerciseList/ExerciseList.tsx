import { Exercise } from "@molecules/Exercise/Exercise";
import { exercises } from "@molecules/Exercise/Exercise.types";
import { FlatList } from "react-native";

export const ExerciseList = () => {
  return (
    <FlatList
      data={exercises}
      contentContainerStyle={{ alignItems: "center" }}
      renderItem={({ item }) => {
        return (
          <Exercise
            id={item.id}
            category={item.category}
            subcategories={item.subcategories}
            title={item.title}
            description={item.description}
          />
        );
      }}
    />
  );
};
