import { Router } from "express";
import quests from "./quests.route.js";

import authRoutes from "./auth.route";

const router: Router = Router();

router.use("/ping", (_, res) => res.json({ message: "pong" }));
router.use("/auth", authRoutes);

router.use("/quests", quests);

export default router;