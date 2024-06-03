import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useAuth } from "../useAuth/useAuth";
import { useCustomRouter } from "../useCustomRouter/useCustomRouter";

import { LoginForm, loginFormValidator } from "./loginFormValidator";

const useLogin = () => {
  const { logIn } = useAuth();
  const { navigate } = useCustomRouter();

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginFormValidator),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      await logIn(data);
      navigate("/(tabs)/workoutPlansList");
      form.reset();
    } catch (error) {
      form.trigger("email");
    }
  };
  return { form, onSubmit };
};

export default useLogin;
