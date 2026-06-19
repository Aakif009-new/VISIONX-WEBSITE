import type { Request, Response, NextFunction } from "express";
import { adminDashboardService } from "../services";

export class AdminDashboardController {
  async getStats(_req: Request, res: Response, next: NextFunction) {
    try {
      const stats = await adminDashboardService.getStats();
      const activity = await adminDashboardService.getRecentActivity();
      res.json({ success: true, data: { stats, recentActivity: activity } });
    } catch (error) {
      next(error);
    }
  }
}

export const adminDashboardController = new AdminDashboardController();
