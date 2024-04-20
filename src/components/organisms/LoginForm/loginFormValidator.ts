import { z } from "zod";

export const loginFormValidator = z.object({
  email: z.string().email({ message: "Provide valid email" }),
  password: z.string().min(5, { message: "Password must have at least 5 characters" }),
});

export type LoginForm = z.infer<typeof loginFormValidator>;
