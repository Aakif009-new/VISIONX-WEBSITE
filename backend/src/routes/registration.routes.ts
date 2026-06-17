import { Router } from "express";
import { registrationController } from "../controllers";

const router = Router();

router.post("/register", registrationController.register.bind(registrationController));

export default router;
