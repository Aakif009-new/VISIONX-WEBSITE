import type { Request, Response, NextFunction } from "express";
export declare class AdminApplicationsController {
    getIncubations(_req: Request, res: Response, next: NextFunction): Promise<void>;
    updateIncubationStatus(req: Request, res: Response, next: NextFunction): Promise<void>;
    getMembers(_req: Request, res: Response, next: NextFunction): Promise<void>;
    updateMemberStatus(req: Request, res: Response, next: NextFunction): Promise<void>;
    getContacts(_req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteContact(req: Request, res: Response, next: NextFunction): Promise<void>;
    getRegistrations(_req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare const adminApplicationsController: AdminApplicationsController;
//# sourceMappingURL=admin-applications.controller.d.ts.map