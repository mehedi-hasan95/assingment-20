import MainMenu from "./MainMenu";
import { headers } from "next/headers";
const MenuLayout = () => {
    const headersList = headers();
    const firstName = headersList.get("firstName");
    return (
        <div>
            <MainMenu firstName={firstName} />
        </div>
    );
};

export default MenuLayout;
