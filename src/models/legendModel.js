import prisma from "../../prisma/prisma.js";

class legendModel {
    async findAll() {
        const legends = await prisma.legends.findMany({
        });

        return legends;
    }

    async findById(id) {
        const legend = await prisma.legends.findUnique({
            where: { id: Number(id) },
        });
        return legend;
    }
}

export default new legendModel();