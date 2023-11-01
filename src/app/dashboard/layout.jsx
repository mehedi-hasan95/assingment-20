import MainMenu from "@/components/menu/MainMenu";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <MainMenu />
            <div className="container mx-auto p-4 md:flex">
                <div className="w-1/3 flex gap-5 flex-col bg py-10 px-2">
                    <Link
                        href="/dashboard/categories"
                        className="bg-slate-200 px-3 py-2 max-w-max "
                    >
                        Create Categories
                    </Link>
                    <Link
                        href="/dashboard/posts"
                        className="bg-slate-200 px-3 py-2 max-w-max "
                    >
                        Create Posts
                    </Link>
                    <Link
                        href="/dashboard/services"
                        className="bg-slate-200 px-3 py-2 max-w-max "
                    >
                        Create Services
                    </Link>
                </div>
                <div className="w-2/3 py-10 px-2">{children}</div>
            </div>
        </div>
    );
};

export default DashboardLayout;
