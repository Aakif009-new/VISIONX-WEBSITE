"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIncubationSchema = void 0;
const zod_1 = require("zod");
exports.createIncubationSchema = zod_1.z.object({
    full_name: zod_1.z.string().min(1, "Full name is required"),
    college_name: zod_1.z.string().min(1, "College name is required"),
    startup_name: zod_1.z.string().min(1, "Startup name is required"),
    problem_statement: zod_1.z.string().min(1, "Problem statement is required"),
    target_audience: zod_1.z.string().min(1, "Target audience is required"),
    startup_stage: zod_1.z.string().min(1, "Startup stage is required"),
    support_needed: zod_1.z.string().min(1, "Support needed is required"),
});
//# sourceMappingURL=incubation.schema.js.map