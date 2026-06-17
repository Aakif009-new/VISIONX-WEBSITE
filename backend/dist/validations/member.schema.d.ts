import { z } from "zod";
export declare const createMemberApplicationSchema: z.ZodObject<{
    full_name: z.ZodString;
    college_name: z.ZodString;
    department: z.ZodString;
    year_of_study: z.ZodString;
    role_interested: z.ZodString;
    why_join: z.ZodString;
    relevant_experience: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    full_name: string;
    college_name: string;
    department: string;
    year_of_study: string;
    role_interested: string;
    why_join: string;
    relevant_experience?: string | null | undefined;
}, {
    full_name: string;
    college_name: string;
    department: string;
    year_of_study: string;
    role_interested: string;
    why_join: string;
    relevant_experience?: string | null | undefined;
}>;
export type CreateMemberApplicationInput = z.infer<typeof createMemberApplicationSchema>;
//# sourceMappingURL=member.schema.d.ts.map