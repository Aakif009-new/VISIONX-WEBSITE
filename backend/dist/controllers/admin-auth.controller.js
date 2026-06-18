"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuthController = exports.AdminAuthController = void 0;
const services_1 = require("../services");
const admin_schema_1 = require("../validations/admin.schema");
class AdminAuthController {
    async login(req, res, next) {
        try {
            const { email, password } = admin_schema_1.loginSchema.parse(req.body);
            const result = await services_1.adminAuthService.login(email, password);
            res.json({ success: true, ...result });
        }
        catch (error) {
            next(error);
        }
    }
    async profile(req, res) {
        const user = req.user;
        res.json({ success: true, data: user });
    }
    async logout(_req, res) {
        res.json({ success: true, message: "Logged out successfully" });
    }
}
exports.AdminAuthController = AdminAuthController;
exports.adminAuthController = new AdminAuthController();
//# sourceMappingURL=admin-auth.controller.js.map