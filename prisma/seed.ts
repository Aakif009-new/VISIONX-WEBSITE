import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("admin123", 12);

  await prisma.admin_users.upsert({
    where: { email: "admin@visionx.com" },
    update: {},
    create: {
      email: "admin@visionx.com",
      password,
      name: "Super Admin",
      role: "super_admin",
    },
  });

  const settings = [
    { key: "site_name", value: "VisionX" },
    { key: "tagline", value: "Empowering Student Innovation" },
    { key: "mission", value: "To foster a culture of innovation and entrepreneurship among students." },
    { key: "vision", value: "To build the largest student-run innovation ecosystem." },
    { key: "social_links", value: JSON.stringify({
      instagram: "https://instagram.com/visionx.official_",
      linkedin: "https://linkedin.com/company/visionxcommunity",
      email: "visionx.official.org@gmail.com",
    })},
    { key: "contact_info", value: JSON.stringify({
      email: "visionx.official.org@gmail.com",
    })},
    { key: "hero_title", value: "Where Ideas Become Reality" },
    { key: "hero_subtitle", value: "VisionX is a student-driven community empowering innovation, technology, and entrepreneurship." },
    { key: "stats", value: JSON.stringify([
      { label: "Active Members", value: 500, suffix: "+" },
      { label: "Workshops", value: 50, suffix: "+" },
      { label: "Startups Incubated", value: 25, suffix: "+" },
      { label: "Events", value: 100, suffix: "+" },
    ])},
  ];

  for (const setting of settings) {
    await prisma.site_settings.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: setting,
    });
  }

  console.log("Seed completed successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
