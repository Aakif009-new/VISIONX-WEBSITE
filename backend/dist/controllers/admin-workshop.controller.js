"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminWorkshopController = exports.AdminWorkshopController = void 0;
const services_1 = require("../services");
const validations_1 = require("../validations");
class AdminWorkshopController {
    async getAll(_req, res, next) {
        try {
            const workshops = await services_1.workshopService.getAll();
            res.json({ success: true, data: workshops });
        }
        catch (error) {
            next(error);
        }
    }
    async create(req, res, next) {
        try {
            const data = validations_1.createWorkshopSchema.parse(req.body);
            const workshop = await services_1.workshopService.create(data);
            res.status(201).json({ success: true, data: workshop });
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const data = validations_1.updateWorkshopSchema.parse(req.body);
            const workshop = await services_1.workshopService.update(req.params.id, data);
            res.json({ success: true, data: workshop });
        }
        catch (error) {
            next(error);
        }
    }
    async remove(req, res, next) {
        try {
            await services_1.workshopService.remove(req.params.id);
            res.json({ success: true, message: "Workshop deleted" });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.AdminWorkshopController = AdminWorkshopController;
exports.adminWorkshopController = new AdminWorkshopController();
//# sourceMappingURL=admin-workshop.controller.js.map