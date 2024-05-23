import { Checkbox as PaperCheckbox } from "react-native-paper";

export const Checkbox = ({ isChecked }: { isChecked: boolean }) => {
  return <PaperCheckbox status={isChecked ? "checked" : "unchecked"} />;
};
