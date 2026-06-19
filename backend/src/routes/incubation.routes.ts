import { Router } from "express";
import { incubationController } from "../controllers";

const router = Router();

router.post("/apply", incubationController.apply.bind(incubationController));

export default router;
