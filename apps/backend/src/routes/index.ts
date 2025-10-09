import { Router } from "express";
import quests from "./quests.route.js";


const router: Router = Router();

router.use("/ping", (_, res) => res.json({ message: "pong" }));

router.use("/quests", quests);

export default router;
