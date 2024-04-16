import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterForm, registerFormValidator } from "./registerFormValidator";
import { useMutation } from "src/hooks/useMutation/useMutation";
import { useSnackbar } from "src/hooks/useSnackbar/useSnackbar";
import { SnackbarType } from "@context/snackbar/SnackbarContext/Snackbar.enum";
import { useRouter } from "expo-router";

const useRegister = () => {
  const { setSnackbarState } = useSnackbar();
  const { navigate } = useRouter();

  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerFormValidator),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const { reset } = form;

  const { mutateAsync: registerMutation } = useMutation("registerMutation", {
    onSuccess: () => {
      setSnackbarState({
        visible: true,
        text: "You have been registered successfully",
      });
    },
    onError: (error) => {
      setSnackbarState({
        visible: true,
        text: "Something went wrong",
        type: SnackbarType.Error,
      });
    },
  });

  const onSubmit = async (data: RegisterForm) => {
    try {
      await registerMutation({ ...data });
      reset();
      navigate("/login");
    } catch (error) {
      form.trigger("firstName");
    }
  };

  return { form, onSubmit };
};

export default useRegister;
