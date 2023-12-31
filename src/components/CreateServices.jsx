"use client";

import { useRouter } from "next/navigation";

const CreateServices = () => {
    const router = useRouter();
    //Convert title into slug
    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$&/g, "");
    const handleServices = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const short_desc = e.target.short_Desc.value;
        const desc = e.target.desc.value;
        const serviceImg = e.target.postImg.value;
        const data = {
            title,
            slug: slugify(title),
            short_desc,
            desc,
            serviceImg,
        };
        try {
            const response = await fetch("/api/services", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (result.msg === "success") {
                router.push("/dashboard");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <div>
            <form onSubmit={handleServices} className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="title" className="font-semibold">
                        Service Title:
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="border border-black px-3 py-2 rounded-lg"
                        placeholder="Service title"
                    />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="short_Desc" className="font-semibold">
                        Short Desc:
                    </label>
                    <textarea
                        name="short_Desc"
                        id="short_Desc"
                        cols="30"
                        rows="2"
                        className="border border-black px-3 py-2 rounded-lg w-full"
                        placeholder="Short Desc"
                    ></textarea>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="desc" className="font-semibold">
                        Desc:
                    </label>
                    <textarea
                        name="desc"
                        id="desc"
                        cols="30"
                        rows="5"
                        className="border border-black px-3 py-2 rounded-lg w-full"
                        placeholder="Your Content"
                    ></textarea>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="postImg" className="font-semibold">
                        Service Image:
                    </label>
                    <input
                        type="text"
                        name="postImg"
                        id="postImg"
                        className="border border-black px-3 py-2 rounded-lg"
                        placeholder="Post Image CDN"
                    />
                </div>
                <input
                    type="submit"
                    value="Post"
                    className="text-xl font-semibold max-w-max bg-purple-400 px-5 py-2 rounded-lg text-white cursor-pointer"
                />
            </form>
        </div>
    );
};

export default CreateServices;
