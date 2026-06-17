"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.post("/apply", controllers_1.incubationController.apply.bind(controllers_1.incubationController));
exports.default = router;
//# sourceMappingURL=incubation.routes.js.map