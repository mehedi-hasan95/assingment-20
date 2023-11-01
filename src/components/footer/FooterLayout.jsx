"use client";

import { usePathname } from "next/navigation";
import PlainFooter from "./PlainFooter";
import MainFooter from "./MainFooter";

const FooterLayout = () => {
    const pathName = usePathname();
    return (
        <div>
            {pathName === "/user/login" || pathName === "/user/register" ? (
                <PlainFooter />
            ) : (
                <MainFooter />
            )}
        </div>
    );
};

export default FooterLayout;
