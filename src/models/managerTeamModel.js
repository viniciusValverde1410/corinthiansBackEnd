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

    async create(managerTeamData) {
        const newManagerTeam = await prisma.managerTeam.create({
            data: managerTeamData,
        });
        return newManagerTeam;
    }
}

export default new managerTeamModel();
