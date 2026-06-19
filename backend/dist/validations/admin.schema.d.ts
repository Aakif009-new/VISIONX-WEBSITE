import { z } from "zod";
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const createTeamMemberSchema: z.ZodObject<{
    name: z.ZodString;
    role: z.ZodString;
    department: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    bio: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    image_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    linkedin_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    display_order: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    council: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    role: string;
    display_order: number;
    council: boolean;
    department?: string | null | undefined;
    bio?: string | null | undefined;
    image_url?: string | null | undefined;
    linkedin_url?: string | null | undefined;
}, {
    name: string;
    role: string;
    department?: string | null | undefined;
    bio?: string | null | undefined;
    image_url?: string | null | undefined;
    linkedin_url?: string | null | undefined;
    display_order?: number | undefined;
    council?: boolean | undefined;
}>;
export declare const updateTeamMemberSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodString>;
    department: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    bio: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    image_url: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    linkedin_url: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    display_order: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodNumber>>>;
    council: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    role?: string | undefined;
    department?: string | null | undefined;
    bio?: string | null | undefined;
    image_url?: string | null | undefined;
    linkedin_url?: string | null | undefined;
    display_order?: number | undefined;
    council?: boolean | undefined;
}, {
    name?: string | undefined;
    role?: string | undefined;
    department?: string | null | undefined;
    bio?: string | null | undefined;
    image_url?: string | null | undefined;
    linkedin_url?: string | null | undefined;
    display_order?: number | undefined;
    council?: boolean | undefined;
}>;
export declare const createBlogSchema: z.ZodObject<{
    title: z.ZodString;
    slug: z.ZodOptional<z.ZodString>;
    excerpt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    content: z.ZodString;
    category: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    author: z.ZodString;
    image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    status: z.ZodDefault<z.ZodOptional<z.ZodEnum<["draft", "published"]>>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    status: "draft" | "published";
    content: string;
    author: string;
    slug?: string | undefined;
    excerpt?: string | null | undefined;
    category?: string | null | undefined;
    image?: string | null | undefined;
}, {
    title: string;
    content: string;
    author: string;
    status?: "draft" | "published" | undefined;
    slug?: string | undefined;
    excerpt?: string | null | undefined;
    category?: string | null | undefined;
    image?: string | null | undefined;
}>;
export declare const updateBlogSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    excerpt: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    content: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    author: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    status: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodEnum<["draft", "published"]>>>>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    status?: "draft" | "published" | undefined;
    slug?: string | undefined;
    excerpt?: string | null | undefined;
    content?: string | undefined;
    category?: string | null | undefined;
    author?: string | undefined;
    image?: string | null | undefined;
}, {
    title?: string | undefined;
    status?: "draft" | "published" | undefined;
    slug?: string | undefined;
    excerpt?: string | null | undefined;
    content?: string | undefined;
    category?: string | null | undefined;
    author?: string | undefined;
    image?: string | null | undefined;
}>;
export declare const statusUpdateSchema: z.ZodObject<{
    status: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: string;
}, {
    status: string;
}>;
export declare const updateSettingsSchema: z.ZodObject<{
    key: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    key: string;
}, {
    value: string;
    key: string;
}>;
export type LoginInput = z.infer<typeof loginSchema>;
export type CreateTeamMemberInput = z.infer<typeof createTeamMemberSchema>;
export type UpdateTeamMemberInput = z.infer<typeof updateTeamMemberSchema>;
export type CreateBlogInput = z.infer<typeof createBlogSchema>;
export type UpdateBlogInput = z.infer<typeof updateBlogSchema>;
//# sourceMappingURL=admin.schema.d.ts.map