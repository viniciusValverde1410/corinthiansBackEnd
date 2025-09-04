import express from "express";
import TitleController from "../controllers/titleController.js";

const titleRouter = express.Router();

// Rotas de titles
titleRouter.get("/", TitleController.getAllTitles);

titleRouter.get("/:id", TitleController.getTitleById);

titleRouter.post("/", TitleController.createTitle);

titleRouter.put("/:id", TitleController.updateTitle);

titleRouter.delete("/:id", TitleController.deleteTitle);

export default titleRouter;
