"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationService = exports.RegistrationService = void 0;
const database_1 = __importDefault(require("../config/database"));
class RegistrationService {
    async create(data) {
        const workshop = await database_1.default.workshops.findUnique({
            where: { id: data.workshop_id },
        });
        if (!workshop)
            throw new Error("Workshop not found");
        if (!workshop.registration_open)
            throw new Error("Registration is closed for this workshop");
        if (workshop.max_seats) {
            const count = await database_1.default.workshop_registrations.count({
                where: { workshop_id: data.workshop_id },
            });
            if (count >= workshop.max_seats)
                throw new Error("Workshop is fully booked");
        }
        return database_1.default.workshop_registrations.create({ data });
    }
    async getByWorkshop(workshopId) {
        return database_1.default.workshop_registrations.findMany({
            where: { workshop_id: workshopId },
            orderBy: { created_at: "desc" },
        });
    }
}
exports.RegistrationService = RegistrationService;
exports.registrationService = new RegistrationService();
//# sourceMappingURL=registration.service.js.map