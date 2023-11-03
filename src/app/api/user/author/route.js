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

export async function PUT(req, res) {
    try {
        let { searchParams } = new URL(req.url);
        let blogID = searchParams.get("id");
        const body = await req.json();
        const posts = await prisma.posts.update({
            where: {
                id: parseInt(blogID),
            },
            data: body,
        });
        return NextResponse.json({ msg: "success", posts });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
