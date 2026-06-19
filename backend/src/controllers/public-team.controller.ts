import type { Request, Response, NextFunction } from "express";
import { adminTeamService } from "../services";

export class PublicTeamController {
  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const members = await adminTeamService.getAll();
      res.json({ success: true, data: members });
    } catch (error) {
      next(error);
    }
  }
}

export const publicTeamController = new PublicTeamController();
