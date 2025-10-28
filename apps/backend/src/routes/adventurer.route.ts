import { Router } from "express";
import * as AdventurerController from "../controllers/adventurer.controller";

const router: Router = Router();

/**
 * @openapi
 * /adventurers:
 *   get:
 *     tags: [Adventurers]
 *     summary: Récupérer tous les aventuriers (Assistant)
 *     description: Récupère tous les aventuriers avec filtres optionnels
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [ARCHER, BARBARIAN, PALADIN, ARCANE_MAGE, PRIEST, GEOMANCER, ALCHEMIST, BLACKSMITH, ENCHANTER, MESSENGER, ROGUE, WARRIOR]
 *         description: Type d'aventurier
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [available, on_quest, injured, dead, sleeping]
 *         description: Statut de l'aventurier
 *       - in: query
 *         name: guildId
 *         schema:
 *           type: string
 *         description: ID de la guilde
 *       - in: query
 *         name: minXp
 *         schema:
 *           type: integer
 *         description: XP minimum
 *       - in: query
 *         name: maxXp
 *         schema:
 *           type: integer
 *         description: XP maximum
 *     responses:
 *       200:
 *         description: Liste des aventuriers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Adventurer'
 */
router.get("/", AdventurerController.getAllAdventurers);

/**
 * @openapi
 * /adventurers/{id}:
 *   get:
 *     tags: [Adventurers]
 *     summary: Récupérer un aventurier par ID (Assistant)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'aventurier
 *     responses:
 *       200:
 *         description: Détails de l'aventurier
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Adventurer'
 *       404:
 *         description: Aventurier non trouvé
 */
router.get("/:id", AdventurerController.getAdventurerById);

/**
 * @openapi
 * /adventurers/quest/{questId}:
 *   get:
 *     tags: [Adventurers]
 *     summary: Récupérer les aventuriers assignés à une quête (Assistant)
 *     parameters:
 *       - in: path
 *         name: questId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la quête
 *     responses:
 *       200:
 *         description: Liste des aventuriers assignés à la quête
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Adventurer'
 */
router.get("/quest/:questId", AdventurerController.getAdventurersByQuest);

/**
 * @openapi
 * /adventurers:
 *   post:
 *     tags: [Adventurers]
 *     summary: Créer un nouvel aventurier et un compte utilisateur (Assistant)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - type
 *               - guildId
 *               - username
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nom de l'aventurier
 *               type:
 *                 type: string
 *                 enum: [ARCHER, BARBARIAN, PALADIN, ARCANE_MAGE, PRIEST, GEOMANCER, ALCHEMIST, BLACKSMITH, ENCHANTER, MESSENGER, ROGUE, WARRIOR]
 *                 description: Type d'aventurier
 *               guildId:
 *                 type: string
 *                 description: ID de la guilde
 *               username:
 *                 type: string
 *                 description: Nom d'utilisateur pour le compte
 *               password:
 *                 type: string
 *                 description: Mot de passe pour le compte
 *     responses:
 *       201:
 *         description: Aventurier créé
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Adventurer'
 *       409:
 *         description: Nom d'utilisateur déjà utilisé
 *       422:
 *         description: Données invalides
 */
router.post("/", AdventurerController.createAdventurer);

/**
 * @openapi
 * /adventurers/{id}:
 *   put:
 *     tags: [Adventurers]
 *     summary: Modifier un aventurier (Assistant)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'aventurier
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nom de l'aventurier
 *               type:
 *                 type: string
 *                 enum: [ARCHER, BARBARIAN, PALADIN, ARCANE_MAGE, PRIEST, GEOMANCER, ALCHEMIST, BLACKSMITH, ENCHANTER, MESSENGER, ROGUE, WARRIOR]
 *                 description: Type d'aventurier
 *               status:
 *                 type: string
 *                 enum: [available, on_quest, injured, dead, sleeping]
 *                 description: Statut de l'aventurier
 *               xp:
 *                 type: integer
 *                 description: Points d'expérience
 *               guildId:
 *                 type: string
 *                 description: ID de la guilde
 *     responses:
 *       200:
 *         description: Aventurier modifié
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Adventurer'
 *       404:
 *         description: Aventurier non trouvé
 */
router.put("/:id", AdventurerController.modifyAdventurer);

/**
 * @openapi
 * /adventurers/{id}:
 *   delete:
 *     tags: [Adventurers]
 *     summary: Supprimer un aventurier (Assistant)
 *     description: Supprime un aventurier et son compte utilisateur associé
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'aventurier
 *     responses:
 *       204:
 *         description: Aventurier supprimé
 *       404:
 *         description: Aventurier non trouvé
 *       422:
 *         description: Impossible de supprimer un aventurier avec des quêtes actives
 */
router.delete("/:id", AdventurerController.deleteAdventurer);

export default router;
