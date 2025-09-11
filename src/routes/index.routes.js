import express from "express";

// Importar todas as rotas
import titleRouter from "./titleRoutes.js";
import playerRouter from "./playerRoutes.js";
import shieldRouter from "./shieldRoutes.js";
import legendRouter from "./legendRoutes.js";
import managerTeamRouter from "./managerTeamRoutes.js";

const router = express.Router();

// Rotas públicas
router.use("/titles", titleRouter);
router.use("/shields", shieldRouter);
router.use("/players", playerRouter);
router.use("/managerTeam", managerTeamRouter);
router.use("/legends", legendRouter);

export default router;
