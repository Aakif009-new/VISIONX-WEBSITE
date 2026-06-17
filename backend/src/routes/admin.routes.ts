import { Router } from "express";
import { adminAuthController } from "../controllers/admin-auth.controller";
import { adminDashboardController } from "../controllers/admin-dashboard.controller";
import { adminTeamController } from "../controllers/admin-team.controller";
import { adminWorkshopController } from "../controllers/admin-workshop.controller";
import { adminBlogController } from "../controllers/admin-blog.controller";
import { adminSettingsController } from "../controllers/admin-settings.controller";
import { adminApplicationsController } from "../controllers/admin-applications.controller";
import { adminUploadController, upload } from "../controllers/admin-upload.controller";
import { adminAuth, requireRole } from "../middlewares/adminAuth";

const router = Router();

router.post("/login", adminAuthController.login.bind(adminAuthController));
router.post("/logout", adminAuth, adminAuthController.logout.bind(adminAuthController));
router.get("/profile", adminAuth, adminAuthController.profile.bind(adminAuthController));

router.get(
  "/dashboard",
  adminAuth,
  requireRole(),
  adminDashboardController.getStats.bind(adminDashboardController)
);

router.get("/team", adminAuth, requireRole(), adminTeamController.getAll.bind(adminTeamController));
router.post("/team", adminAuth, requireRole("team_admin"), adminTeamController.create.bind(adminTeamController));
router.put("/team/:id", adminAuth, requireRole("team_admin"), adminTeamController.update.bind(adminTeamController));
router.delete("/team/:id", adminAuth, requireRole("super_admin"), adminTeamController.remove.bind(adminTeamController));

router.get("/workshops", adminAuth, requireRole(), adminWorkshopController.getAll.bind(adminWorkshopController));
router.post("/workshops", adminAuth, requireRole("event_admin"), adminWorkshopController.create.bind(adminWorkshopController));
router.put("/workshops/:id", adminAuth, requireRole("event_admin"), adminWorkshopController.update.bind(adminWorkshopController));
router.delete("/workshops/:id", adminAuth, requireRole("super_admin"), adminWorkshopController.remove.bind(adminWorkshopController));

router.get("/blogs", adminAuth, requireRole(), adminBlogController.getAll.bind(adminBlogController));
router.get("/blogs/:id", adminAuth, requireRole(), adminBlogController.getById.bind(adminBlogController));
router.post("/blogs", adminAuth, requireRole("content_admin"), adminBlogController.create.bind(adminBlogController));
router.put("/blogs/:id", adminAuth, requireRole("content_admin"), adminBlogController.update.bind(adminBlogController));
router.delete("/blogs/:id", adminAuth, requireRole("super_admin"), adminBlogController.remove.bind(adminBlogController));

router.get(
  "/incubation-applications",
  adminAuth,
  requireRole("super_admin"),
  adminApplicationsController.getIncubations.bind(adminApplicationsController)
);
router.put(
  "/incubation-applications/:id/status",
  adminAuth,
  requireRole("super_admin"),
  adminApplicationsController.updateIncubationStatus.bind(adminApplicationsController)
);

router.get(
  "/member-applications",
  adminAuth,
  requireRole("super_admin"),
  adminApplicationsController.getMembers.bind(adminApplicationsController)
);
router.put(
  "/member-applications/:id/status",
  adminAuth,
  requireRole("super_admin"),
  adminApplicationsController.updateMemberStatus.bind(adminApplicationsController)
);

router.get(
  "/workshop-registrations",
  adminAuth,
  requireRole(),
  adminApplicationsController.getRegistrations.bind(adminApplicationsController)
);

router.get(
  "/contact-messages",
  adminAuth,
  requireRole("super_admin"),
  adminApplicationsController.getContacts.bind(adminApplicationsController)
);
router.delete(
  "/contact-messages/:id",
  adminAuth,
  requireRole("super_admin"),
  adminApplicationsController.deleteContact.bind(adminApplicationsController)
);

router.get("/settings", adminSettingsController.getAll.bind(adminSettingsController));
router.put("/settings", adminAuth, requireRole("super_admin"), adminSettingsController.upsert.bind(adminSettingsController));

router.post(
  "/upload",
  adminAuth,
  requireRole(),
  upload.single("file"),
  adminUploadController.uploadFile.bind(adminUploadController)
);

export default router;
