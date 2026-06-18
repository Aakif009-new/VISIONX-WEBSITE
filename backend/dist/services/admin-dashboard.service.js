"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminDashboardService = exports.AdminDashboardService = void 0;
const database_1 = __importDefault(require("../config/database"));
class AdminDashboardService {
    async getStats() {
        const [totalWorkshops, totalRegistrations, totalIncubation, totalMembers, totalBlogs, totalContacts,] = await Promise.all([
            database_1.default.workshops.count(),
            database_1.default.workshop_registrations.count(),
            database_1.default.incubation_applications.count(),
            database_1.default.visionx_member_applications.count(),
            database_1.default.blog_posts.count(),
            database_1.default.contact_messages.count(),
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
            database_1.default.workshop_registrations.findMany({
                take: 5,
                orderBy: { created_at: "desc" },
                include: { workshop: { select: { title: true } } },
            }),
            database_1.default.incubation_applications.findMany({
                take: 5,
                orderBy: { created_at: "desc" },
            }),
            database_1.default.visionx_member_applications.findMany({
                take: 5,
                orderBy: { created_at: "desc" },
            }),
            database_1.default.contact_messages.findMany({
                take: 5,
                orderBy: { created_at: "desc" },
            }),
        ]);
        const activities = [];
        registrations.forEach((r) => activities.push({
            type: "registration",
            description: `${r.full_name} registered for ${r.workshop.title}`,
            date: r.created_at,
        }));
        incubations.forEach((i) => activities.push({
            type: "incubation",
            description: `${i.full_name} applied for incubation (${i.startup_name})`,
            date: i.created_at,
        }));
        members.forEach((m) => activities.push({
            type: "member",
            description: `${m.full_name} applied as member`,
            date: m.created_at,
        }));
        contacts.forEach((c) => activities.push({
            type: "contact",
            description: `Message from ${c.name}: ${c.message.slice(0, 50)}...`,
            date: c.created_at,
        }));
        return activities
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .slice(0, 10);
    }
}
exports.AdminDashboardService = AdminDashboardService;
exports.adminDashboardService = new AdminDashboardService();
//# sourceMappingURL=admin-dashboard.service.js.map