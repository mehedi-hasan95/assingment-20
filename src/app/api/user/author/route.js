import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
export async function DELETE(req, res) {
    let { searchParams } = new URL(req.url);
    let blogID = searchParams.get("id");
    try {
        const posts = await prisma.posts.delete({
            where: {
                id: parseInt(blogID),
            },
        });
        return NextResponse.json({ msg: "success", posts });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
