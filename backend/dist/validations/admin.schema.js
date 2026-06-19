"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSettingsSchema = exports.statusUpdateSchema = exports.updateBlogSchema = exports.createBlogSchema = exports.updateTeamMemberSchema = exports.createTeamMemberSchema = exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email"),
    password: zod_1.z.string().min(1, "Password is required"),
});
exports.createTeamMemberSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    role: zod_1.z.string().min(1, "Role is required"),
    department: zod_1.z.string().optional().nullable(),
    bio: zod_1.z.string().optional().nullable(),
    image_url: zod_1.z.string().optional().nullable(),
    linkedin_url: zod_1.z.string().optional().nullable(),
    display_order: zod_1.z.number().int().optional().default(0),
    council: zod_1.z.boolean().optional().default(false),
});
exports.updateTeamMemberSchema = exports.createTeamMemberSchema.partial();
exports.createBlogSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    slug: zod_1.z.string().optional(),
    excerpt: zod_1.z.string().optional().nullable(),
    content: zod_1.z.string().min(1, "Content is required"),
    category: zod_1.z.string().optional().nullable(),
    author: zod_1.z.string().min(1, "Author is required"),
    image: zod_1.z.string().optional().nullable(),
    status: zod_1.z.enum(["draft", "published"]).optional().default("draft"),
});
exports.updateBlogSchema = exports.createBlogSchema.partial();
exports.statusUpdateSchema = zod_1.z.object({
    status: zod_1.z.string().min(1, "Status is required"),
});
exports.updateSettingsSchema = zod_1.z.object({
    key: zod_1.z.string().min(1, "Key is required"),
    value: zod_1.z.string().min(1, "Value is required"),
});
//# sourceMappingURL=admin.schema.js.map