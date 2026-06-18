import type { Request, Response, NextFunction } from "express";
export declare class PublicBlogController {
    getAll(_req: Request, res: Response, next: NextFunction): Promise<void>;
    getBySlug(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export declare const publicBlogController: PublicBlogController;
//# sourceMappingURL=public-blog.controller.d.ts.map