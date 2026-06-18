"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.post("/apply", controllers_1.memberController.apply.bind(controllers_1.memberController));
exports.default = router;
//# sourceMappingURL=member.routes.js.map