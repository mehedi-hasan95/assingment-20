"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PlainMenu = () => {
    const pathName = usePathname();
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center">
                <Link
                    href="/"
                    className="flex justify-center space-x-3 lg:justify-start text-xl items-center"
                >
                    <Image
                        src="/logo.svg"
                        alt=""
                        height={500}
                        width={500}
                        className="h-10 w-10"
                    />
                    <h2>Cultura</h2>
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
