import { Router } from "express";
import * as QuestController from "../controllers/quests.controller.js";

const router: Router = Router();

/**
 * @openapi
 * /quests:
 *   get:
 *     tags: [Quests]
 *     summary: Récupérer toutes les quêtes
 *     responses:
 *       200:
 *         description: Liste des quêtes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Quest'
 */
router.get("/", QuestController.getAllQuests);

/**
 * @openapi
 * /quests/process/{id}:
 *   post:
 *     tags: [Quests]
 *     summary: Traiter une quête (approuver ou rejeter avec assignments)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la quête
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               profils:
 *                 type: array
 *                 items:
 *                   type: string
 *               xpRequired:
 *                 type: number
 *               xpGained:
 *                 type: number
 *               adventurers:
 *                 type: array
 *                 items:
 *                   type: string
 *               approved:
 *                 type: boolean
 *               startDate:
 *                 type: string
 *                 format: date-time
 *               endDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Quête traitée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quest'
 */
router.post("/process/:id", QuestController.processQuestController);

/**
 * @openapi
 * /quests/start/{id}:
 *   post:
 *     tags: [Quests]
 *     summary: Démarrer une quête approuvée
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la quête
 *     responses:
 *       200:
 *         description: Quête démarrée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quest'
 */
router.post("/start/:id", QuestController.startQuestController);

/**
 * @openapi
 * /quests/success/{id}:
 *   post:
 *     tags: [Quests]
 *     summary: Compléter une quête avec succès
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la quête
 *     responses:
 *       200:
 *         description: Quête complétée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quest'
 */
router.post("/success/:id", QuestController.completeQuestSuccessController);

/**
 * @openapi
 * /quests/fail/{id}:
 *   post:
 *     tags: [Quests]
 *     summary: Compléter une quête avec échec
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la quête
 *     responses:
 *       200:
 *         description: Quête complétée avec échec
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quest'
 */
router.post("/fail/:id", QuestController.completeQuestFailController);

/**
 * @openapi
 * /quests/suggest/{id}:
 *   get:
 *     tags: [Quests]
 *     summary: Suggérer des coéquipiers pour une quête
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la quête
 *     responses:
 *       200:
 *         description: Suggestions de coéquipiers avec leurs taux de réussite
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 teamRates:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       adventurerId:
 *                         type: string
 *                       winRate:
 *                         type: number
 *                 winRate:
 *                   type: number
 */
router.get("/suggest/:id", QuestController.suggestTeammates);

/**
 * @openapi
 * /quests/{id}:
 *   get:
 *     tags: [Quests]
 *     summary: Récupérer une quête par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la quête
 *     responses:
 *       200:
 *         description: Détails de la quête
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quest'
 */
router.get("/:id", QuestController.getQuestById);

/**
 * @openapi
 * /quests/{userId}:
 *   get:
 *     tags: [Quests]
 *     summary: Récupérer toutes les quêtes d'un utilisateur
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Liste des quêtes de l'utilisateur
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Quest'
 */
router.get("/:userId", QuestController.getAllQuestsByUser);

/**
 * @openapi
 * /quests:
 *   post:
 *     tags: [Quests]
 *     summary: Créer une nouvelle quête
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/QuestCreation'
 *     responses:
 *       201:
 *         description: Quête créée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quest'
 */
router.post("/", QuestController.createQuest);

/**
 * @openapi
 * /quests/{id}:
 *   put:
 *     tags: [Quests]
 *     summary: Mettre à jour une quête
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la quête
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Quest'
 *     responses:
 *       200:
 *         description: Quête mise à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quest'
 */
router.put("/:id", QuestController.updateQuest);

/**
 * @openapi
 * /quests/validate/{id}:
 *   put:
 *     tags: [Quests]
 *     summary: Valider une quête
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la quête
 *     responses:
 *       200:
 *         description: Quête validée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isValid:
 *                   type: boolean
 */
router.put("/:id", QuestController.validateQuest);

/**
 * @openapi
 * /quests/{id}/cancel:
 *   put:
 *     tags: [Quests]
 *     summary: Annuler une quête
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la quête
 *     responses:
 *       204:
 *         description: Quête annulée
 */
router.put("/:id/cancel", QuestController.cancelQuest);

/**
 * @openapi
 * /quests/{id}:
 *   delete:
 *     tags: [Quests]
 *     summary: Annuler une quête (legacy)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la quête
 *     responses:
 *       204:
 *         description: Quête annulée
 */
router.delete("/:id", QuestController.cancelQuest);

export default router;
