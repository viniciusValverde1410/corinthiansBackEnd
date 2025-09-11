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

    async getShieldById(req, res) {
        const { id } = req.params;
        try {
            const shield = await shieldModel.findById(id);
            if (shield) {
                res.status(200).json(shield);
            } else {
                res.status(404).json({ error: "Escudo não encontrado." });
            }
        } catch (error) {
            console.error("Erro ao obter o escudo:", error);
            res.status(500).json({ error: "Erro ao obter o escudo." });
        }
    }

    async createShield(req, res) {
        const shieldData = req.body;
        try {
            const newShield = await shieldModel.create(shieldData);
            res.status(201).json(newShield);
        } catch (error) {
            console.error("Erro ao criar o escudo:", error);
            res.status(500).json({ error: "Erro ao criar o escudo." });
        }
    }
}

export default new shieldController();