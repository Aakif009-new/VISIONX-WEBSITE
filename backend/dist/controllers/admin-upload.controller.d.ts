import type { Request, Response, NextFunction } from "express";
import multer from "multer";
export declare const upload: multer.Multer;
export declare class AdminUploadController {
    uploadFile(req: Request, res: Response, _next: NextFunction): Promise<void>;
}
export declare const adminUploadController: AdminUploadController;
//# sourceMappingURL=admin-upload.controller.d.ts.map