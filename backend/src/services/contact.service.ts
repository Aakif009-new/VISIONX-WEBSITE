import prisma from "../config/database";
import type { CreateContactInput } from "../validations";

export class ContactService {
  async create(data: CreateContactInput) {
    return prisma.contact_messages.create({ data });
  }
}

export const contactService = new ContactService();
