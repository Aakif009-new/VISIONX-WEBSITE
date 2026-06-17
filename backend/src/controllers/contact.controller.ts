import type { Request, Response, NextFunction } from "express";
import { contactService } from "../services";
import { createContactSchema } from "../validations";

export class ContactController {
  async send(req: Request, res: Response, next: NextFunction) {
    try {
      const data = createContactSchema.parse(req.body);
      const message = await contactService.create(data);

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
