import type { CreateMemberApplicationInput } from "../validations";
export declare class MemberService {
    create(data: CreateMemberApplicationInput): Promise<{
        id: string;
        created_at: Date;
        full_name: string;
        college_name: string;
        department: string;
        year_of_study: string;
        status: string;
        role_interested: string;
        why_join: string;
        relevant_experience: string | null;
    }>;
    getAll(): Promise<{
        id: string;
        created_at: Date;
        full_name: string;
        college_name: string;
        department: string;
        year_of_study: string;
        status: string;
        role_interested: string;
        why_join: string;
        relevant_experience: string | null;
    }[]>;
}
export declare const memberService: MemberService;
//# sourceMappingURL=member.service.d.ts.map