import playerModel from "../models/playerModel.js";

class playerController {
    async getAllPlayers(req, res) {
        try {
            const players = await playerModel.findAll();
            res.json({
                message: `${players.length} jogadores encontrados`,
                players: players
            });
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
            res.json({
                message: "Jogador encontrado com sucesso",
                player: player
            });
        } catch (error) {
            console.error("Erro ao buscar jogador:", error);
            res.status(500).json({ error: "Erro ao buscar jogador" });
        }
    }

    async createPlayer(req, res) {
        const playerData = req.body;
        try {
            
            if (!playerData) {
                return res
                    .status(400)
                    .json({ error: "Todos os dados do jogador são obrigatórios" });
            }

            if (playerData.position) {
                const positionLower = playerData.position.toLowerCase();
                if (
                    positionLower !== "goleiro" &&
                    positionLower !== "zagueiro" &&
                    positionLower !== "lateral direito" &&
                    positionLower !== "lateral esquerdo" &&
                    positionLower !== "volante" &&
                    positionLower !== "meio-campista" &&
                    positionLower !== "atacante"
                ) {
                    return res
                        .status(400)
                        .json({
                            error:
                                "Posição deve ser goleiro, zagueiro, lateral direito, lateral esquerdo, volante, meio-campista ou atacante",
                        });
                }
            }

            const newPlayer = await playerModel.create(playerData);
            
            // Conta total de jogadores após criação
            const allPlayers = await playerModel.findAll();
            
            res.status(201).json({
                message: "Jogador cadastrado com sucesso",
                totalPlayers: allPlayers.length,
                newPlayer: newPlayer
            });
        } catch (error) {
            console.error("Erro ao criar jogador:", error);
            res.status(500).json({ error: "Erro ao criar jogador" });
        }
    }

    async createManyPlayers(req, res) {
        const players = req.body;
        if (!Array.isArray(players) || players.length === 0) {
            return res.status(400).json({ error: "Envie um array de jogadores" });
        }
        // Validação das posições
                    if (players.position) {
                const positionLower = players.position.toLowerCase();
                if (
                    positionLower !== "goleiro" &&
                    positionLower !== "zagueiro" &&
                    positionLower !== "lateral direito" &&
                    positionLower !== "lateral esquerdo" &&
                    positionLower !== "volante" &&
                    positionLower !== "meio-campista" &&
                    positionLower !== "atacante"
                ) {
                    return res
                        .status(400)
                        .json({
                            error:
                                "Posição deve ser goleiro, zagueiro, lateral direito, lateral esquerdo, volante, meio-campista ou atacante",
                        });
                }
            }

        try {
            const result = await playerModel.createMany(players);
            const allPlayers = await playerModel.findAll();
            res.status(201).json({
                message: `${result.count} jogadores cadastrados com sucesso`,
                totalPlayers: allPlayers.length
            });
        } catch (error) {
            console.error("Erro ao cadastrar jogadores em lote:", error);
            res.status(500).json({ error: "Erro ao cadastrar jogadores em lote" });
        }
    }

    async updatePlayer(req, res) {
        const { id } = req.params;
        const playerData = req.body;

        try {
            if (!playerData) {
                return res
                    .status(400)
                    .json({ error: "Todos os dados do jogador são obrigatórios" });
            }
            
            const existingPlayer = await playerModel.findById(id);
            
            if (!existingPlayer) {
                return res.status(404).json({ error: "Jogador não encontrado" });
            }

            if (playerData.position) {
                const positionLower = playerData.position.toLowerCase();
                if (
                    positionLower !== "goleiro" &&
                    positionLower !== "zagueiro" &&
                    positionLower !== "lateral direito" &&
                    positionLower !== "lateral esquerdo" &&
                    positionLower !== "volante" &&
                    positionLower !== "meio-campista" &&
                    positionLower !== "atacante"
                ) {
                    return res
                        .status(400)
                        .json({
                            error:
                                "Posição deve ser goleiro, zagueiro, lateral direito, lateral esquerdo, volante, meio-campista ou atacante",
                        });
                }
            }

            const updatedPlayer = await playerModel.update(id, playerData);
            res.json({
                message: "Jogador atualizado com sucesso",
                updatedPlayer: updatedPlayer
            });
        } catch (error) {
            console.error("Erro ao atualizar jogador:", error);
            res.status(500).json({ error: "Erro ao atualizar jogador" });
        }
    }

    async deletePlayer(req, res) {
        try {
            const { id } = req.params;
            const existingPlayer = await playerModel.findById(id);
            if (!existingPlayer) {
                return res.status(404).json({ error: "Jogador não encontrado" });
            }
            
            await playerModel.delete(id);
            
            // Conta jogadores restantes após deletar
            const remainingPlayers = await playerModel.findAll();
            
            res.status(200).json({ 
                message: "Jogador deletado com sucesso",
                remainingPlayers: remainingPlayers.length,
                deletedPlayer: existingPlayer.name || `ID: ${id}`
            });
        } catch (error) {
            console.error("Erro ao deletar jogador:", error);
            res.status(500).json({ error: "Erro ao deletar jogador" });
        }
    }
}

export default new playerController();
