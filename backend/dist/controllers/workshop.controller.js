"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workshopController = exports.WorkshopController = void 0;
const services_1 = require("../services");
const validations_1 = require("../validations");
class WorkshopController {
    async getAll(req, res, next) {
        try {
            const workshops = await services_1.workshopService.getAll();
            res.json({ success: true, data: workshops });
        }
        catch (error) {
            next(error);
        }
    }
    async getById(req, res, next) {
        try {
            const workshop = await services_1.workshopService.getById(req.params.id);
            res.json({ success: true, data: workshop });
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
            res.json({ success: true, message: "Workshop deleted successfully" });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.WorkshopController = WorkshopController;
exports.workshopController = new WorkshopController();
//# sourceMappingURL=workshop.controller.js.map