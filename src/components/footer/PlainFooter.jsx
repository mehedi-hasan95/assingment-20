import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const PlainFooter = () => {
    return (
        <footer className="dark:bg-gray-800 dark:text-gray-50">
            <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
                <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                    <li>Shop</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
                <div className="flex flex-col justify-center pt-6 lg:pt-0">
                    <div className="flex justify-center space-x-4">
                        <Link
                            href="#"
                            title="Instagram"
                            className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
                        >
                            <Instagram size={24} />
                        </Link>
                        <Link
                            href="#"
                            title="Facebook"
                            className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
                        >
                            <Facebook size={24} />
                        </Link>
                        <Link
                            href="#"
                            title="Twitter"
                            className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900"
                        >
                            <Twitter size={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default PlainFooter;
