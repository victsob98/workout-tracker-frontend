import BackgroundLayout from "@molecules/BackgroundLayout";
import EntryScreenContent from "@organisms/EntryScreenContent";

const Entry = () => {
  return (
    <BackgroundLayout source={require("../assets/images/gym.jpg")}>
      <EntryScreenContent />
    </BackgroundLayout>
  );
};

export default Entry;
