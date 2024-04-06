import { FontAwesome } from "@expo/vector-icons";
import { ComponentProps } from "react";

export interface TabBarIconProps {
  name: ComponentProps<typeof FontAwesome>["name"];
  color: string;
}
