import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterForm, registerFormValidator } from "./registerFormValidator";

const useRegister = () => {
  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerFormValidator),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: RegisterForm) => {
    console.log(data);
  };

  return { form, onSubmit };
};

export default useRegister;
