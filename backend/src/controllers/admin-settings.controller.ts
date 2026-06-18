import type { Request, Response, NextFunction } from "express";
import { adminSettingsService } from "../services";
import { updateSettingsSchema } from "../validations/admin.schema";

export class AdminSettingsController {
  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const settings = await adminSettingsService.getAll();
      res.json({ success: true, data: settings });
    } catch (error) {
      next(error);
    }
  }

  async upsert(req: Request, res: Response, next: NextFunction) {
    try {
      const { key, value } = updateSettingsSchema.parse(req.body);
      const setting = await adminSettingsService.upsert(key, value);
      res.json({ success: true, data: setting });
    } catch (error) {
      next(error);
    }
  }
}

export const adminSettingsController = new AdminSettingsController();
