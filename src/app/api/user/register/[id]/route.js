import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(req, { params }) {
    const { id } = params;
    console.log(params);
    try {
        const body = await req.json();
        console.log(body.firstName);
        const register = await prisma.users.update({
            where: {
                id,
            },
            data: {
                firstName: firstName,
            },
        });
        return NextResponse.json({ msg: "success", register });
    } catch (error) {
        return NextResponse.json({ msg: "faill", error });
    }
}
