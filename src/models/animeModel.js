import prisma from "../../prisma/prisma.js";

class historyModel {

  async findAll() {
    const historys = await prisma.historys.findMany({
    });

    //console.log(historys);

    return historys;
  }

  // Obter um history pelo ID
  async findById(id) {
    const history = await prisma.historys.findUnique({
      where: {
        id: Number(id),
      },
    });

    return history;
  }
}

export default new historyModel();
