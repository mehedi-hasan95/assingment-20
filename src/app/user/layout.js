import PlainMenu from "@/components/menu/PlainMenu";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Fragment } from "react";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function userLayout({ children }) {
    const headersList = headers();
    const firstName = headersList.get("firstName");
    if (firstName !== "0") {
        redirect("/");
    }
    return (
        <Fragment>
            <PlainMenu />
            {children}
        </Fragment>
    );
}
