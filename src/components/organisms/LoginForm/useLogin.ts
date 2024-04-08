import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginForm, loginFormValidator } from "./loginFormValidator";

const useLogin = () => {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginFormValidator),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return { form, onSubmit };
};

export default useLogin;
