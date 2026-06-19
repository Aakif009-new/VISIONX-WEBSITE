"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactController = exports.ContactController = void 0;
const services_1 = require("../services");
const validations_1 = require("../validations");
class ContactController {
    async send(req, res, next) {
        try {
            const data = validations_1.createContactSchema.parse(req.body);
            const message = await services_1.contactService.create(data);
            res.status(201).json({
                success: true,
                message: "Message sent successfully",
                data: message,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ContactController = ContactController;
exports.contactController = new ContactController();
//# sourceMappingURL=contact.controller.js.map