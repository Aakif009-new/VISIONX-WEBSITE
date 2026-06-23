import { z } from "zod";

export const createRegistrationSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  college_name: z.string().min(1, "College name is required"),
  department: z.string().min(1, "Department is required"),
  year_of_study: z.string().min(1, "Year of study is required"),
  workshop_id: z.string().uuid("Invalid workshop ID"),
  additional_notes: z.string().optional().nullable(),
});

export type CreateRegistrationInput = z.infer<typeof createRegistrationSchema>;
