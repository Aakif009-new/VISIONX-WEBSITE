export declare class AdminSettingsService {
    getAll(): Promise<Record<string, string>>;
    getByKey(key: string): Promise<{
        id: string;
        updated_at: Date;
        value: string;
        key: string;
    }>;
    upsert(key: string, value: string): Promise<{
        id: string;
        updated_at: Date;
        value: string;
        key: string;
    }>;
}
export declare const adminSettingsService: AdminSettingsService;
//# sourceMappingURL=admin-settings.service.d.ts.map