import express from "express";
import LegendController from "../controllers/legendController.js";

const legendRouter = express.Router();

legendRouter.get("/", LegendController.getAllLegends);

legendRouter.get("/:id", LegendController.getLegendById);

legendRouter.post("/", LegendController.createLegend);

export default legendRouter;