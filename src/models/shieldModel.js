import prisma from "../../prisma/prisma.js";

class shieldModel {
    async findAll() {
        const shields = await prisma.shields.findMany({
        });

        return shields;
    }

    async findById(id) {
        const shield = await prisma.shields.findUnique({
            where: { id: Number(id) },
        });
        return shield;
    }

    async create(shieldData) {
        const newShield = await prisma.shields.create({
            data: shieldData,
        });
        return newShield;
    }

    async update(id, shieldData) {
        const updatedShield = await prisma.shields.update({
            where: { id: Number(id) },
            data: shieldData,
        });
        return updatedShield;
    }

    async delete(id) {
        const deletedShield = await prisma.shields.delete({
            where: { id: Number(id) },
        });

        
    }

}

export default new shieldModel();