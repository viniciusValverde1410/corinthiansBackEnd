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

    async update(id, legendData) {
        const updatedLegend = await prisma.legends.update({
            where: { id: Number(id) },
            data: legendData,
        });
        return updatedLegend;
    }
}

export default new legendModel();