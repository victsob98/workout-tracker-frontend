import { ReactNode } from "react";

export interface NavigationHeaderProps {
  title?: string;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
}
