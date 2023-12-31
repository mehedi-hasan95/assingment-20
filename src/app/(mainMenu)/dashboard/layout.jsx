import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const DashboardLayout = ({ children }) => {
    const headersList = headers();
    const firstName = headersList.get("firstName");
    if (firstName === "0") {
        redirect("/user/login");
    }
    return (
        <div>
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
                    <Link
                        href="/dashboard/author-posts"
                        className="bg-slate-200 px-3 py-2 max-w-max "
                    >
                        Author Posts
                    </Link>
                </div>
                <div className="w-2/3 py-10 px-2">{children}</div>
            </div>
        </div>
    );
};

export default DashboardLayout;
