import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
export async function GET(req, { params }) {
    const { slug } = params;
    try {
        const posts = await prisma.posts.update({
            where: { slug },
            data: {
                count: { increment: 1 },
            },
            include: {
                users: true,
            },
        });
        return NextResponse.json({ msg: "success", posts });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
