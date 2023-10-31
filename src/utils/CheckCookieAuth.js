import { NextResponse } from "next/server";
import { JWTVerify } from "./JWTHelper";

export async function CheckCookieAuth(req) {
    try {
        let token = req.cookies.get("token");
        let payload = await JWTVerify(token["value"]);
        const requestHeader = new Headers(req.headers);
        requestHeader.set("email", payload["email"]);
        requestHeader.set("id", payload["id"]);
        requestHeader.set("firstName", payload["firstName"]);
        return NextResponse.next({ request: { headers: requestHeader } });
    } catch (e) {
        return NextResponse.redirect(new URL("/user/login", req.url));
    }
}
// Which page user can't visit without login
