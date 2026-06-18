import type { Request, Response, NextFunction } from "express";
export declare class AdminWorkshopController {
    getAll(_req: Request, res: Response, next: NextFunction): Promise<void>;
    create(req: Request, res: Response, next: NextFunction): Promise<void>;
    update(req: Request, res: Response, next: NextFunction): Promise<void>;
    remove(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare const adminWorkshopController: AdminWorkshopController;
//# sourceMappingURL=admin-workshop.controller.d.ts.map