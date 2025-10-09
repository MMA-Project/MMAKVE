import { Router } from "express";
import authRoutes from "./auth.route";

const router: Router = Router();

router.use("/ping", (_, res) => res.json({ message: "pong" }));
router.use("/auth", authRoutes);

export default router;
