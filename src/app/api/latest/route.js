import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
export async function GET(req, res) {
    try {
        const posts = await prisma.posts.findMany({
            take: 5,
            orderBy: {
                id: "desc",
            },
            include: {
                categories: true,
                users: true,
            },
        });
        return NextResponse.json({ msg: "success", posts });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
