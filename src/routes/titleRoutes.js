import express from "express";
import TitleController from "../controllers/titleController.js";

const titleRouter = express.Router();

// Rotas de titles
// GET /api/titles - Listar todos os animes
titleRouter.get("/", TitleController.getAllTitles);

// GET /api/titles/:id - Obter um anime pelo ID
titleRouter.get("/:id", TitleController.getTitleById);

// POST /api/titles - Criar um novo anime
titleRouter.post("/", TitleController.createTitle);

export default titleRouter;
