export declare class AdminDashboardService {
    getStats(): Promise<{
        workshops: number;
        registrations: number;
        incubation_applications: number;
        member_applications: number;
        blogs: number;
        contact_messages: number;
    }>;
    getRecentActivity(): Promise<{
        type: string;
        description: string;
        date: Date;
    }[]>;
}
export declare const adminDashboardService: AdminDashboardService;
//# sourceMappingURL=admin-dashboard.service.d.ts.map