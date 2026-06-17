import type { Request, Response, NextFunction } from "express";
import { adminAuthService } from "../services";
import { loginSchema } from "../validations/admin.schema";

export class AdminAuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = loginSchema.parse(req.body);
      const result = await adminAuthService.login(email, password);
      res.json({ success: true, ...result });
    } catch (error) {
      next(error);
    }
  }

  async profile(req: Request, res: Response) {
    const user = (req as any).user;
    res.json({ success: true, data: user });
  }

  async logout(_req: Request, res: Response) {
    res.json({ success: true, message: "Logged out successfully" });
  }
}

export const adminAuthController = new AdminAuthController();
