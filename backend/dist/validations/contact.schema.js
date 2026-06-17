"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContactSchema = void 0;
const zod_1 = require("zod");
exports.createContactSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    email: zod_1.z.string().email("Invalid email address"),
    message: zod_1.z.string().min(1, "Message is required"),
});
//# sourceMappingURL=contact.schema.js.map