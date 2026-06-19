"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicTeamController = exports.PublicTeamController = void 0;
const services_1 = require("../services");
class PublicTeamController {
    async getAll(_req, res, next) {
        try {
            const members = await services_1.adminTeamService.getAll();
            res.json({ success: true, data: members });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.PublicTeamController = PublicTeamController;
exports.publicTeamController = new PublicTeamController();
//# sourceMappingURL=public-team.controller.js.map