"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.incubationService = exports.IncubationService = void 0;
const database_1 = __importDefault(require("../config/database"));
class IncubationService {
    async create(data) {
        return database_1.default.incubation_applications.create({
            data: { ...data, status: "New" },
        });
    }
    async getAll() {
        return database_1.default.incubation_applications.findMany({
            orderBy: { created_at: "desc" },
        });
    }
}
exports.IncubationService = IncubationService;
exports.incubationService = new IncubationService();
//# sourceMappingURL=incubation.service.js.map