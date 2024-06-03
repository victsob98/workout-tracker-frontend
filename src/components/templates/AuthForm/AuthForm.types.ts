import { ReactNode } from "react";

export type AuthFormProps = {
  title: string;
  buttonText: string;
  onSubmit: () => void;
  children: ReactNode;
};
