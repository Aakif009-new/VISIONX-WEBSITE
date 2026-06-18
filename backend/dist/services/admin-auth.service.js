"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuthService = exports.AdminAuthService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = __importDefault(require("../config/database"));
class AdminAuthService {
    async login(email, password) {
        const user = await database_1.default.admin_users.findUnique({ where: { email } });
        if (!user)
            throw new Error("Invalid email or password");
        const valid = await bcryptjs_1.default.compare(password, user.password);
        if (!valid)
            throw new Error("Invalid email or password");
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, role: user.role, name: user.name }, process.env.JWT_SECRET || "fallback", { expiresIn: "7d" });
        return {
            token,
            user: { id: user.id, email: user.email, name: user.name, role: user.role },
        };
    }
    async getProfile(id) {
        const user = await database_1.default.admin_users.findUnique({ where: { id } });
        if (!user)
            throw new Error("User not found");
        return { id: user.id, email: user.email, name: user.name, role: user.role };
    }
}
exports.AdminAuthService = AdminAuthService;
exports.adminAuthService = new AdminAuthService();
//# sourceMappingURL=admin-auth.service.js.map