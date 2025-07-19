import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string().min(1).max(255).refine((val) => val.trim() !== "", {
    message: "First name is required",
  }),
  lastName: z.string().min(1).max(255).refine((val) => val.trim() !== "", {
    message: "Last name is required",
  }),
  email: z.string().email().min(1).max(255).refine((val) => val.trim() !== "", {
    message: "Email is required",
  }),
  password: z.string().min(8).max(255).refine((val) => val.trim() !== "", {
    message: "Password is required",
  }),
  role: z.enum(["ADMIN", "USER"]).default("USER"),
  status: z.enum(["ACTIVE", "INACTIVE"]).default("ACTIVE"),
});

export type UserSchema = z.infer<typeof userSchema>;