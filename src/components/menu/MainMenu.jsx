"use client";
import Link from "next/link";
import menus from "@/utils/MenuItems.json";
import { AlignCenter, X } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
const MainMenu = (props) => {
    const [open, setOpen] = useState(false);
    const pathName = usePathname();
    const router = useRouter();
    // LogOut functionality
    const logOut = async () => {
        try {
            const response = await fetch("/api/user/login", {
                method: "GET",
            });

            const result = await response.json();
            if (result.status === "success") {
                router.replace("/");
                router.refresh();
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <div className="bg">
            <header className="container mx-auto p-4 border-b-2 border-purple-100">
                <div className="flex justify-between h-16 items-center">
                    <Link
                        href="/"
                        aria-label="Back to homepage"
                        className="flex items-center p-2"
                    >
                        <h2 className="text-2xl font-bold">Logo</h2>
                    </Link>
                    <ul className="items-stretch hidden space-x-3 md:flex">
                        {menus.map((item) => (
                            <li key={item.id} className="flex">
                                <Link
                                    href={item.slug}
                                    className={`flex items-center px-4 -mb-1 capitalize ${
                                        pathName === item.slug
                                            ? "text-blue-600 font-bold"
                                            : ""
                                    }`}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                        <li className="flex">
                            <Link
                                href="/dashboard"
                                className={`flex items-center px-4 -mb-1 capitalize ${
                                    pathName === "/dashboard"
                                        ? "text-blue-600 font-bold"
                                        : ""
                                }`}
                            >
                                dashboard
                            </Link>
                        </li>
                        <li className="flex">
                            {props.firstName !== null ? (
                                <button
                                    className="flex items-center px-4 -mb-1 capitalize"
                                    onClick={logOut}
                                >
                                    Log Out
                                </button>
                            ) : (
                                <Link
                                    href="/user/login"
                                    className={`flex items-center px-4 -mb-1 capitalize ${
                                        pathName === "/user/login"
                                            ? "text-blue-600 font-bold"
                                            : ""
                                    }`}
                                >
                                    login
                                </Link>
                            )}
                        </li>
                        {props.firstName === null ? (
                            <li className="flex">
                                <Link
                                    href="/user/register"
                                    className={`flex items-center px-4 -mb-1 capitalize ${
                                        pathName === "/user/register"
                                            ? "text-blue-600 font-bold"
                                            : ""
                                    }`}
                                >
                                    register
                                </Link>
                            </li>
                        ) : (
                            ""
                        )}
                    </ul>

                    <div
                        onClick={() => setOpen(!open)}
                        className="md:hidden cursor-pointer"
                    >
                        {open ? <X size={32} /> : <AlignCenter size={32} />}
                    </div>
                </div>
                {open && (
                    <ul className="items-stretch flex flex-col space-y-3 md:hidden h-screen">
                        {menus.map((item) => (
                            <li key={item.id} className="flex">
                                <Link
                                    onClick={() => setOpen(false)}
                                    href={item.slug}
                                    className={`flex items-center px-4 -mb-1 capitalize ${
                                        pathName === item.slug
                                            ? "text-blue-600 font-bold"
                                            : ""
                                    }`}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </header>
        </div>
    );
};

export default MainMenu;
