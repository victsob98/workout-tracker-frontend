import BackgroundLayout from "@molecules/BackgroundLayout";
import EntryScreenContent from "@organisms/EntryScreenContent";

export const EntryScreen = () => {
  return (
    <BackgroundLayout source={require("../../assets/images/gym.jpg")}>
      <EntryScreenContent />
    </BackgroundLayout>
  );
};

export default EntryScreen;
