import { ScrollView, ImageBackground } from "react-native";

import { styles } from "./BackgroundLayout.styles";
import { BackgroundLayoutProps } from "./BackgroundLayout.types";

export const BackgroundLayout = ({ source, children }: BackgroundLayoutProps) => {
  return (
    <ImageBackground source={source}>
      <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scrollContainer}>
        {children}
      </ScrollView>
    </ImageBackground>
  );
};

export default BackgroundLayout;
