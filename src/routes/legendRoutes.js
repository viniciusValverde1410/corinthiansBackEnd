import express from "express";
import LegendController from "../controllers/legendController.js";

const legendRouter = express.Router();

legendRouter.get("/", LegendController.getAllLegends);

legendRouter.get("/:id", LegendController.getLegendById);

legendRouter.post("/", LegendController.createLegend);

legendRouter.post("/bulk", LegendController.createManyLegends);

legendRouter.put("/:id", LegendController.updateLegend);

legendRouter.delete("/:id", LegendController.deleteLegend);

export default legendRouter;