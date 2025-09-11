import express from "express";
import managerTeam from "../controllers/managerTeamController.js";

const router = express.Router();

router.get("/", managerTeam.getAllmembers);

router.get("/:id", managerTeam.getmemberById);

router.post("/", managerTeam.createMember);

export default router;