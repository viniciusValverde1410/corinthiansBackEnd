import legendModel from "../models/legendModel.js";

class LegendController {
    async getAllLegends(req, res) {
        try {
            const legends = await legendModel.findAll();
            res.json({
                message: `${legends.length} lendas encontradas`,
                legends: legends
            });
        } catch (error) {
            console.error("Erro ao buscar lendas:", error);
            res.status(500).json({ error: "Erro ao buscar lendas" });
        }
    }

    async getLegendById(req, res) {
        try {
            const { id } = req.params;
            const legend = await legendModel.findById(id);

            if (!legend) {
                return res.status(404).json({ error: "Lenda não encontrada" });
            }
            res.json(legend);
        } catch (error) {
            console.error("Erro ao buscar lenda:", error);
            res.status(500).json({ error: "Erro ao buscar lenda" });
        }
    }

    async createLegend(req, res) {
        const legendData = req.body;
        try {
            if (!legendData) {
                return res
                    .status(400)
                    .json({ error: "Todos os dados da lenda são obrigatórios" });
            }
            const newLegend = await legendModel.create(legendData);
            res.status(201).json({
                message: "Lenda cadastrada com sucesso",
                newLegend: newLegend
            });
        }
        catch (error) {
            console.error("Erro ao criar lenda:", error);
            res.status(500).json({ error: "Erro ao criar lenda" });
        }
    }

    async createManyLegends(req, res) {
        const legendsData = req.body;
        try {
            if (!Array.isArray(legendsData) || legendsData.length === 0) {
                return res
                    .status(400)
                    .json({ error: "Dados inválidos para criação em massa" });
            }
            const newLegends = await legendModel.createMany(legendsData);
            res.status(201).json({
                message: "Lendas cadastradas com sucesso",
                newLegends: newLegends
            });
        }
        catch (error) {
            console.error("Erro ao criar lendas:", error);
            res.status(500).json({ error: "Erro ao criar lendas" });
        }
    }

    async updateLegend(req, res) {
        const { id } = req.params;
        const legendData = req.body;

        try {
            const existingLegend = await legendModel.findById(id);
            if (!existingLegend) {
                return res.status(404).json({ error: "Lenda não encontrada" });
            }
            if (!legendData) {
                return res
                    .status(400)
                    .json({ error: "Todos os dados da lenda são obrigatórios" });
            }
            const updatedLegend = await legendModel.update(id, legendData);
            res.json({
                message: "Lenda atualizada com sucesso",
                updatedLegend: updatedLegend
            });
        }
        catch (error) {
            console.error("Erro ao atualizar lenda:", error);
            res.status(500).json({ error: "Erro ao atualizar lenda" });
        }
    }

    async deleteLegend(req, res) {
        try {
            const { id } = req.params;
            const existingLegend = await legendModel.findById
(id);
            if (!existingLegend) {
                return res.status(404).json({ error: "Lenda não encontrada" });
            }
            await legendModel.delete(id);
            res.json({ message: "Lenda deletada com sucesso" });
        } catch (error) {
            console.error("Erro ao deletar lenda:", error);
            res.status(500).json({ error: "Erro ao deletar lenda" });
        }
    }
}

export default new LegendController();