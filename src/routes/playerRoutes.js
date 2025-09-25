import express from "express";
import playerController from "../controllers/playerController.js";

const playerRouter = express.Router();

// Rotas de players
playerRouter.get("/", playerController.getAllPlayers);

playerRouter.get("/:id", playerController.getPlayerById);

playerRouter.post("/", playerController.createPlayer);

playerRouter.post("/bulk", playerController.createManyPlayers);

playerRouter.put("/:id", playerController.updatePlayer);

playerRouter.delete("/:id", playerController.deletePlayer);

export default playerRouter;
