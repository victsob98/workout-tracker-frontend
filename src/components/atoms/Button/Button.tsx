import { Button as PaperButton } from "react-native-paper";
import { ButtonProps } from "./Button.types";
import { BUTTON_STYLE } from "./Button.const";

const Button = ({ type = "primary", children, ...rest }: ButtonProps) => {
  return (
    <PaperButton {...BUTTON_STYLE[type]} {...rest}>
      {children}
    </PaperButton>
  );
};

export default Button;
