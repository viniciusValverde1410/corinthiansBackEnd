import prisma from "../../prisma/prisma.js";

class playerModel {

  async findAll() {
    const players = await prisma.player.findMany({
    });

    //console.log(players);

    return players;
  }

  // Obter um joagdor pelo ID
  async findById(id) {
    const player = await prisma.player.findUnique({
      where: {
        id: Number(id),
      },
    });

    return player;
  }

  async create(player){
    const newPlayer = await prisma.player.create({
      data: player,
    });

    return newPlayer;
  }

  async update(id, playerData) {
    const updatedPlayer = await prisma.player.update({
      where: { id: Number(id) },
      data: playerData,
    });
    return updatedPlayer;
  }

  async delete(id) {
    await prisma.player.delete({
      where: { id: Number(id) },
    });
    return;
  }
}

export default new playerModel();
