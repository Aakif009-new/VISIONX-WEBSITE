import prisma from "../config/database";
import type { CreateWorkshopInput, UpdateWorkshopInput } from "../validations";

export class WorkshopService {
  async getAll() {
    return prisma.workshops.findMany({
      orderBy: { created_at: "desc" },
    });
  }

  async getById(id: string) {
    const workshop = await prisma.workshops.findUnique({ where: { id } });
    if (!workshop) throw new Error("Workshop not found");
    return workshop;
  }

  async create(data: CreateWorkshopInput) {
    return prisma.workshops.create({ data });
  }

  async update(id: string, data: UpdateWorkshopInput) {
    await this.getById(id);
    return prisma.workshops.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.getById(id);
    return prisma.workshops.delete({ where: { id } });
  }
}

export const workshopService = new WorkshopService();
