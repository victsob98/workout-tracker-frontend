import { ButtonProps as PaperButtonProps } from "react-native-paper";

export type ButtonType = "primary" | "secondary";

export interface ButtonProps extends PaperButtonProps {
  type?: ButtonType;
}
