import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function GET(req, res) {
    try {
        const posts = await prisma.posts.findMany({
            where: {
                featured: true,
            },
            take: 3,
            orderBy: {
                id: "desc",
            },
            include: {
                users: true,
                categories: true,
            },
        });
        return NextResponse.json({ msg: "success", posts });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
