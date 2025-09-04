import prisma from "../../prisma/prisma.js";

class tituloModel {

  async findAll() {
    const titulos = await prisma.title.findMany({
    });

    //console.log(titulos);

    return titulos;
  }

  // Obter um titulo pelo ID
  async findById(id) {
    const titulo = await prisma.title.findUnique({
      where: {
        id: Number(id),
      },
    });

    return titulo;
  }

  async create(title){
    const newTitle = await prisma.title.create({
      data: title,
    });

    return newTitle;
  }

  async update(id, title) {
    const updatedTitle = await prisma.title.update({
      where: { id: Number(id) },
      data: title,
    });

    return updatedTitle;
  }

  async delete(id) {
    const deletedTitle = await prisma.title.delete({
      where: { id: Number(id) },
    });
  
    return deletedTitle;
  }
}

export default new tituloModel();
