import type { Request, Response, NextFunction } from "express";
export declare function adminAuth(req: Request, _res: Response, next: NextFunction): Promise<void>;
export declare function requireRole(...roles: string[]): (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=adminAuth.d.ts.map