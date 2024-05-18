import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "invalid email" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const registerSchema = z.object({
  email: z.string().email({ message: "invalid email" }),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters" }),
  firstname: z.string().min(1, { message: "Name is required" }),
  lastname: z.string(),
});
