import { Router } from "express";
import { contactController } from "../controllers";

const router = Router();

router.post("/", contactController.send.bind(contactController));

export default router;
