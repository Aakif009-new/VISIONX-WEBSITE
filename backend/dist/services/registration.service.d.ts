import type { CreateRegistrationInput } from "../validations";
export declare class RegistrationService {
    create(data: CreateRegistrationInput): Promise<{
        id: string;
        email: string;
        created_at: Date;
        full_name: string;
        phone: string;
        college_name: string;
        department: string;
        year_of_study: string;
        workshop_id: string;
        additional_notes: string | null;
    }>;
    getByWorkshop(workshopId: string): Promise<{
        id: string;
        email: string;
        created_at: Date;
        full_name: string;
        phone: string;
        college_name: string;
        department: string;
        year_of_study: string;
        workshop_id: string;
        additional_notes: string | null;
    }[]>;
}
export declare const registrationService: RegistrationService;
//# sourceMappingURL=registration.service.d.ts.map