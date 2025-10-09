import { Router } from "express";
import { cancel, create, getAll, getAllByUser, update, validate } from "../services/quest.service";

const router: Router = Router();

router.get("/", async (_, res) => getAll().then((quests) => res.json(quests)));
router.get("/:userId", async (req, res) => getAllByUser(req.params.userId).then((quests) => res.json(quests)));
router.post("/", async (req, res) => create(req.body).then((quest) => res.json(quest)));
router.put("/:id", async (req, res) => update(req.params.id, req.body).then((quest) => res.json(quest)));
router.put("/:id", async (req, res) => validate(req.params.id).then((quest) => res.json(quest)));
router.delete("/:id", async (req, res) => cancel(req.params.id).then((quest) => res.json(quest)));

export default router;
