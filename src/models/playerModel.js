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
}

export default new playerModel();
