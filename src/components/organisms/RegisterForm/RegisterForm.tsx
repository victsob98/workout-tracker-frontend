import { View } from "react-native";
import Button from "@atoms/Button";
import { Text } from "react-native-paper";
import styles from "./RegisterForm.styles";
import ControlledTextInput from "@molecules/ControlledTextInput";
import useRegister from "./useRegister";

export const RegisterForm = () => {
  const {
    onSubmit,
    form: { control, formState, handleSubmit },
  } = useRegister();

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.displayMedium}>
        Create account
      </Text>
      <ControlledTextInput
        control={control}
        name="firstName"
        label="Firstname"
        errorText={formState.errors.firstName?.message}
      />
      <ControlledTextInput
        control={control}
        name="lastName"
        label="Lastname"
        errorText={formState.errors.lastName?.message}
      />
      <ControlledTextInput
        control={control}
        name="email"
        label="Email"
        errorText={formState.errors.email?.message}
      />
      <ControlledTextInput
        control={control}
        isPassword
        name="password"
        label="Password"
        errorText={formState.errors.password?.message}
      />
      <Button style={styles.button} onPress={handleSubmit(onSubmit)}>
        Register
      </Button>
    </View>
  );
};

export default RegisterForm;
