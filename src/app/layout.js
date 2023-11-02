import { Inter } from "next/font/google";
import "./globals.css";
import FooterLayout from "@/components/footer/FooterLayout";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={
                    (inter.className, "flex flex-col justify-between h-screen")
                }
            >
                <NextTopLoader
                    color="#2563EB"
                    height={3}
                    speed={200}
                    shadow="0 0 10px #2299DD,0 0 5px #2299DD"
                />
                {children}
                <FooterLayout />
            </body>
        </html>
    );
}
