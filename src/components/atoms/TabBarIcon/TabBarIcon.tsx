import { FontAwesome } from "@expo/vector-icons";
import { TabBarIconProps } from "./TabBarIcon.types";

export const TabBarIcon = ({ name, color }: TabBarIconProps) => {
  return (
    <FontAwesome
      size={28}
      style={{ marginBottom: -3 }}
      name={name}
      color={color}
    />
  );
};
