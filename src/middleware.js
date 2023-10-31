import { CheckCookieAuth } from "./utils/CheckCookieAuth";

export async function middleware(req, res) {
    if (req.nextUrl.pathname.startsWith("/dashboard")) {
        return CheckCookieAuth(req);
    }
    // return CheckCookieAuth(req);
}
