import TitleModel from "../models/titleModel.js";

class TitleController {
  async getAllTitles(req, res) {
    try {
      const titles = await TitleModel.findAll();
      res.json({
        message: `${titles.length} títulos encontrados`,
        titles: titles
      });
    } catch (error) {
      console.error("Erro ao buscar títulos:", error);
      res.status(500).json({ error: "Erro ao buscar títulos" });
    }
  }

  async getTitleById(req, res) {
    try {
      const { id } = req.params;
      const title = await TitleModel.findById(id);

      if (!title) {
        return res.status(404).json({ error: "Título não encontrado" });
      }

      res.json({
        message: "Título encontrado com sucesso",
        title: title
      });
    } catch (error) {
      console.error("Erro ao buscar título:", error);
      res.status(500).json({ error: "Erro ao buscar título" });
    }
  }

  async createTitle(req, res) {
    const titleData = req.body;

    try {
      if (!titleData) {
        return res
          .status(400)
          .json({ error: "Todos os dados do título são obrigatórios" });
      }

      if (titleData.category) {
        const categoryLower = titleData.category.toLowerCase();
        if (
          categoryLower !== "estadual" &&
          categoryLower !== "nacional" &&
          categoryLower !== "internacional"
        ) {
          return res
            .status(400)
            .json({
              error:
                "Categoria deve ser 'estadual', 'nacional' ou 'internacional'",
            });
        }
      }

      const newTitle = await TitleModel.create(titleData);
      
      // Conta total de títulos após criação
      const allTitles = await TitleModel.findAll();
      
      res.status(201).json({
        message: "Título cadastrado com sucesso",
        totalTitles: allTitles.length,
        newTitle: newTitle
      });
    } catch (error) {
      console.error("Erro ao criar título:", error);
      res.status(500).json({ error: "Erro ao criar título" });
    }
  }

  async updateTitle(req, res) {
    const { id } = req.params;
    const titleData = req.body;

    try {
      if (!titleData) {
        return res
          .status(400)
          .json({ error: "Todos os dados do título são obrigatórios" });
      }

      const existingTitle = await TitleModel.findById(id);
      
      if (!existingTitle) {
        return res.status(404).json({ error: "Título não encontrado" });
      }

      if (titleData.category) {
        const categoryLower = titleData.category.toLowerCase();
        if (
          categoryLower !== "estadual" &&
          categoryLower !== "nacional" &&
          categoryLower !== "internacional"
        ) {
          return res
            .status(400)
            .json({
              error:
                "Categoria deve ser 'estadual', 'nacional' ou 'internacional'",
            });
        }
      }

      const updatedTitle = await TitleModel.update(id, titleData);
      res.json({
        message: "Título atualizado com sucesso",
        updatedTitle: updatedTitle
      });
    } catch (error) {
      console.error("Erro ao atualizar título:", error);
      res.status(500).json({ error: "Erro ao atualizar título" });
    }
  }

  async deleteTitle(req, res) {
    try {
      const { id } = req.params;
      const existingTitle = await TitleModel.findById(id);
      
      if (!existingTitle) {
        return res.status(404).json({ error: "Título não encontrado" });
      }
      
      await TitleModel.delete(id);
      
      // Conta títulos restantes após deletar
      const remainingTitles = await TitleModel.findAll();
      
      res.status(200).json({ 
        message: "Título deletado com sucesso",
        remainingTitles: remainingTitles.length,
        deletedTitle: existingTitle.name || `ID: ${id}`
      });
    } catch (error) {
      console.error("Erro ao deletar título:", error);
      res.status(500).json({ error: "Erro ao deletar título" });
    }
  }
}

export default new TitleController();
