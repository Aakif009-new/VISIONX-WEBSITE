import { z } from "zod";
export declare const createContactSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    message: string;
}, {
    name: string;
    email: string;
    message: string;
}>;
export type CreateContactInput = z.infer<typeof createContactSchema>;
//# sourceMappingURL=contact.schema.d.ts.map