import TitleModel from "../models/titleModel.js";

class TitleController {

  async getAllTitles(req, res) {
    try {
      const titulos = await TitleModel.findAll();
      res.json(titulos);
    } catch (error) {
      console.error("Erro ao buscar títulos:", error);
      res.status(500).json({ error: "Erro ao buscar títulos" });
    }
  }

  async getTitleById(req, res) {
    try {
      const { id } = req.params;

      const titulo = await TitleModel.findById(id);

      if (!titulo) {
        return res.status(404).json({ error: "Título não encontrado" });
      }

      res.json(titulo);
    } catch (error) {
      console.error("Erro ao buscar título:", error);
      res.status(500).json({ error: "Erro ao buscar título" });
    }
  }

  async createTitle(req, res) {
      const titleData = req.body;

      try {
        if (!titleData) {
          return res.status(400).json({ error: "Todos os dados do título são obrigatórios" });
        }

        const newTitle = await TitleModel.create(titleData);
        res.status(201).json(newTitle);
      } catch (error) {
        console.error("Erro ao criar título:", error);
        res.status(500).json({ error: "Erro ao criar título" });
      }
  }

  async updateTitle(req, res) {
    const { id } = req.params;
    const titleData = req.body;

    try {
      const updatedTitle = await TitleModel.update(id, titleData);
      res.json(updatedTitle);
    } catch (error) {
      console.error("Erro ao atualizar título:", error);
      res.status(500).json({ error: "Erro ao atualizar título" });
    }
  }
  
  async deleteTitle(req, res) {
    const { id } = req.params;
    try {
      await TitleModel.delete(id);
      res.status(200).json({ message: "Título deletado com sucesso" });
    } catch (error) {
      console.error("Erro ao deletar título:", error);
      res.status(500).json({ error: "Erro ao deletar título" });
    }
  }
}

export default new TitleController();
