import { FieldPath, FieldValues, UseControllerProps } from "react-hook-form";
import { ViewStyle } from "react-native";

export type KeyboardType = "default" | "numeric";

export interface ControlledTextInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName> {
  isPassword?: boolean;
  errorText?: string;
  placeholder?: string;
  label?: string;
  keyboardType?: KeyboardType;
  errorStyle?: ViewStyle;
  style?: ViewStyle;
}
