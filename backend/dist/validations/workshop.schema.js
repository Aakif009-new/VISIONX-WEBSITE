"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWorkshopSchema = exports.createWorkshopSchema = void 0;
const zod_1 = require("zod");
exports.createWorkshopSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    description: zod_1.z.string().min(1, "Description is required"),
    banner_image: zod_1.z.string().url("Invalid image URL").optional().nullable(),
    venue: zod_1.z.string().min(1, "Venue is required"),
    event_date: zod_1.z.string().min(1, "Event date is required"),
    event_time: zod_1.z.string().min(1, "Event time is required"),
    registration_open: zod_1.z.boolean().optional().default(true),
    max_seats: zod_1.z.number().int().positive("Max seats must be positive").optional().nullable(),
});
exports.updateWorkshopSchema = exports.createWorkshopSchema.partial();
//# sourceMappingURL=workshop.schema.js.map