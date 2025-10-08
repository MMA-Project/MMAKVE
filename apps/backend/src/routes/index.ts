import { Router } from "express";

const router: Router = Router();

router.use("/ping", (_, res) => res.json({ message: "pong" }));

export default router;
