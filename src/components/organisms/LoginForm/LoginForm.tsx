import { View } from "react-native";
import Button from "@atoms/Button";
import { Text } from "react-native-paper";
import styles from "./LoginForm.styles";
import ControlledTextInput from "@molecules/ControlledTextInput";
import useLogin from "./useLogin";

export const LoginForm = () => {
  const {
    onSubmit,
    form: {
      control,
      formState: { errors },
      handleSubmit,
    },
  } = useLogin();

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.displayMedium}>
        Welcome back
      </Text>
      <ControlledTextInput
        control={control}
        name="email"
        label="Email"
        errorText={errors.email?.message}
      />
      <ControlledTextInput
        control={control}
        name="password"
        label="Password"
        errorText={errors.password?.message}
      />
      <Button style={styles.button} onPress={handleSubmit(onSubmit)}>
        Log in
      </Button>
    </View>
  );
};

export default LoginForm;
