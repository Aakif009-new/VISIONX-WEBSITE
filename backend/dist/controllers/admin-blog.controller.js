"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminBlogController = exports.AdminBlogController = void 0;
const services_1 = require("../services");
const admin_schema_1 = require("../validations/admin.schema");
class AdminBlogController {
    async getAll(req, res, next) {
        try {
            const status = req.query.status;
            const posts = await services_1.adminBlogService.getAll(status);
            res.json({ success: true, data: posts });
        }
        catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            const post = await services_1.adminBlogService.getById(req.params.id);
            res.json({ success: true, data: post });
        }
        catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            const data = admin_schema_1.createBlogSchema.parse(req.body);
            const post = await services_1.adminBlogService.create(data);
            res.status(201).json({ success: true, data: post });
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const data = admin_schema_1.updateBlogSchema.parse(req.body);
            const post = await services_1.adminBlogService.update(req.params.id, data);
            res.json({ success: true, data: post });
        }
        catch (error) {
            next(error);
        }
    }
    async remove(req, res, next) {
        try {
            await services_1.adminBlogService.remove(req.params.id);
            res.json({ success: true, message: "Blog post deleted" });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.AdminBlogController = AdminBlogController;
exports.adminBlogController = new AdminBlogController();
//# sourceMappingURL=admin-blog.controller.js.map