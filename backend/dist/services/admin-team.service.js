"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminTeamService = exports.AdminTeamService = void 0;
const database_1 = __importDefault(require("../config/database"));
class AdminTeamService {
    async getAll() {
        return database_1.default.team_members.findMany({
            orderBy: [{ council: "desc" }, { display_order: "asc" }, { name: "asc" }],
        });
    }
    async getById(id) {
        const member = await database_1.default.team_members.findUnique({ where: { id } });
        if (!member)
            throw new Error("Team member not found");
        return member;
    }
    async create(data) {
        return database_1.default.team_members.create({ data });
    }
    async update(id, data) {
        await this.getById(id);
        return database_1.default.team_members.update({ where: { id }, data });
    }
    async remove(id) {
        await this.getById(id);
        return database_1.default.team_members.delete({ where: { id } });
    }
}
exports.AdminTeamService = AdminTeamService;
exports.adminTeamService = new AdminTeamService();
//# sourceMappingURL=admin-team.service.js.map