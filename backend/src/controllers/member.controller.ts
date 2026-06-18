import type { Request, Response, NextFunction } from "express";
import { memberService, googleSheetsService } from "../services";
import { createMemberApplicationSchema } from "../validations";

export class MemberController {
  async apply(req: Request, res: Response, next: NextFunction) {
    try {
      const data = createMemberApplicationSchema.parse(req.body);
      const application = await memberService.create(data);

      googleSheetsService.addMemberApplication({
        id: application.id,
        full_name: application.full_name,
        college_name: application.college_name,
        department: application.department,
        year_of_study: application.year_of_study,
        role_interested: application.role_interested,
        why_join: application.why_join,
        relevant_experience: application.relevant_experience,
        status: application.status,
        created_at: application.created_at,
      });

      res.status(201).json({
        success: true,
        message: "Application submitted successfully",
        data: application,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const memberController = new MemberController();
