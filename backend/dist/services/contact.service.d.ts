import type { CreateContactInput } from "../validations";
export declare class ContactService {
    create(data: CreateContactInput): Promise<{
        name: string;
        id: string;
        created_at: Date;
        email: string;
        message: string;
    }>;
}
export declare const contactService: ContactService;
//# sourceMappingURL=contact.service.d.ts.map