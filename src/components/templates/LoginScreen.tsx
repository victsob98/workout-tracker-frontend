import BackgroundLayout from "@molecules/BackgroundLayout";
import LoginForm from "@organisms/LoginForm";

export const LoginScreen = () => {
  return (
    <BackgroundLayout source={require("../../assets/images/gym.jpg")}>
      <LoginForm />
    </BackgroundLayout>
  );
};

export default LoginScreen;
