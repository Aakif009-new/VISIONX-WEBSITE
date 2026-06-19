"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicBlogController = exports.PublicBlogController = void 0;
const services_1 = require("../services");
class PublicBlogController {
    async getAll(_req, res, next) {
        try {
            const posts = await services_1.adminBlogService.getAll("published");
            res.json({ success: true, data: posts });
        }
        catch (error) {
            next(error);
        }
    }
    async getBySlug(req, res, next) {
        try {
            const post = await services_1.adminBlogService.getBySlug(req.params.slug);
            if (post.status !== "published") {
                return res.status(404).json({ success: false, message: "Blog post not found" });
            }
            res.json({ success: true, data: post });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.PublicBlogController = PublicBlogController;
exports.publicBlogController = new PublicBlogController();
//# sourceMappingURL=public-blog.controller.js.map