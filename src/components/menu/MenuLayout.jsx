"use client";

import { usePathname } from "next/navigation";
import PlainMenu from "./PlainMenu";
import MainMenu from "./MainMenu";

const MenuLayout = () => {
    const pathName = usePathname();
    return (
        <div>
            {pathName === "/login" || pathName === "/register" ? (
                <PlainMenu />
            ) : (
                <MainMenu />
            )}
        </div>
    );
};

export default MenuLayout;
