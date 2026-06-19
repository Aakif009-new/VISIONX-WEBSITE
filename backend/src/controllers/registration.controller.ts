import type { Request, Response, NextFunction } from "express";
import { registrationService, googleSheetsService } from "../services";
import { createRegistrationSchema } from "../validations";

export class RegistrationController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const data = createRegistrationSchema.parse(req.body);
      const registration = await registrationService.create(data);

      const workshop = await (
        await import("../services")
      ).workshopService.getById(data.workshop_id);

      googleSheetsService.addWorkshopRegistration({
        id: registration.id,
        full_name: registration.full_name,
        email: registration.email,
        phone: registration.phone,
        college_name: registration.college_name,
        department: registration.department,
        year_of_study: registration.year_of_study,
        workshop_name: workshop.title,
        created_at: registration.created_at,
      });

      res.status(201).json({
        success: true,
        message: "Registration successful",
        data: registration,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const registrationController = new RegistrationController();
