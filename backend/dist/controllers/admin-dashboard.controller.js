"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminDashboardController = exports.AdminDashboardController = void 0;
const services_1 = require("../services");
class AdminDashboardController {
    async getStats(_req, res, next) {
        try {
            const stats = await services_1.adminDashboardService.getStats();
            const activity = await services_1.adminDashboardService.getRecentActivity();
            res.json({ success: true, data: { stats, recentActivity: activity } });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.AdminDashboardController = AdminDashboardController;
exports.adminDashboardController = new AdminDashboardController();
//# sourceMappingURL=admin-dashboard.controller.js.map