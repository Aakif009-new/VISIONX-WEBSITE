import prisma from "@/lib/prisma";
import type { CreateContactInput } from "@/lib/validations";

export class ContactService {
  async create(data: CreateContactInput) {
    return prisma.contact_messages.create({ data });
  }
}

export const contactService = new ContactService();
