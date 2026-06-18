import type { Request, Response, NextFunction } from "express";
export declare class AdminAuthController {
    login(req: Request, res: Response, next: NextFunction): Promise<void>;
    profile(req: Request, res: Response): Promise<void>;
    logout(_req: Request, res: Response): Promise<void>;
}
export declare const adminAuthController: AdminAuthController;
//# sourceMappingURL=admin-auth.controller.d.ts.map