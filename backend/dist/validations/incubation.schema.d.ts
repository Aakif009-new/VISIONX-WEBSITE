import { z } from "zod";
export declare const createIncubationSchema: z.ZodObject<{
    full_name: z.ZodString;
    college_name: z.ZodString;
    startup_name: z.ZodString;
    problem_statement: z.ZodString;
    target_audience: z.ZodString;
    startup_stage: z.ZodString;
    support_needed: z.ZodString;
}, "strip", z.ZodTypeAny, {
    full_name: string;
    college_name: string;
    startup_name: string;
    problem_statement: string;
    target_audience: string;
    startup_stage: string;
    support_needed: string;
}, {
    full_name: string;
    college_name: string;
    startup_name: string;
    problem_statement: string;
    target_audience: string;
    startup_stage: string;
    support_needed: string;
}>;
export type CreateIncubationInput = z.infer<typeof createIncubationSchema>;
//# sourceMappingURL=incubation.schema.d.ts.map