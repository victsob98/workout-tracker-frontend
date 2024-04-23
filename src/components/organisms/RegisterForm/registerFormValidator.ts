import { z } from "zod";

export const registerFormValidator = z.object({
  firstName: z.string().min(1, { message: "register.nameRequired" }),
  lastName: z.string().min(1, { message: "register.lastnameRequired" }),
  email: z.string().min(1, { message: "form.emailRequired" }).email(),
  password: z.string().min(5, { message: "form.passwordRequired" }),
});

export type RegisterForm = z.infer<typeof registerFormValidator>;
