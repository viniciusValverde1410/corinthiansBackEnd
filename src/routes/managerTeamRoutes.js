import express from "express";
import managerTeam from "../controllers/managerTeamController.js";

const router = express.Router();

router.get("/", managerTeam.getAllmembers);

router.get("/:id", managerTeam.getmemberById);

router.post("/", managerTeam.createMember);

router.put("/:id", managerTeam.updateMember);

export default router;