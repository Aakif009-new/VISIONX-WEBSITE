import type { Request, Response, NextFunction } from "express";
import prisma from "../config/database";
import { statusUpdateSchema } from "../validations/admin.schema";

export class AdminApplicationsController {
  async getIncubations(_req: Request, res: Response, next: NextFunction) {
    try {
      const applications = await prisma.incubation_applications.findMany({
        orderBy: { created_at: "desc" },
      });
      res.json({ success: true, data: applications });
    } catch (error) {
      next(error);
    }
  }

  async updateIncubationStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const { status } = statusUpdateSchema.parse(req.body);
      const application = await prisma.incubation_applications.update({
        where: { id: req.params.id as string },
        data: { status },
      });
      res.json({ success: true, data: application });
    } catch (error) {
      next(error);
    }
  }

  async getMembers(_req: Request, res: Response, next: NextFunction) {
    try {
      const applications = await prisma.visionx_member_applications.findMany({
        orderBy: { created_at: "desc" },
      });
      res.json({ success: true, data: applications });
    } catch (error) {
      next(error);
    }
  }

  async updateMemberStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const { status } = statusUpdateSchema.parse(req.body);
      const application = await prisma.visionx_member_applications.update({
        where: { id: req.params.id as string },
        data: { status },
      });
      res.json({ success: true, data: application });
    } catch (error) {
      next(error);
    }
  }

  async getContacts(_req: Request, res: Response, next: NextFunction) {
    try {
      const messages = await prisma.contact_messages.findMany({
        orderBy: { created_at: "desc" },
      });
      res.json({ success: true, data: messages });
    } catch (error) {
      next(error);
    }
  }

  async deleteContact(req: Request, res: Response, next: NextFunction) {
    try {
      await prisma.contact_messages.delete({
        where: { id: req.params.id as string },
      });
      res.json({ success: true, message: "Message deleted" });
    } catch (error) {
      next(error);
    }
  }

  async getRegistrations(_req: Request, res: Response, next: NextFunction) {
    try {
      const registrations = await prisma.workshop_registrations.findMany({
        orderBy: { created_at: "desc" },
        include: { workshop: { select: { title: true } } },
      });
      res.json({ success: true, data: registrations });
    } catch (error) {
      next(error);
    }
  }
}

export const adminApplicationsController = new AdminApplicationsController();
