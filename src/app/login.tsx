import ControlledTextInput from "@molecules/ControlledTextInput";
import AuthForm from "@templates/AuthForm/AuthForm";
import { useLocale } from "src/hooks/useLocale/useLocale";
import useLogin from "src/hooks/useLogin/useLogin";

const Login = () => {
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
    <AuthForm buttonText={t("button.login")} title="Welcome back" onSubmit={handleSubmit(onSubmit)}>
      <ControlledTextInput control={control} name="email" label={t("form.email")} errorText={errors.email?.message} />
      <ControlledTextInput
        control={control}
        name="password"
        label={t("form.password")}
        isPassword
        errorText={errors.password?.message}
      />
    </AuthForm>
  );
};

export default Login;
