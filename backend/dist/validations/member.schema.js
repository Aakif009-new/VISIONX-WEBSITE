"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMemberApplicationSchema = void 0;
const zod_1 = require("zod");
exports.createMemberApplicationSchema = zod_1.z.object({
    full_name: zod_1.z.string().min(1, "Full name is required"),
    college_name: zod_1.z.string().min(1, "College name is required"),
    department: zod_1.z.string().min(1, "Department is required"),
    year_of_study: zod_1.z.string().min(1, "Year of study is required"),
    role_interested: zod_1.z.string().min(1, "Role interested is required"),
    why_join: zod_1.z.string().min(1, "Why join is required"),
    relevant_experience: zod_1.z.string().optional().nullable(),
});
//# sourceMappingURL=member.schema.js.map