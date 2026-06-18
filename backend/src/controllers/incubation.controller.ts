import type { Request, Response, NextFunction } from "express";
import { incubationService, googleSheetsService } from "../services";
import { createIncubationSchema } from "../validations";

export class IncubationController {
  async apply(req: Request, res: Response, next: NextFunction) {
    try {
      const data = createIncubationSchema.parse(req.body);
      const application = await incubationService.create(data);

      googleSheetsService.addIncubationApplication({
        id: application.id,
        full_name: application.full_name,
        college_name: application.college_name,
        startup_name: application.startup_name,
        problem_statement: application.problem_statement,
        target_audience: application.target_audience,
        startup_stage: application.startup_stage,
        support_needed: application.support_needed,
        status: application.status,
        created_at: application.created_at,
      });

      res.status(201).json({
        success: true,
        message: "Incubation application submitted successfully",
        data: application,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const incubationController = new IncubationController();
