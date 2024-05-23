import { FieldPath, FieldValues, UseControllerProps } from "react-hook-form";
import { ViewStyle } from "react-native";

export type KeyboardType = "default" | "numeric";

export interface ControlledCheckboxProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>
  extends UseControllerProps<TFieldValues, TName> {
  placeholder?: string;
  style?: ViewStyle;
}
