import express from "express";
import ShieldController from "../controllers/shieldController.js";

const shieldRouter = express.Router();

shieldRouter.get("/", ShieldController.getAllShields);

shieldRouter.get("/:id", ShieldController.getShieldById);

export default shieldRouter;
