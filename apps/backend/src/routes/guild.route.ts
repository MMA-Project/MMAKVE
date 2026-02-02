import { Response, Router } from "express";
import * as GuildController from "../controllers/guild.controller.js";

const router: Router = Router();

router.get("/", GuildController.getAllGuilds);
