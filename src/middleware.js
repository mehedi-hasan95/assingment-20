import { CheckCookieAuth } from "./utils/CheckCookieAuth";

export async function middleware(req, res) {
    return CheckCookieAuth(req);
}
