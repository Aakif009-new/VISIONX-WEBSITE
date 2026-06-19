import type { Request, Response, NextFunction } from "express";
import { contactService, googleSheetsService } from "../services";
import { createContactSchema } from "../validations";

export class ContactController {
  async send(req: Request, res: Response, next: NextFunction) {
    try {
      const data = createContactSchema.parse(req.body);
      const message = await contactService.create(data);

      googleSheetsService.addContactMessage({
        id: message.id,
        name: message.name,
        email: message.email,
        message: message.message,
        created_at: message.created_at,
      });

      res.status(201).json({
        success: true,
        message: "Message sent successfully",
        data: message,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const contactController = new ContactController();
