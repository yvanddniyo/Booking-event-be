import { z } from "zod";

export const bookingSchema = z.object({
  eventId: z.string(),
  userId: z.string(),
  quantity: z.number().min(1).max(10000),
  totalPrice: z.number().min(0).max(1000000),
  status: z.enum(["PENDING", "CONFIRMED", "CANCELLED"]).default("PENDING"),
});

export type BookingSchema = z.infer<typeof bookingSchema>;