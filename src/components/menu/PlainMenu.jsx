import { HomeIcon } from "lucide-react";
import Link from "next/link";

const PlainMenu = () => {
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
                <Link href="/" className="flex gap-3 text-2xl font-semibold">
                    <HomeIcon size={30} /> Back to Home
                </Link>
            </div>
        </div>
    );
};

export default PlainMenu;
