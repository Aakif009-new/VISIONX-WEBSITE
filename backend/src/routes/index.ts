import { Router } from "express";
import workshopRoutes from "./workshop.routes";
import registrationRoutes from "./registration.routes";
import incubationRoutes from "./incubation.routes";
import memberRoutes from "./member.routes";
import contactRoutes from "./contact.routes";
import adminRoutes from "./admin.routes";
import publicRoutes from "./public.routes";

const router = Router();

router.use("/workshops", workshopRoutes);
router.use("/workshop", registrationRoutes);
router.use("/incubation", incubationRoutes);
router.use("/join-visionx", memberRoutes);
router.use("/contact", contactRoutes);
router.use("/admin", adminRoutes);
router.use("/", publicRoutes);

export default router;
