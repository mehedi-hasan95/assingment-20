"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PlainMenu = () => {
    const pathName = usePathname();
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center">
                <Link
                    href="/"
                    aria-label="Back to homepage"
                    className="flex items-center p-2"
                >
                    <h2 className="text-2xl font-bold">Logo</h2>
                </Link>
                <div className="flex">
                    <Link
                        href="/"
                        className={`flex items-center px-4 -mb-1 capitalize ${
                            pathName === "/" ? "text-blue-600 font-bold" : ""
                        }`}
                    >
                        Home
                    </Link>
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
                </div>
            </div>
        </div>
    );
};

export default PlainMenu;
