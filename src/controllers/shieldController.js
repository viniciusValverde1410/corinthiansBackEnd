import shieldModel from "../models/shieldModel.js";

class shieldController {
    async getAllShields(req, res) {
        try {
            const shields = await shieldModel.findAll();
            res.json({
                message: `${shields.length} escudos encontrados`,
                shields: shields
            });
        } catch (error) {
            console.error("Erro ao buscar escudos:", error);
            res.status(500).json({ error: "Erro ao buscar escudos" });
        }
    }

    async getShieldById(req, res) {
        try {
            const { id } = req.params;
            const shield = await shieldModel.findById(id);

            if (!shield) {
                return res.status(404).json({ error: "Escudo não encontrado" });
            }
            res.json({
                message: "Escudo encontrado com sucesso",
                shield: shield
            });
        } catch (error) {
            console.error("Erro ao buscar escudo:", error);
            res.status(500).json({ error: "Erro ao buscar escudo" });
        }
    }

    async createShield(req, res) {
        const shieldData = req.body;
        try {
            if (!shieldData) {
                return res
                    .status(400)
                    .json({ error: "Todos os dados do escudo são obrigatórios" });
            }

            const newShield = await shieldModel.create(shieldData);
            
            // Conta total de escudos após criação
            const allShields = await shieldModel.findAll();
            
            res.status(201).json({
                message: "Escudo cadastrado com sucesso",
                totalShields: allShields.length,
                newShield: newShield
            });
        } catch (error) {
            console.error("Erro ao criar escudo:", error);
            res.status(500).json({ error: "Erro ao criar escudo" });
        }
    }

    async updateShield(req, res) {
        const { id } = req.params;
        const shieldData = req.body;

        try {
            if (!shieldData) {
                return res
                    .status(400)
                    .json({ error: "Todos os dados do escudo são obrigatórios" });
            }
            
            const existingShield = await shieldModel.findById(id);
            
            if (!existingShield) {
                return res.status(404).json({ error: "Escudo não encontrado" });
            }

            const updatedShield = await shieldModel.update(id, shieldData);
            res.json({
                message: "Escudo atualizado com sucesso",
                updatedShield: updatedShield
            });
        } catch (error) {
            console.error("Erro ao atualizar escudo:", error);
            res.status(500).json({ error: "Erro ao atualizar escudo" });
        }
    }

    async deleteShield(req, res) {
        try {
            const { id } = req.params;
            const existingShield = await shieldModel.findById(id);
            if (!existingShield) {
                return res.status(404).json({ error: "Escudo não encontrado" });
            }
            
            await shieldModel.delete(id);
            
            // Conta escudos restantes após deletar
            const remainingShields = await shieldModel.findAll();
            
            res.status(200).json({ 
                message: "Escudo deletado com sucesso",
                remainingShields: remainingShields.length,
                deletedShield: existingShield.name || `ID: ${id}`
            });
        } catch (error) {
            console.error("Erro ao deletar escudo:", error);
            res.status(500).json({ error: "Erro ao deletar escudo" });
        }
    }
}

export default new shieldController();