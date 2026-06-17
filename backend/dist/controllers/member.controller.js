"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberController = exports.MemberController = void 0;
const services_1 = require("../services");
const validations_1 = require("../validations");
class MemberController {
    async apply(req, res, next) {
        try {
            const data = validations_1.createMemberApplicationSchema.parse(req.body);
            const application = await services_1.memberService.create(data);
            services_1.googleSheetsService.addMemberApplication({
                id: application.id,
                full_name: application.full_name,
                college_name: application.college_name,
                department: application.department,
                year_of_study: application.year_of_study,
                role_interested: application.role_interested,
                why_join: application.why_join,
                relevant_experience: application.relevant_experience,
                status: application.status,
                created_at: application.created_at,
            });
            res.status(201).json({
                success: true,
                message: "Application submitted successfully",
                data: application,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.MemberController = MemberController;
exports.memberController = new MemberController();
//# sourceMappingURL=member.controller.js.map