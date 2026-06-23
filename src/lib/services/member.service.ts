import prisma from "@/lib/prisma";
import type { CreateMemberApplicationInput } from "@/lib/validations";

export class MemberService {
  async create(data: CreateMemberApplicationInput) {
    return prisma.visionx_member_applications.create({
      data: { ...data, status: "Pending" },
    });
  }

  async getAll() {
    return prisma.visionx_member_applications.findMany({
      orderBy: { created_at: "desc" },
    });
  }
}

export const memberService = new MemberService();
