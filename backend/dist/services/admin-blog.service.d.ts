import type { CreateBlogInput, UpdateBlogInput } from "../validations/admin.schema";
export declare class AdminBlogService {
    getAll(status?: string): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        title: string;
        status: string;
        slug: string;
        excerpt: string | null;
        content: string;
        category: string | null;
        author: string;
        image: string | null;
        published_at: Date | null;
    }[]>;
    getBySlug(slug: string): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        title: string;
        status: string;
        slug: string;
        excerpt: string | null;
        content: string;
        category: string | null;
        author: string;
        image: string | null;
        published_at: Date | null;
    }>;
    getById(id: string): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        title: string;
        status: string;
        slug: string;
        excerpt: string | null;
        content: string;
        category: string | null;
        author: string;
        image: string | null;
        published_at: Date | null;
    }>;
    create(data: CreateBlogInput): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        title: string;
        status: string;
        slug: string;
        excerpt: string | null;
        content: string;
        category: string | null;
        author: string;
        image: string | null;
        published_at: Date | null;
    }>;
    update(id: string, data: UpdateBlogInput): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        title: string;
        status: string;
        slug: string;
        excerpt: string | null;
        content: string;
        category: string | null;
        author: string;
        image: string | null;
        published_at: Date | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        title: string;
        status: string;
        slug: string;
        excerpt: string | null;
        content: string;
        category: string | null;
        author: string;
        image: string | null;
        published_at: Date | null;
    }>;
}
export declare const adminBlogService: AdminBlogService;
//# sourceMappingURL=admin-blog.service.d.ts.map