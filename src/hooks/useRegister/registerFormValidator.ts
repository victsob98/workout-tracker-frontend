import { z } from "zod";

export const registerFormValidator = z.object({
  firstName: z.string().min(1, { message: "Firstname is required" }),
  lastName: z.string().min(1, { message: "Lastname is required" }),
  email: z.string().min(1, { message: "Provide valid email" }).email(),
  password: z.string().min(5, { message: "Password must have at least 5 characters" }),
});

export type RegisterForm = z.infer<typeof registerFormValidator>;
