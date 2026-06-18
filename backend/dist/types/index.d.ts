import { Request, Response, NextFunction } from "express";
export type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>;
export interface PaginationQuery {
    page?: string;
    limit?: string;
}
export interface ApiResponse<T = unknown> {
    success: boolean;
    message: string;
    data?: T;
    error?: string;
}
//# sourceMappingURL=index.d.ts.map