import Button from "@atoms/Button";
import ControlledTextInput from "@molecules/ControlledTextInput";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { useLocale } from "src/hooks/useLocale/useLocale";

import styles from "./RegisterForm.styles";
import useRegister from "./useRegister";

export const RegisterForm = () => {
  const { t } = useLocale();
  const {
    onSubmit,
    form: { control, formState, handleSubmit },
  } = useRegister();

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.displayMedium}>
        {t("register.title")}
      </Text>
      <ControlledTextInput
        control={control}
        name="firstName"
        label={t("register.name")}
        errorText={formState.errors.firstName?.message}
      />
      <ControlledTextInput
        control={control}
        name="lastName"
        label={t("register.lastname")}
        errorText={formState.errors.lastName?.message}
      />
      <ControlledTextInput
        control={control}
        name="email"
        label={t("form.email")}
        errorText={formState.errors.email?.message}
      />
      <ControlledTextInput
        control={control}
        isPassword
        name="password"
        label={t("form.password")}
        errorText={formState.errors.password?.message}
      />
      <Button style={styles.button} onPress={handleSubmit(onSubmit)}>
        {t("register.registerButton")}
      </Button>
    </View>
  );
};

export default RegisterForm;
