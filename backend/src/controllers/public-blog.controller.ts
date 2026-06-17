import type { Request, Response, NextFunction } from "express";
import { adminBlogService } from "../services";

export class PublicBlogController {
  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const posts = await adminBlogService.getAll("published");
      res.json({ success: true, data: posts });
    } catch (error) {
      next(error);
    }
  }

  async getBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const post = await adminBlogService.getBySlug(req.params.slug as string);
      if (post.status !== "published") {
        return res.status(404).json({ success: false, message: "Blog post not found" });
      }
      res.json({ success: true, data: post });
    } catch (error) {
      next(error);
    }
  }
}

export const publicBlogController = new PublicBlogController();
