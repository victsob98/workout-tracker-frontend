import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginForm, loginFormValidator } from "./loginFormValidator";
import { useMutation } from "src/hooks/useMutation/useMutation";
import { useAuth } from "src/hooks/useAuth/useAuth";

const useLogin = () => {
  const { logIn, user } = useAuth();
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
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);
  return { form, onSubmit };
};

export default useLogin;
