import managerTeamModel from "../models/managerTeamModel.js";

class managerTeamController {
    async getAllmembers(req, res) {
        try {
            const managerTeam = await managerTeamModel.findAll();
            res.status(200).json({
                message: `${managerTeam.length} membros encontrados`,
                managerTeam: managerTeam
            });
        } catch (error) {
            console.error("Erro ao buscar membros da comissão técnica:", error);
            res.status(500).json({ error: "Erro ao buscar membros da comissão técnica" });
        }
    }

    async getmemberById(req, res) {
        try {
            const { id } = req.params;
            const member = await managerTeamModel.findById(id); 
            if (!member) {
                return res.status(404).json({ error: "Membro não encontrado" });
            }
            res.json(member);
        } catch (error) {
            console.error("Erro ao buscar membro:", error);
            res.status(500).json({ error: "Erro ao buscar membro" });
        }
    }

    async createMember(req, res) {
        const memberData = req.body;
        try {
            if (!memberData) {
                return res
                    .status(400)
                    .json({ error: "Todos os dados do membro são obrigatórios" });
            }
            const newMember = await managerTeamModel.create(memberData);
            const managerTeam = await managerTeamModel.findAll();
            res.status(201).json({
                message: ` Membro cadastrado com sucesso, ${managerTeam.length} membros cadastrados`,
                newMember: newMember
            });
        }
        catch (error) {
            console.error("Erro ao criar membro:", error);
            res.status(500).json({ error: "Erro ao criar membro" });
        }
    }

    async updateMember(req, res) {
        const { id } = req.params;
        const memberData = req.body;

        try {
            const existingMember = await managerTeamModel.findById(id);
            if (!existingMember) {
                return res.status(404).json({ error: "Membro não encontrado" });
            }
            if (!memberData) {
                return res
                    .status(400)
                    .json({ error: "Todos os dados do membro são obrigatórios" });
            }
            const updatedMember = await managerTeamModel.update(id, memberData);
            res.json({
                message: "Membro atualizado com sucesso",
                updatedMember: updatedMember
            });
        } catch (error) {
            console.error("Erro ao atualizar membro:", error);
            res.status(500).json({ error: "Erro ao atualizar membro" });
        }
    }

    async deleteMember(req, res) {
        const { id } = req.params;
        try {
            const existingMember = await managerTeamModel.findById(id);
            if (!existingMember) {
                return res.status(404).json({ error: "Membro não encontrado" });
            }
            const managerTeam = await managerTeamModel.findAll();
            res.status(200).json({
                message: `Membro '${existingMember.name}' deletado com sucesso, membros restantes: ${managerTeam.length}`,
            });
        } catch (error) {
            console.error("Erro ao deletar membro:", error);
            res.status(500).json({ error: "Erro ao deletar membro" });
        }
    }
}

export default new managerTeamController();