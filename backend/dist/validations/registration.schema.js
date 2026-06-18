"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRegistrationSchema = void 0;
const zod_1 = require("zod");
exports.createRegistrationSchema = zod_1.z.object({
    full_name: zod_1.z.string().min(1, "Full name is required"),
    email: zod_1.z.string().email("Invalid email address"),
    phone: zod_1.z.string().min(1, "Phone number is required"),
    college_name: zod_1.z.string().min(1, "College name is required"),
    department: zod_1.z.string().min(1, "Department is required"),
    year_of_study: zod_1.z.string().min(1, "Year of study is required"),
    workshop_id: zod_1.z.string().uuid("Invalid workshop ID"),
    additional_notes: zod_1.z.string().optional().nullable(),
});
//# sourceMappingURL=registration.schema.js.map