import prisma from "@/lib/prisma";
import type { CreateIncubationInput } from "@/lib/validations";

export class IncubationService {
  async create(data: CreateIncubationInput) {
    return prisma.incubation_applications.create({
      data: { ...data, status: "New" },
    });
  }

  async getAll() {
    return prisma.incubation_applications.findMany({
      orderBy: { created_at: "desc" },
    });
  }
}

export const incubationService = new IncubationService();
