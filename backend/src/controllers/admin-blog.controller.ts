import type { Request, Response, NextFunction } from "express";
import { adminBlogService } from "../services";
import { createBlogSchema, updateBlogSchema } from "../validations/admin.schema";

export class AdminBlogController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const status = req.query.status as string | undefined;
      const posts = await adminBlogService.getAll(status);
      res.json({ success: true, data: posts });
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const post = await adminBlogService.getById(req.params.id as string);
      res.json({ success: true, data: post });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = createBlogSchema.parse(req.body);
      const post = await adminBlogService.create(data);
      res.status(201).json({ success: true, data: post });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const data = updateBlogSchema.parse(req.body);
      const post = await adminBlogService.update(req.params.id as string, data);
      res.json({ success: true, data: post });
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      await adminBlogService.remove(req.params.id as string);
      res.json({ success: true, message: "Blog post deleted" });
    } catch (error) {
      next(error);
    }
  }
}

export const adminBlogController = new AdminBlogController();
