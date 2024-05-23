import { Controller, FieldPath, FieldValues } from "react-hook-form";
import { Checkbox } from "react-native-paper";

import { ControlledCheckboxProps } from "./ControlledCheckbox.types";

export const ControlledCheckbox = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  name,
  rules,
  control,
}: ControlledCheckboxProps<TFieldValues, TName>) => {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field: { onChange, value } }) => {
        return <Checkbox status={value ? "checked" : "unchecked"} onPress={onChange} />;
      }}
    />
  );
};
