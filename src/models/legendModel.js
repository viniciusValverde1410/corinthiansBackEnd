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

    async create(legendData) {
        const newLegend = await prisma.legends.create({
            data: legendData,
        });
        return newLegend;
    }
}

export default new legendModel();