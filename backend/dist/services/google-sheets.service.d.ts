export declare class GoogleSheetsService {
    private appendRows;
    addWorkshopRegistration(data: {
        id: string;
        full_name: string;
        email: string;
        phone: string;
        college_name: string;
        department: string;
        year_of_study: string;
        workshop_name: string;
        created_at: Date;
    }): Promise<void>;
    addIncubationApplication(data: {
        id: string;
        full_name: string;
        college_name: string;
        startup_name: string;
        problem_statement: string;
        target_audience: string;
        startup_stage: string;
        support_needed: string;
        status: string;
        created_at: Date;
    }): Promise<void>;
    addMemberApplication(data: {
        id: string;
        full_name: string;
        college_name: string;
        department: string;
        year_of_study: string;
        role_interested: string;
        why_join: string;
        relevant_experience: string | null;
        status: string;
        created_at: Date;
    }): Promise<void>;
}
export declare const googleSheetsService: GoogleSheetsService;
//# sourceMappingURL=google-sheets.service.d.ts.map