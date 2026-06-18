"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactService = exports.ContactService = void 0;
const database_1 = __importDefault(require("../config/database"));
class ContactService {
    async create(data) {
        return database_1.default.contact_messages.create({ data });
    }
}
exports.ContactService = ContactService;
exports.contactService = new ContactService();
//# sourceMappingURL=contact.service.js.map