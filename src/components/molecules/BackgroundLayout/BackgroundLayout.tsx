import { ScrollView, ImageBackground } from "react-native";
import { BackgroundLayoutProps } from "./BackgroundLayout.types";

export const BackgroundLayout = ({
  source,
  children,
}: BackgroundLayoutProps) => {
  return (
    <ImageBackground source={source}>
      <ScrollView>{children}</ScrollView>
    </ImageBackground>
  );
};

export default BackgroundLayout;
