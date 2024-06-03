import ControlledTextInput from "@molecules/ControlledTextInput";
import AuthForm from "@templates/AuthForm/AuthForm";
import { useLocale } from "src/hooks/useLocale/useLocale";
import useRegister from "src/hooks/useRegister/useRegister";

const Register = () => {
  const { t } = useLocale();
  const {
    onSubmit,
    form: { control, formState, handleSubmit },
  } = useRegister();

  return (
    <AuthForm buttonText={t("register.registerButton")} onSubmit={handleSubmit(onSubmit)} title="Create account">
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
    </AuthForm>
  );
};

export default Register;
