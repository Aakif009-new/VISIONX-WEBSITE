import prisma from "../config/database";

export class AdminDashboardService {
  async getStats() {
    const [
      totalWorkshops,
      totalRegistrations,
      totalIncubation,
      totalMembers,
      totalBlogs,
      totalContacts,
    ] = await Promise.all([
      prisma.workshops.count(),
      prisma.workshop_registrations.count(),
      prisma.incubation_applications.count(),
      prisma.visionx_member_applications.count(),
      prisma.blog_posts.count(),
      prisma.contact_messages.count(),
    ]);

    return {
      workshops: totalWorkshops,
      registrations: totalRegistrations,
      incubation_applications: totalIncubation,
      member_applications: totalMembers,
      blogs: totalBlogs,
      contact_messages: totalContacts,
    };
  }

  async getRecentActivity() {
    const [registrations, incubations, members, contacts] = await Promise.all([
      prisma.workshop_registrations.findMany({
        take: 5,
        orderBy: { created_at: "desc" },
        include: { workshop: { select: { title: true } } },
      }),
      prisma.incubation_applications.findMany({
        take: 5,
        orderBy: { created_at: "desc" },
      }),
      prisma.visionx_member_applications.findMany({
        take: 5,
        orderBy: { created_at: "desc" },
      }),
      prisma.contact_messages.findMany({
        take: 5,
        orderBy: { created_at: "desc" },
      }),
    ]);

    const activities: { type: string; description: string; date: Date }[] = [];

    registrations.forEach((r) =>
      activities.push({
        type: "registration",
        description: `${r.full_name} registered for ${r.workshop.title}`,
        date: r.created_at,
      })
    );

    incubations.forEach((i) =>
      activities.push({
        type: "incubation",
        description: `${i.full_name} applied for incubation (${i.startup_name})`,
        date: i.created_at,
      })
    );

    members.forEach((m) =>
      activities.push({
        type: "member",
        description: `${m.full_name} applied as member`,
        date: m.created_at,
      })
    );

    contacts.forEach((c) =>
      activities.push({
        type: "contact",
        description: `Message from ${c.name}: ${c.message.slice(0, 50)}...`,
        date: c.created_at,
      })
    );

    return activities
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, 10);
  }
}

export const adminDashboardService = new AdminDashboardService();
