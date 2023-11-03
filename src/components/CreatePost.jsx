"use client";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CreatePost = (params) => {
    const [loading, setLoading] = useState(false);
    const [catData, setCatData] = useState([]);
    useEffect(() => {
        fetch("/api/categories")
            .then((response) => response.json())
            .then((data) => setCatData(data));
    }, []);
    const router = useRouter();
    //Convert title into slug
    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$&/g, "");
    // Featured Post
    const [featured, setFeatured] = useState(false);
    const toggleOption = () => {
        setFeatured(!featured);
    };
    const handlePost = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const short_desc = e.target.short_Desc.value;
        const desc = e.target.desc.value;
        const postImg = e.target.postImg.value;
        const cat = e.target.cat.value;
        const data = {
            title,
            slug: slugify(title),
            short_desc,
            desc,
            postImg,
            cat: parseInt(cat),
            featured,
            userId: parseInt(params.id),
        };
        try {
            setLoading(true);
            const response = await fetch("/api/blogs", {
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
            <form onSubmit={handlePost} className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="title" className="font-semibold">
                        Post Title:
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="border border-black px-3 py-2 rounded-lg"
                        placeholder="Post title"
                        required
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
                        required
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
                        required
                    ></textarea>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="postImg" className="font-semibold">
                        Post Image:
                    </label>
                    <input
                        type="text"
                        name="postImg"
                        id="postImg"
                        className="border border-black px-3 py-2 rounded-lg"
                        placeholder="Post Image CDN"
                        required
                    />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label for="cat">Choose a Category:</label>

                    <select
                        name="cat"
                        id="cat"
                        className="border border-black px-3 py-2 rounded-lg w-full"
                    >
                        {catData?.categories?.map((item) => (
                            <option
                                key={item.id}
                                value={item.id}
                                className="py-3"
                            >
                                {item.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col gap-y-2">
                    <label className="font-semibold">Is Featured?</label>
                    <div>
                        <span
                            onClick={toggleOption}
                            className={`px-4 py-2 cursor-pointer rounded-l-md bg-gray-300 ${
                                featured === false ? "bg-violet-300" : ""
                            }`}
                        >
                            No
                        </span>
                        <span
                            onClick={toggleOption}
                            className={`px-4 py-2 cursor-pointer rounded-r-md bg-gray-300 ${
                                featured === true ? "bg-violet-300" : ""
                            }`}
                        >
                            Yes
                        </span>
                    </div>
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
                        value="Post"
                        className="text-xl font-semibold max-w-max bg-purple-400 px-5 py-2 rounded-lg text-white cursor-pointer mt-5"
                    />
                )}
            </form>
        </div>
    );
};

export default CreatePost;
