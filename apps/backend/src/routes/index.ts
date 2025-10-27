import { Router } from "express";
import quests from "./quests.route.js";

import authRoutes from "./auth.route";

const router: Router = Router();

/**
 * @openapi
 * /ping:
 *   get:
 *     tags: [Health]
 *     summary: Ping du serveur
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: pong
 */
router.use("/ping", (_, res) => res.json({ message: "pong" }));

/**
 * @openapi
 * tags:
 *   - name: Health
 *     description: Endpoints de santé et disponibilité du service
 *   - name: Auth
 *     description: Authentification et gestion des tokens JWT
 */
router.use("/auth", authRoutes);

router.use("/quests", quests);

export default router;