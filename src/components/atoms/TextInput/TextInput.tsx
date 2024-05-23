import { theme } from "@theme/Theme";
import { TextInput as PaperTextInput, TextInputProps } from "react-native-paper";

const TextInput = ({ ...rest }: TextInputProps) => {
  return (
    <PaperTextInput
      underlineColor={theme.colors.secondary}
      activeUnderlineColor={theme.colors.primary}
      cursorColor={theme.colors.primary}
      textColor={theme.colors.secondary}
      style={{ backgroundColor: theme.colors.background }}
      theme={{
        colors: {
          onSurfaceVariant: theme.colors.inactiveText,
          error: theme.colors.error,
        },
      }}
      selectionColor={theme.colors.primary}
      underlineStyle={{ marginHorizontal: 15 }}
      {...rest}
    />
  );
};

export default TextInput;
