import { Router } from "express";
import { publicTeamController } from "../controllers/public-team.controller";
import { publicBlogController } from "../controllers/public-blog.controller";

const router = Router();

router.get("/team", publicTeamController.getAll.bind(publicTeamController));
router.get("/blogs", publicBlogController.getAll.bind(publicBlogController));
router.get("/blogs/:slug", publicBlogController.getBySlug.bind(publicBlogController));

export default router;
