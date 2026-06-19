"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminApplicationsController = exports.AdminApplicationsController = void 0;
const database_1 = __importDefault(require("../config/database"));
const admin_schema_1 = require("../validations/admin.schema");
class AdminApplicationsController {
    async getIncubations(_req, res, next) {
        try {
            const applications = await database_1.default.incubation_applications.findMany({
                orderBy: { created_at: "desc" },
            });
            res.json({ success: true, data: applications });
        }
        catch (error) {
            next(error);
        }
    }
    async updateIncubationStatus(req, res, next) {
        try {
            const { status } = admin_schema_1.statusUpdateSchema.parse(req.body);
            const application = await database_1.default.incubation_applications.update({
                where: { id: req.params.id },
                data: { status },
            });
            res.json({ success: true, data: application });
        }
        catch (error) {
            next(error);
        }
    }
    async getMembers(_req, res, next) {
        try {
            const applications = await database_1.default.visionx_member_applications.findMany({
                orderBy: { created_at: "desc" },
            });
            res.json({ success: true, data: applications });
        }
        catch (error) {
            next(error);
        }
    }
    async updateMemberStatus(req, res, next) {
        try {
            const { status } = admin_schema_1.statusUpdateSchema.parse(req.body);
            const application = await database_1.default.visionx_member_applications.update({
                where: { id: req.params.id },
                data: { status },
            });
            res.json({ success: true, data: application });
        }
        catch (error) {
            next(error);
        }
    }
    async getContacts(_req, res, next) {
        try {
            const messages = await database_1.default.contact_messages.findMany({
                orderBy: { created_at: "desc" },
            });
            res.json({ success: true, data: messages });
        }
        catch (error) {
            next(error);
        }
    }
    async deleteContact(req, res, next) {
        try {
            await database_1.default.contact_messages.delete({
                where: { id: req.params.id },
            });
            res.json({ success: true, message: "Message deleted" });
        }
        catch (error) {
            next(error);
        }
    }
    async getRegistrations(_req, res, next) {
        try {
            const registrations = await database_1.default.workshop_registrations.findMany({
                orderBy: { created_at: "desc" },
                include: { workshop: { select: { title: true } } },
            });
            res.json({ success: true, data: registrations });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.AdminApplicationsController = AdminApplicationsController;
exports.adminApplicationsController = new AdminApplicationsController();
//# sourceMappingURL=admin-applications.controller.js.map