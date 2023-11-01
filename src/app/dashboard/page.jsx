import { headers } from "next/headers";

const page = () => {
    const headersList = headers();
    const firstName = headersList.get("firstName");
    return (
        <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
                Wellcome <span className="titleBg">{firstName}</span>
            </h2>
        </div>
    );
};

export default page;
