import { z } from "zod";

export const loginFormValidator = z.object({
  email: z.string().email({ message: "form.emailRequired" }),
  password: z.string().min(5, { message: "form.passwordRequired" }),
});

export type LoginForm = z.infer<typeof loginFormValidator>;
