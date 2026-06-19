import { Router } from "express";
import { workshopController } from "../controllers";

const router = Router();

router.get("/", workshopController.getAll.bind(workshopController));
router.get("/:id", workshopController.getById.bind(workshopController));
router.post("/", workshopController.create.bind(workshopController));
router.put("/:id", workshopController.update.bind(workshopController));
router.delete("/:id", workshopController.remove.bind(workshopController));

export default router;
