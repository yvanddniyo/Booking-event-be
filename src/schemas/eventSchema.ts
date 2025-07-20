import { z } from "zod";

// Schema for the request body what comes from form data
export const eventCreateSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  description: z.string().min(1, "Description is required").max(1000),
  date: z.string().min(1, "Date is required"),
  location: z.string().min(1, "Location is required").max(255),
  price: z.string().min(1, "Price is required"),
  capacity: z.string().min(1, "Capacity is required"),
});

// Schema for the database transformed data
export const eventSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(1000),
  date: z.date(),
  location: z.string().min(1).max(255),
  price: z.number().min(0).max(1000000),
  capacity: z.number().min(1).max(1000000),
  image_url: z.string(),
});

export type EventCreateSchema = z.infer<typeof eventCreateSchema>;
export type EventSchema = z.infer<typeof eventSchema>;