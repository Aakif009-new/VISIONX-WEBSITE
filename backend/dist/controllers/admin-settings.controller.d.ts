import type { Request, Response, NextFunction } from "express";
export declare class AdminSettingsController {
    getAll(_req: Request, res: Response, next: NextFunction): Promise<void>;
    upsert(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare const adminSettingsController: AdminSettingsController;
//# sourceMappingURL=admin-settings.controller.d.ts.map