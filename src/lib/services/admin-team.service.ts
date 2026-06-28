import prisma from "@/lib/prisma";
import type { CreateTeamMemberInput, UpdateTeamMemberInput } from "@/lib/validations/admin.schema";

export class AdminTeamService {
  async getAll() {
    return prisma.team_members.findMany({
      orderBy: [{ council: "desc" }, { name: "asc" }],
    });
  }

  async getById(id: string) {
    const member = await prisma.team_members.findUnique({ where: { id } });
    if (!member) throw new Error("Team member not found");
    return member;
  }

  async create(data: CreateTeamMemberInput) {
    return prisma.team_members.create({ data });
  }

  async update(id: string, data: UpdateTeamMemberInput) {
    await this.getById(id);
    return prisma.team_members.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.getById(id);
    return prisma.team_members.delete({ where: { id } });
  }
}

export const adminTeamService = new AdminTeamService();
