import express from "express";

// Importar todas as rotas
import animesRouter from "./animeRoutes.js";

const router = express.Router();

// Rotas públicas
router.use("/animes", animesRouter);

export default router;
