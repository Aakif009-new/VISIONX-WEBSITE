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

  const teamMembers = [
    { name: "V MD TAUSEEF SALEEM", role: "Founder & President", description: "Visionary leader driving innovation and entrepreneurship among students.", image: "/images/team/Founder.jpeg", council: true },
    { name: "SHALU PRIYADHARSHINI", role: "Co-Founder & Vice President", description: "Building opportunities and empowering future leaders.", image: "/images/team/co-founder.jpeg", council: true },
    { name: "Mohammed Mafaaz C", role: "Chief Executive Officer", description: "Leading operations, execution, and organizational growth.", image: "/images/team/CEO.jpeg", council: true },
    { name: "Mohammed Abuzar J", role: "Tech Team Lead", description: "Leading technology and product development initiatives.", image: "/images/team/tech-team-lead.jpg" },
    { name: "VK Mohammed Hussain", role: "Media Team Lead", description: "Managing branding, content creation, and digital presence.", image: "/images/team/Media_team_lead.jpeg" },
    { name: "Mohammed Saad V", role: "Startup Team Lead", description: "Supporting founders and startup incubation programs.", image: "/images/team/startup-team-lead.png", object_position: "object-top" },
    { name: "RS Sajid Ahmed", role: "Hackathons & Competitions Team Lead", description: "Leading hackathon and competition initiatives for student engagement.", image: "/images/team/hackathonscompetitions.jpeg" },
    { name: "Mohammed Ehsaan", role: "Assistant Team Lead - Hackathons & Competitions", description: "Supporting hackathon operations and competition coordination.", image: "/images/team/Assistantteamlead.jpeg", object_position: "object-top" },
  ];

  for (const member of teamMembers) {
    await prisma.team_members.upsert({
      where: { name_role: { name: member.name, role: member.role } },
      update: { description: member.description, image: member.image, council: member.council ?? false, object_position: member.object_position ?? null },
      create: { ...member, council: member.council ?? false, object_position: member.object_position ?? null },
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
