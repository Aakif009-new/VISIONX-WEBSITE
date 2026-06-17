import { z } from "zod";
export declare const createRegistrationSchema: z.ZodObject<{
    full_name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    college_name: z.ZodString;
    department: z.ZodString;
    year_of_study: z.ZodString;
    workshop_id: z.ZodString;
    additional_notes: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    full_name: string;
    email: string;
    phone: string;
    college_name: string;
    department: string;
    year_of_study: string;
    workshop_id: string;
    additional_notes?: string | null | undefined;
}, {
    full_name: string;
    email: string;
    phone: string;
    college_name: string;
    department: string;
    year_of_study: string;
    workshop_id: string;
    additional_notes?: string | null | undefined;
}>;
export type CreateRegistrationInput = z.infer<typeof createRegistrationSchema>;
//# sourceMappingURL=registration.schema.d.ts.map