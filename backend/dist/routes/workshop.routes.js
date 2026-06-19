"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.get("/", controllers_1.workshopController.getAll.bind(controllers_1.workshopController));
router.get("/:id", controllers_1.workshopController.getById.bind(controllers_1.workshopController));
router.post("/", controllers_1.workshopController.create.bind(controllers_1.workshopController));
router.put("/:id", controllers_1.workshopController.update.bind(controllers_1.workshopController));
router.delete("/:id", controllers_1.workshopController.remove.bind(controllers_1.workshopController));
exports.default = router;
//# sourceMappingURL=workshop.routes.js.map