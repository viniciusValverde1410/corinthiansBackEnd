import express from "express";
import ShieldController from "../controllers/shieldController.js";

const shieldRouter = express.Router();

shieldRouter.get("/", ShieldController.getAllShields);

shieldRouter.get("/:id", ShieldController.getShieldById);

shieldRouter.post("/", ShieldController.createShield);

shieldRouter.put("/:id", ShieldController.updateShield);

shieldRouter.delete("/:id", ShieldController.deleteShield);

export default shieldRouter;
