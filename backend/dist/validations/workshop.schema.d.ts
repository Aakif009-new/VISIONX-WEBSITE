import { z } from "zod";
export declare const createWorkshopSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    banner_image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    venue: z.ZodString;
    event_date: z.ZodString;
    event_time: z.ZodString;
    registration_open: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    max_seats: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    venue: string;
    event_date: string;
    event_time: string;
    registration_open: boolean;
    banner_image?: string | null | undefined;
    max_seats?: number | null | undefined;
}, {
    title: string;
    description: string;
    venue: string;
    event_date: string;
    event_time: string;
    banner_image?: string | null | undefined;
    registration_open?: boolean | undefined;
    max_seats?: number | null | undefined;
}>;
export declare const updateWorkshopSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    banner_image: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodString>>>;
    venue: z.ZodOptional<z.ZodString>;
    event_date: z.ZodOptional<z.ZodString>;
    event_time: z.ZodOptional<z.ZodString>;
    registration_open: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodBoolean>>>;
    max_seats: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    description?: string | undefined;
    banner_image?: string | null | undefined;
    venue?: string | undefined;
    event_date?: string | undefined;
    event_time?: string | undefined;
    registration_open?: boolean | undefined;
    max_seats?: number | null | undefined;
}, {
    title?: string | undefined;
    description?: string | undefined;
    banner_image?: string | null | undefined;
    venue?: string | undefined;
    event_date?: string | undefined;
    event_time?: string | undefined;
    registration_open?: boolean | undefined;
    max_seats?: number | null | undefined;
}>;
export type CreateWorkshopInput = z.infer<typeof createWorkshopSchema>;
export type UpdateWorkshopInput = z.infer<typeof updateWorkshopSchema>;
//# sourceMappingURL=workshop.schema.d.ts.map