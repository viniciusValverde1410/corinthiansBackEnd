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

    async createPlayer(req, res) {
        const playerData = req.body;
        try {
            if (!playerData) {
                return res.status(400).json({ error: "Todos os dados do jogador são obrigatórios" });
            }

            if (playerData.position) {
                const positionLower = playerData.position.toLowerCase();
                if (positionLower !== "goleiro" && postionLower !== "defensor" && positionLower !== "meio-campista" && positionLower !== "atacante") {
                  return res.status(400).json({ error: "Posição deve ser goleiro, defensor, meio-campista ou atacante" });
                }
              }

            const newPlayer = await playerModel.create(playerData);
            res.status(201).json(newPlayer);
        } catch (error) {
            console.error("Erro ao criar jogador:", error);
            res.status(500).json({ error: "Erro ao criar jogador" });
        }
    }
}


export default new playerController();