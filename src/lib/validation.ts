import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().trim().min(3, "Enter at least 3 characters"),
  password: z.string().min(6, "Passwords are at least 6 characters"),
  remember: z.boolean().optional(),
});

export const registerSchema = z.object({
  email: z.string().trim().email("Enter a valid email address"),
  username: z.string().trim().min(3, "Enter at least 3 characters"),
  password: z.string().min(6, "Passwords are at least 6 characters"),
});

export type LoginValues = z.infer<typeof loginSchema>;
export type RegisterValues = z.infer<typeof registerSchema>;
