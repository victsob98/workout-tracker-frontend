import Button from "@atoms/Button";
import ControlledTextInput from "@molecules/ControlledTextInput";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { useLocale } from "src/hooks/useLocale/useLocale";

import styles from "./LoginForm.styles";
import useLogin from "./useLogin";

export const LoginForm = () => {
  const { t } = useLocale();

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
      <ControlledTextInput control={control} name="email" label={t("form.email")} errorText={errors.email?.message} />
      <ControlledTextInput
        control={control}
        name="password"
        label={t("form.password")}
        isPassword
        errorText={errors.password?.message}
      />
      <Button style={styles.button} onPress={handleSubmit(onSubmit)}>
        {t("button.login")}
      </Button>
    </View>
  );
};

export default LoginForm;
