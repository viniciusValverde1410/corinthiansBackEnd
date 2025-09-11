import prisma from "../../prisma/prisma.js";

class shieldModel {
    async findAll() {
        const shields = await prisma.shields.findMany({
        });

        return shields;
    }

    async findById(id) {
        const shield = await prisma.shields.findUnique({
            where: { id: parseInt(id) },
        });
        return shield;
    }

    async create(shieldData) {
        const newShield = await prisma.shields.create({
            data: shieldData,
        });
        return newShield;
    }
}

export default new shieldModel();