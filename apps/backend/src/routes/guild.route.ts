import { Response, Router } from "express";
import * as GuildController from "../controllers/guild.controller.js";

const router: Router = Router();

router.get("/", GuildController.getAllGuilds);

// Routes without guildId in URL - use authenticated user's guild
// These must be defined BEFORE the :guildId routes to match correctly
router.post("/inventory", GuildController.addItemToInventory);
router.put("/inventory/:itemId", GuildController.updateInventoryItem);
router.delete("/inventory/:itemId", GuildController.deleteInventoryItem);
router.get("/inventory", GuildController.getGuildInventory);

// Routes with guildId in URL
router.get("/:guildId/bank", GuildController.getGuildBank);
router.get("/:guildId/inventory", GuildController.getGuildInventory);
router.post("/:guildId/inventory", GuildController.addItemToInventory);
router.put("/:guildId/inventory/:itemId", GuildController.updateInventoryItem);
router.delete("/:guildId/inventory/:itemId", GuildController.deleteInventoryItem);

export default router;
