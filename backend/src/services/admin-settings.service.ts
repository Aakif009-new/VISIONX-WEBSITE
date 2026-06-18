import prisma from "../config/database";

export class AdminSettingsService {
  async getAll() {
    const settings = await prisma.site_settings.findMany();
    const result: Record<string, string> = {};
    settings.forEach((s) => {
      result[s.key] = s.value;
    });
    return result;
  }

  async getByKey(key: string) {
    const setting = await prisma.site_settings.findUnique({ where: { key } });
    if (!setting) throw new Error(`Setting "${key}" not found`);
    return setting;
  }

  async upsert(key: string, value: string) {
    return prisma.site_settings.upsert({
      where: { key },
      update: { value },
      create: { key, value },
    });
  }
}

export const adminSettingsService = new AdminSettingsService();
