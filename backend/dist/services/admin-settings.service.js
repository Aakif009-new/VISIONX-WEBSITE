"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminSettingsService = exports.AdminSettingsService = void 0;
const database_1 = __importDefault(require("../config/database"));
class AdminSettingsService {
    async getAll() {
        const settings = await database_1.default.site_settings.findMany();
        const result = {};
        settings.forEach((s) => {
            result[s.key] = s.value;
        });
        return result;
    }
    async getByKey(key) {
        const setting = await database_1.default.site_settings.findUnique({ where: { key } });
        if (!setting)
            throw new Error(`Setting "${key}" not found`);
        return setting;
    }
    async upsert(key, value) {
        return database_1.default.site_settings.upsert({
            where: { key },
            update: { value },
            create: { key, value },
        });
    }
}
exports.AdminSettingsService = AdminSettingsService;
exports.adminSettingsService = new AdminSettingsService();
//# sourceMappingURL=admin-settings.service.js.map