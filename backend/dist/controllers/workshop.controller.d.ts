import type { Request, Response, NextFunction } from "express";
export declare class WorkshopController {
    getAll(req: Request, res: Response, next: NextFunction): Promise<void>;
    getById(req: Request, res: Response, next: NextFunction): Promise<void>;
    create(req: Request, res: Response, next: NextFunction): Promise<void>;
    update(req: Request, res: Response, next: NextFunction): Promise<void>;
    remove(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare const workshopController: WorkshopController;
//# sourceMappingURL=workshop.controller.d.ts.map