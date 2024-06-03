import Button from "@atoms/Button";
import BackgroundLayout from "@molecules/BackgroundLayout";
import { View } from "react-native";
import { Text } from "react-native-paper";

import { styles } from "./AuthForm.styles";
import { AuthFormProps } from "./AuthForm.types";

export const AuthForm = ({ title, buttonText, children, onSubmit }: AuthFormProps) => {
  return (
    <BackgroundLayout source={require("../../../assets/images/gym.jpg")}>
      <View style={styles.container}>
        <Text variant="headlineLarge" style={styles.displayMedium}>
          {title}
        </Text>
        {children}
        <Button style={styles.button} onPress={onSubmit}>
          {buttonText}
        </Button>
      </View>
    </BackgroundLayout>
  );
};

export default AuthForm;
