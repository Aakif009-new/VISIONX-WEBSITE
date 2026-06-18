"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminBlogService = exports.AdminBlogService = void 0;
const database_1 = __importDefault(require("../config/database"));
function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
}
class AdminBlogService {
    async getAll(status) {
        const where = status ? { status } : {};
        return database_1.default.blog_posts.findMany({
            where,
            orderBy: { created_at: "desc" },
        });
    }
    async getBySlug(slug) {
        const post = await database_1.default.blog_posts.findUnique({ where: { slug } });
        if (!post)
            throw new Error("Blog post not found");
        return post;
    }
    async getById(id) {
        const post = await database_1.default.blog_posts.findUnique({ where: { id } });
        if (!post)
            throw new Error("Blog post not found");
        return post;
    }
    async create(data) {
        const slug = data.slug || slugify(data.title);
        return database_1.default.blog_posts.create({
            data: {
                ...data,
                slug,
                published_at: data.status === "published" ? new Date() : null,
            },
        });
    }
    async update(id, data) {
        await this.getById(id);
        const updateData = { ...data };
        if (data.status === "published") {
            updateData.published_at = new Date();
        }
        return database_1.default.blog_posts.update({ where: { id }, data: updateData });
    }
    async remove(id) {
        await this.getById(id);
        return database_1.default.blog_posts.delete({ where: { id } });
    }
}
exports.AdminBlogService = AdminBlogService;
exports.adminBlogService = new AdminBlogService();
//# sourceMappingURL=admin-blog.service.js.map