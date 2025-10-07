import express from "express";

// Importar todas as rotas
import titleRouter from "./titleRoutes.js";
import playerRouter from "./playerRoutes.js";
import legendRouter from "./legendRoutes.js";

const router = express.Router();

router.use("/titles", titleRouter);
router.use("/players", playerRouter);
router.use("/legends", legendRouter);

export default router;
