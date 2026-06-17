import type { CreateIncubationInput } from "../validations";
export declare class IncubationService {
    create(data: CreateIncubationInput): Promise<{
        id: string;
        created_at: Date;
        full_name: string;
        college_name: string;
        status: string;
        startup_name: string;
        problem_statement: string;
        target_audience: string;
        startup_stage: string;
        support_needed: string;
    }>;
    getAll(): Promise<{
        id: string;
        created_at: Date;
        full_name: string;
        college_name: string;
        status: string;
        startup_name: string;
        problem_statement: string;
        target_audience: string;
        startup_stage: string;
        support_needed: string;
    }[]>;
}
export declare const incubationService: IncubationService;
//# sourceMappingURL=incubation.service.d.ts.map