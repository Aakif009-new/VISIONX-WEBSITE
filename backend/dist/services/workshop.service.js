"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.workshopService = exports.WorkshopService = void 0;
const database_1 = __importDefault(require("../config/database"));
class WorkshopService {
    async getAll() {
        return database_1.default.workshops.findMany({
            orderBy: { created_at: "desc" },
        });
    }
    async getById(id) {
        const workshop = await database_1.default.workshops.findUnique({ where: { id } });
        if (!workshop)
            throw new Error("Workshop not found");
        return workshop;
    }
    async create(data) {
        return database_1.default.workshops.create({ data });
    }
    async update(id, data) {
        await this.getById(id);
        return database_1.default.workshops.update({ where: { id }, data });
    }
    async remove(id) {
        await this.getById(id);
        return database_1.default.workshops.delete({ where: { id } });
    }
}
exports.WorkshopService = WorkshopService;
exports.workshopService = new WorkshopService();
//# sourceMappingURL=workshop.service.js.map