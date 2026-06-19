import type { Request, Response, NextFunction } from "express";
import { workshopService } from "../services";
import { createWorkshopSchema, updateWorkshopSchema } from "../validations";

export class WorkshopController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const workshops = await workshopService.getAll();
      res.json({ success: true, data: workshops });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const workshop = await workshopService.getById(req.params.id as string);
      res.json({ success: true, data: workshop });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = createWorkshopSchema.parse(req.body);
      const workshop = await workshopService.create(data);
      res.status(201).json({ success: true, data: workshop });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const data = updateWorkshopSchema.parse(req.body);
      const workshop = await workshopService.update(req.params.id as string, data);
      res.json({ success: true, data: workshop });
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      await workshopService.remove(req.params.id as string);
      res.json({ success: true, message: "Workshop deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
}

export const workshopController = new WorkshopController();
