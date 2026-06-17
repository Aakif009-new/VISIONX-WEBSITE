import { Router } from "express";
import { memberController } from "../controllers";

const router = Router();

router.post("/apply", memberController.apply.bind(memberController));

export default router;
