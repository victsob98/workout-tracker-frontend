import BackgroundLayout from "@molecules/BackgroundLayout";
import RegisterForm from "@organisms/RegisterForm/RegisterForm";

export const RegisterScreen = () => {
  return (
    <BackgroundLayout source={require("../../assets/images/gym.jpg")}>
      <RegisterForm />
    </BackgroundLayout>
  );
};

export default RegisterScreen;
