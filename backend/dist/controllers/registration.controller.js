"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationController = exports.RegistrationController = void 0;
const services_1 = require("../services");
const validations_1 = require("../validations");
class RegistrationController {
    async register(req, res, next) {
        try {
            const data = validations_1.createRegistrationSchema.parse(req.body);
            const registration = await services_1.registrationService.create(data);
            const workshop = await (await Promise.resolve().then(() => __importStar(require("../services")))).workshopService.getById(data.workshop_id);
            services_1.googleSheetsService.addWorkshopRegistration({
                id: registration.id,
                full_name: registration.full_name,
                email: registration.email,
                phone: registration.phone,
                college_name: registration.college_name,
                department: registration.department,
                year_of_study: registration.year_of_study,
                workshop_name: workshop.title,
                created_at: registration.created_at,
            });
            res.status(201).json({
                success: true,
                message: "Registration successful",
                data: registration,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.RegistrationController = RegistrationController;
exports.registrationController = new RegistrationController();
//# sourceMappingURL=registration.controller.js.map