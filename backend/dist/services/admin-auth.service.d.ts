export declare class AdminAuthService {
    login(email: string, password: string): Promise<{
        token: string;
        user: {
            id: string;
            email: string;
            name: string;
            role: string;
        };
    }>;
    getProfile(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        role: string;
    }>;
}
export declare const adminAuthService: AdminAuthService;
//# sourceMappingURL=admin-auth.service.d.ts.map