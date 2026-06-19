"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminTeamController = exports.AdminTeamController = void 0;
const services_1 = require("../services");
const admin_schema_1 = require("../validations/admin.schema");
class AdminTeamController {
    async getAll(_req, res, next) {
        try {
            const members = await services_1.adminTeamService.getAll();
            res.json({ success: true, data: members });
        }
        catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            const data = admin_schema_1.createTeamMemberSchema.parse(req.body);
            const member = await services_1.adminTeamService.create(data);
            res.status(201).json({ success: true, data: member });
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const data = admin_schema_1.updateTeamMemberSchema.parse(req.body);
            const member = await services_1.adminTeamService.update(req.params.id, data);
            res.json({ success: true, data: member });
        }
        catch (error) {
            next(error);
        }
    }
    async remove(req, res, next) {
        try {
            await services_1.adminTeamService.remove(req.params.id);
            res.json({ success: true, message: "Team member deleted" });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.AdminTeamController = AdminTeamController;
exports.adminTeamController = new AdminTeamController();
//# sourceMappingURL=admin-team.controller.js.map