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
}

export default new LegendController();