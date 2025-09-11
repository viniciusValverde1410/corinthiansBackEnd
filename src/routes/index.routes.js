import express from "express";

// Importar todas as rotas
import titleRouter from "./titleRoutes.js";
import playerRouter from "./playerRoutes.js";
import shieldRouter from "./shieldRoutes.js";

const router = express.Router();

// Rotas públicas
router.use("/titles", titleRouter);
router.use("/shields", shieldRouter);
router.use("/players", playerRouter);

export default router;
