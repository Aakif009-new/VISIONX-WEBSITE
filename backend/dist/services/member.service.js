"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberService = exports.MemberService = void 0;
const database_1 = __importDefault(require("../config/database"));
class MemberService {
    async create(data) {
        return database_1.default.visionx_member_applications.create({
            data: { ...data, status: "Pending" },
        });
    }
    async getAll() {
        return database_1.default.visionx_member_applications.findMany({
            orderBy: { created_at: "desc" },
        });
    }
}
exports.MemberService = MemberService;
exports.memberService = new MemberService();
//# sourceMappingURL=member.service.js.map