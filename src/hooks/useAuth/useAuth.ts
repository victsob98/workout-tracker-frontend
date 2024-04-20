import { AuthContext } from "@context/auth/authContext/AuthContext";
import { useContext } from "react";

export const useAuth = () => {
  const ctx = useContext(AuthContext);

  if (ctx === undefined) {
    throw new Error("useAuth hook is not wrapped by AuthProvider");
  }

  return ctx;
};
