import express from "express";
import playerController from "../controllers/playerController.js";

const playerRouter = express.Router();

// Rotas de players
playerRouter.get("/", playerController.getAllPlayers);

playerRouter.get("/:id", playerController.getPlayerById);

export default playerRouter;
