import { Button as PaperButton } from "react-native-paper";

import { BUTTON_STYLE } from "./Button.const";
import { ButtonProps } from "./Button.types";

const Button = ({ type = "primary", children, ...rest }: ButtonProps) => {
  return (
    <PaperButton {...BUTTON_STYLE[type]} {...rest}>
      {children}
    </PaperButton>
  );
};

export default Button;
