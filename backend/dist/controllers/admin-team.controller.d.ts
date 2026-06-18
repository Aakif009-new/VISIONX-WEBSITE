import type { Request, Response, NextFunction } from "express";
export declare class AdminTeamController {
    getAll(_req: Request, res: Response, next: NextFunction): Promise<void>;
    create(req: Request, res: Response, next: NextFunction): Promise<void>;
    update(req: Request, res: Response, next: NextFunction): Promise<void>;
    remove(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare const adminTeamController: AdminTeamController;
//# sourceMappingURL=admin-team.controller.d.ts.map