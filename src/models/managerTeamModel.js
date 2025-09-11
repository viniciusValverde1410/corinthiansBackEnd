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

    async update(id, managerTeamData) {
        const updatedManagerTeam = await prisma.managerTeam.update({
            where: { id: Number(id) },
            data: managerTeamData,
        });
        return updatedManagerTeam;
    }

    async delete(id) {
        await prisma.managerTeam.delete({
            where: { id: Number(id) },
        });
        return;
    }
}

export default new managerTeamModel();
