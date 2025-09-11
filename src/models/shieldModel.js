import prisma from "../../prisma/prisma.js";

class shieldModel {
    async findAll() {
        const shields = await prisma.shields.findMany({
        });

        return shields;
    }
}

export default new shieldModel();