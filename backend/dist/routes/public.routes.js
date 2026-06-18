"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const public_team_controller_1 = require("../controllers/public-team.controller");
const public_blog_controller_1 = require("../controllers/public-blog.controller");
const router = (0, express_1.Router)();
router.get("/team", public_team_controller_1.publicTeamController.getAll.bind(public_team_controller_1.publicTeamController));
router.get("/blogs", public_blog_controller_1.publicBlogController.getAll.bind(public_blog_controller_1.publicBlogController));
router.get("/blogs/:slug", public_blog_controller_1.publicBlogController.getBySlug.bind(public_blog_controller_1.publicBlogController));
exports.default = router;
//# sourceMappingURL=public.routes.js.map