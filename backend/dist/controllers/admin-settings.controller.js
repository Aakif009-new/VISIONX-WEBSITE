"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminSettingsController = exports.AdminSettingsController = void 0;
const services_1 = require("../services");
const admin_schema_1 = require("../validations/admin.schema");
class AdminSettingsController {
    async getAll(_req, res, next) {
        try {
            const settings = await services_1.adminSettingsService.getAll();
            res.json({ success: true, data: settings });
        }
        catch (error) {
            next(error);
        }
    }
    async upsert(req, res, next) {
        try {
            const { key, value } = admin_schema_1.updateSettingsSchema.parse(req.body);
            const setting = await services_1.adminSettingsService.upsert(key, value);
            res.json({ success: true, data: setting });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.AdminSettingsController = AdminSettingsController;
exports.adminSettingsController = new AdminSettingsController();
//# sourceMappingURL=admin-settings.controller.js.map