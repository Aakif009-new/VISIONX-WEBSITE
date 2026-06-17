"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const workshop_routes_1 = __importDefault(require("./workshop.routes"));
const registration_routes_1 = __importDefault(require("./registration.routes"));
const incubation_routes_1 = __importDefault(require("./incubation.routes"));
const member_routes_1 = __importDefault(require("./member.routes"));
const contact_routes_1 = __importDefault(require("./contact.routes"));
const router = (0, express_1.Router)();
router.use("/workshops", workshop_routes_1.default);
router.use("/workshop", registration_routes_1.default);
router.use("/incubation", incubation_routes_1.default);
router.use("/join-visionx", member_routes_1.default);
router.use("/contact", contact_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map