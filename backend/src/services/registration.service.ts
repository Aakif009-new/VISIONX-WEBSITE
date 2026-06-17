import prisma from "../config/database";
import type { CreateRegistrationInput } from "../validations";

export class RegistrationService {
  async create(data: CreateRegistrationInput) {
    const workshop = await prisma.workshops.findUnique({
      where: { id: data.workshop_id },
    });
    if (!workshop) throw new Error("Workshop not found");
    if (!workshop.registration_open) throw new Error("Registration is closed for this workshop");
    if (workshop.max_seats) {
      const count = await prisma.workshop_registrations.count({
        where: { workshop_id: data.workshop_id },
      });
      if (count >= workshop.max_seats) throw new Error("Workshop is fully booked");
    }
    return prisma.workshop_registrations.create({ data });
  }

  async getByWorkshop(workshopId: string) {
    return prisma.workshop_registrations.findMany({
      where: { workshop_id: workshopId },
      orderBy: { created_at: "desc" },
    });
  }
}

export const registrationService = new RegistrationService();
