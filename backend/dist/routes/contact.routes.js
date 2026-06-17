"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.post("/", controllers_1.contactController.send.bind(controllers_1.contactController));
exports.default = router;
//# sourceMappingURL=contact.routes.js.map