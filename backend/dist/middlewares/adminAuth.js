"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuth = adminAuth;
exports.requireRole = requireRole;
const database_1 = __importDefault(require("../config/database"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function adminAuth(req, _res, next) {
    try {
        const token = req.headers.authorization?.replace("Bearer ", "");
        if (!token)
            throw new Error("Authentication required");
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "fallback");
        const user = await database_1.default.admin_users.findUnique({
            where: { id: decoded.id },
            select: { id: true, email: true, name: true, role: true },
        });
        if (!user)
            throw new Error("User not found");
        req.user = user;
        next();
    }
    catch {
        _res.status(401).json({ success: false, message: "Authentication required" });
    }
}
function requireRole(...roles) {
    return (req, res, next) => {
        const user = req.user;
        if (!user) {
            res.status(401).json({ success: false, message: "Authentication required" });
            return;
        }
        if (roles.length > 0 && !roles.includes(user.role) && user.role !== "super_admin") {
            res.status(403).json({ success: false, message: "Insufficient permissions" });
            return;
        }
        next();
    };
}
//# sourceMappingURL=adminAuth.js.map