import { z } from "zod";

export const createWorkshopSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  banner_image: z.string().url("Invalid image URL").optional().nullable(),
  venue: z.string().min(1, "Venue is required"),
  event_date: z.string().min(1, "Event date is required"),
  event_time: z.string().min(1, "Event time is required"),
  registration_open: z.boolean().optional().default(true),
  max_seats: z.number().int().positive("Max seats must be positive").optional().nullable(),
});

export const updateWorkshopSchema = createWorkshopSchema.partial();

export type CreateWorkshopInput = z.infer<typeof createWorkshopSchema>;
export type UpdateWorkshopInput = z.infer<typeof updateWorkshopSchema>;
