import shieldModel from "../models/shieldModel.js";

class shieldController {
    async getAllShields(req, res) {
        try {
            const shields = await shieldModel.findAll();
            res.status(200).json(shields);
        } catch (error) {
            console.error("Erro ao obter os escudos:", error);
            res.status(500).json({ error: "Erro ao obter os escudos." });
        }
    }
}

export default new shieldController();