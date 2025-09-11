import prisma from "../../prisma/prisma.js";

class managerTeamModel {
    async findAll() {
        const managerTeams = await prisma.managerTeam.findMany({});

        return managerTeams;
    }

    async findById(id) {
        const managerTeam = await prisma.managerTeam.findUnique({
            where: { id: Number(id) },
        });
        return managerTeam;
    }
}

export default new managerTeamModel();
