import type { Request, Response, NextFunction } from "express";
import { adminTeamService } from "../services";
import { createTeamMemberSchema, updateTeamMemberSchema } from "../validations/admin.schema";

export class AdminTeamController {
  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const members = await adminTeamService.getAll();
      res.json({ success: true, data: members });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = createTeamMemberSchema.parse(req.body);
      const member = await adminTeamService.create(data);
      res.status(201).json({ success: true, data: member });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const data = updateTeamMemberSchema.parse(req.body);
      const member = await adminTeamService.update(req.params.id as string, data);
      res.json({ success: true, data: member });
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      await adminTeamService.remove(req.params.id as string);
      res.json({ success: true, message: "Team member deleted" });
    } catch (error) {
      next(error);
    }
  }
}

export const adminTeamController = new AdminTeamController();
