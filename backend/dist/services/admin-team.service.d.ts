import type { CreateTeamMemberInput, UpdateTeamMemberInput } from "../validations/admin.schema";
export declare class AdminTeamService {
    getAll(): Promise<{
        name: string;
        id: string;
        role: string;
        created_at: Date;
        updated_at: Date;
        department: string | null;
        bio: string | null;
        image_url: string | null;
        linkedin_url: string | null;
        display_order: number;
        council: boolean;
    }[]>;
    getById(id: string): Promise<{
        name: string;
        id: string;
        role: string;
        created_at: Date;
        updated_at: Date;
        department: string | null;
        bio: string | null;
        image_url: string | null;
        linkedin_url: string | null;
        display_order: number;
        council: boolean;
    }>;
    create(data: CreateTeamMemberInput): Promise<{
        name: string;
        id: string;
        role: string;
        created_at: Date;
        updated_at: Date;
        department: string | null;
        bio: string | null;
        image_url: string | null;
        linkedin_url: string | null;
        display_order: number;
        council: boolean;
    }>;
    update(id: string, data: UpdateTeamMemberInput): Promise<{
        name: string;
        id: string;
        role: string;
        created_at: Date;
        updated_at: Date;
        department: string | null;
        bio: string | null;
        image_url: string | null;
        linkedin_url: string | null;
        display_order: number;
        council: boolean;
    }>;
    remove(id: string): Promise<{
        name: string;
        id: string;
        role: string;
        created_at: Date;
        updated_at: Date;
        department: string | null;
        bio: string | null;
        image_url: string | null;
        linkedin_url: string | null;
        display_order: number;
        council: boolean;
    }>;
}
export declare const adminTeamService: AdminTeamService;
//# sourceMappingURL=admin-team.service.d.ts.map