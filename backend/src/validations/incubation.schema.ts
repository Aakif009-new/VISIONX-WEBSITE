import { z } from "zod";

export const createIncubationSchema = z.object({
  full_name: z.string().min(1, "Full name is required"),
  college_name: z.string().min(1, "College name is required"),
  startup_name: z.string().min(1, "Startup name is required"),
  problem_statement: z.string().min(1, "Problem statement is required"),
  target_audience: z.string().min(1, "Target audience is required"),
  startup_stage: z.string().min(1, "Startup stage is required"),
  support_needed: z.string().min(1, "Support needed is required"),
});

export type CreateIncubationInput = z.infer<typeof createIncubationSchema>;
