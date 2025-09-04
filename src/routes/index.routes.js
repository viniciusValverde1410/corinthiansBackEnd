import express from "express";

// Importar todas as rotas
import historysRouter from "./titleRoutes.js";

const router = express.Router();

// Rotas públicas
router.use("/titles", historysRouter);

export default router;
