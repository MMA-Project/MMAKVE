import { Router } from "express";
import type { Router as RouterType } from "express";
import * as AuthController from "../controllers/auth.controller.js";

const router: RouterType = Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

export default router;
