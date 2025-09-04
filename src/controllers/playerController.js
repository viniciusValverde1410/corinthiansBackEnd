import playerModel from "../models/playerModel.js";

class playerController {
    async getAllPlayers(req, res) {
        try {
            const players = await playerModel.findAll();
            res.json(players);
        } catch (error) {
            console.error("Erro ao buscar jogadores:", error);
            res.status(500).json({ error: "Erro ao buscar jogadores" });
        }
    }

    async getPlayerById(req, res) {
        try {
            const { id } = req.params;
            const player = await playerModel.findById(id);

            if (!player) {
                return res.status(404).json({ error: "Jogador não encontrado" });
            }   
            res.json(player);
        } catch (error) {
            console.error("Erro ao buscar jogador:", error);
            res.status(500).json({ error: "Erro ao buscar jogador" });
        }       
    }
}

export default new playerController();