"use client";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateCategories = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$&/g, "");
    const handleCategories = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const catImg = e.target.catImg.value;
        const data = { title, catImg, slug: slugify(title) };
        console.log(data);
        try {
            setLoading(true);
            const response = await fetch("/api/categories", {
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
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <form onSubmit={handleCategories} className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="catImg" className="font-semibold">
                        Category Image:
                    </label>
                    <input
                        type="text"
                        name="catImg"
                        id="catImg"
                        className="border border-black px-3 py-2 rounded-lg"
                        placeholder="Category Image"
                        required
                    />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="title" className="font-semibold">
                        Category Name:
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="border border-black px-3 py-2 rounded-lg"
                        placeholder="Category Name"
                        required
                    />
                </div>
                {loading ? (
                    <button
                        disabled
                        className="text-xl font-semibold max-w-max bg-purple-400 px-5 py-2 rounded-lg text-white cursor-pointer disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        Creating...{" "}
                        <span className="animate-spin">
                            <Loader2 size={24} />
                        </span>
                    </button>
                ) : (
                    <input
                        type="submit"
                        value="Create"
                        className="text-xl font-semibold max-w-max bg-purple-400 px-5 py-2 rounded-lg text-white cursor-pointer"
                    />
                )}
            </form>
        </div>
    );
};

export default CreateCategories;
