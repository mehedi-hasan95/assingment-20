import MainMenu from "@/components/menu/MainMenu";
import { headers } from "next/headers";

export default function MainLayout({ children }) {
    const headersList = headers();
    const firstName = headersList.get("firstName");
    console.log(firstName);
    return (
        <div>
            <MainMenu firstName={firstName} />
            {children}
        </div>
    );
}
