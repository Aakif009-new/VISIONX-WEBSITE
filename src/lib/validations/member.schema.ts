import { z } from "zod";

export const createMemberApplicationSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  college_name: z.string().min(1, "College name is required"),
  department: z.string().min(1, "Department is required"),
  year_of_study: z.string().min(1, "Year of study is required"),
  role_interested: z.string().min(1, "Role interested is required"),
  why_join: z.string().min(1, "Why join is required"),
  relevant_experience: z.string().optional().nullable(),
});

export type CreateMemberApplicationInput = z.infer<typeof createMemberApplicationSchema>;
