import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export const createTeamMemberSchema = z.object({
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  department: z.string().optional().nullable(),
  bio: z.string().optional().nullable(),
  image_url: z.string().optional().nullable(),
  linkedin_url: z.string().optional().nullable(),
  display_order: z.number().int().optional().default(0),
  council: z.boolean().optional().default(false),
});

export const updateTeamMemberSchema = createTeamMemberSchema.partial();

export const createBlogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().optional(),
  excerpt: z.string().optional().nullable(),
  content: z.string().min(1, "Content is required"),
  category: z.string().optional().nullable(),
  author: z.string().min(1, "Author is required"),
  image: z.string().optional().nullable(),
  status: z.enum(["draft", "published"]).optional().default("draft"),
});

export const updateBlogSchema = createBlogSchema.partial();

export const statusUpdateSchema = z.object({
  status: z.string().min(1, "Status is required"),
});

export const updateSettingsSchema = z.object({
  key: z.string().min(1, "Key is required"),
  value: z.string().min(1, "Value is required"),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type CreateTeamMemberInput = z.infer<typeof createTeamMemberSchema>;
export type UpdateTeamMemberInput = z.infer<typeof updateTeamMemberSchema>;
export type CreateBlogInput = z.infer<typeof createBlogSchema>;
export type UpdateBlogInput = z.infer<typeof updateBlogSchema>;
