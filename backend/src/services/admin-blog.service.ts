import prisma from "../config/database";
import type { CreateBlogInput, UpdateBlogInput } from "../validations/admin.schema";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export class AdminBlogService {
  async getAll(status?: string) {
    const where = status ? { status } : {};
    return prisma.blog_posts.findMany({
      where,
      orderBy: { created_at: "desc" },
    });
  }

  async getBySlug(slug: string) {
    const post = await prisma.blog_posts.findUnique({ where: { slug } });
    if (!post) throw new Error("Blog post not found");
    return post;
  }

  async getById(id: string) {
    const post = await prisma.blog_posts.findUnique({ where: { id } });
    if (!post) throw new Error("Blog post not found");
    return post;
  }

  async create(data: CreateBlogInput) {
    const slug = data.slug || slugify(data.title);
    return prisma.blog_posts.create({
      data: {
        ...data,
        slug,
        published_at: data.status === "published" ? new Date() : null,
      },
    });
  }

  async update(id: string, data: UpdateBlogInput) {
    await this.getById(id);
    const updateData: any = { ...data };
    if (data.status === "published") {
      updateData.published_at = new Date();
    }
    return prisma.blog_posts.update({ where: { id }, data: updateData });
  }

  async remove(id: string) {
    await this.getById(id);
    return prisma.blog_posts.delete({ where: { id } });
  }
}

export const adminBlogService = new AdminBlogService();
