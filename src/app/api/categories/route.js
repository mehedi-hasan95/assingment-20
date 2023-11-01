import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
export async function POST(req, res) {
    try {
        const body = await req.json();
        const categories = await prisma.categories.create({
            data: body,
        });
        return NextResponse.json(
            { msg: "success", categories },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function GET(req, res) {
    try {
        const categories = await prisma.categories.findMany();
        return NextResponse.json({ msg: "success", categories });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
