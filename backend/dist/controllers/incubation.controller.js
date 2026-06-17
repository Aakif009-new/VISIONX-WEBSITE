"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incubationController = exports.IncubationController = void 0;
const services_1 = require("../services");
const validations_1 = require("../validations");
class IncubationController {
    async apply(req, res, next) {
        try {
            const data = validations_1.createIncubationSchema.parse(req.body);
            const application = await services_1.incubationService.create(data);
            services_1.googleSheetsService.addIncubationApplication({
                id: application.id,
                full_name: application.full_name,
                college_name: application.college_name,
                startup_name: application.startup_name,
                problem_statement: application.problem_statement,
                target_audience: application.target_audience,
                startup_stage: application.startup_stage,
                support_needed: application.support_needed,
                status: application.status,
                created_at: application.created_at,
            });
            res.status(201).json({
                success: true,
                message: "Incubation application submitted successfully",
                data: application,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.IncubationController = IncubationController;
exports.incubationController = new IncubationController();
//# sourceMappingURL=incubation.controller.js.map