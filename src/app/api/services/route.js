import { NextResponse } from "next/server";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
export async function POST(req, res) {
    try {
        const body = await req.json();
        const services = await prisma.services.create({
            data: body,
        });
        return NextResponse.json({ msg: "success", services }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}

export async function GET(req, res) {
    try {
        const services = await prisma.services.findMany();
        return NextResponse.json({ msg: "success", services });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
