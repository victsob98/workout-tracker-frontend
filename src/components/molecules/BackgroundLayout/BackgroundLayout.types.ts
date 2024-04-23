import { ReactNode } from "react";
import { ImageRequireSource } from "react-native";

export interface BackgroundLayoutProps {
  source: ImageRequireSource;
  children: ReactNode;
}
