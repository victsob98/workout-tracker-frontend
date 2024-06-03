import { SnackbarType } from "@context/snackbar/SnackbarContext/Snackbar.enum";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCustomRouter } from "src/hooks/useCustomRouter/useCustomRouter";
import { useLocale } from "src/hooks/useLocale/useLocale";
import { useMutation } from "src/hooks/useMutation/useMutation";
import { useSnackbar } from "src/hooks/useSnackbar/useSnackbar";

import { RegisterForm, registerFormValidator } from "./registerFormValidator";

const useRegister = () => {
  const { showSnackbar } = useSnackbar();
  const { navigate } = useCustomRouter();
  const { t } = useLocale();

  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerFormValidator),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const { mutateAsync: registerMutation } = useMutation("registerMutation", {
    onSuccess: () => {
      showSnackbar(t("register.successMessage"));
    },
    onError: () => {
      showSnackbar(t("error.message"), SnackbarType.Error);
    },
  });

  const onSubmit = async (data: RegisterForm) => {
    try {
      await registerMutation({ ...data });
      form.reset();
      navigate("/login");
    } catch (error) {
      form.trigger("firstName");
    }
  };

  return { form, onSubmit };
};

export default useRegister;
