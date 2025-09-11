import express from "express";
import ShieldController from "../controllers/shieldController.js";

const shieldRouter = express.Router();

shieldRouter.get("/", ShieldController.getAllShields);

export default shieldRouter;
