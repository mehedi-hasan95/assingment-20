"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UpdatePost = ({ isOpen, onClose, children, selectedBlog }) => {
    const router = useRouter();
    const [postTitle, setPostTitle] = useState(selectedBlog.title);
    const [postShort, setPostShort] = useState(selectedBlog.short_desc);
    const [postDesc, setPostDesc] = useState(selectedBlog.desc);
    const [postImg, setPostImg] = useState(selectedBlog.postImg);
    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$&/g, "");
    // Marge this
    const data = {
        title: postTitle,
        slug: slugify(postTitle),
        short_desc: postShort,
        desc: postDesc,
        postImg: postImg,
    };
    if (!isOpen) return null;
    // API Call
    const updatePostData = async (e) => {
        try {
            const response = await fetch(
                `/api/user/author?id=${selectedBlog.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data), // or 'PUT'
                }
            );

            const result = await response.json();
            if (result.msg === "success") {
                router.push("/dashboard");
                router.refresh;
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-4 z-10 rounded-lg md:w-[720px]">
                <div className="flex flex-col w-full gap-5">
                    <input
                        type="text"
                        name="text"
                        id=""
                        className="border border-black px-3 py-2 rounded-lg w-full"
                        value={postTitle}
                        onChange={(e) => setPostTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        name="short_Desc"
                        id=""
                        className="border border-black px-3 py-2 rounded-lg w-full"
                        value={postShort}
                        onChange={(e) => setPostShort(e.target.value)}
                    />
                    <textarea
                        name="desc"
                        id=""
                        cols="30"
                        rows="10"
                        className="border border-black px-3 py-2 rounded-lg w-full"
                        value={postDesc}
                        onChange={(e) => setPostDesc(e.target.value)}
                    ></textarea>
                    <input
                        type="text"
                        name="postImg"
                        id=""
                        className="border border-black px-3 py-2 rounded-lg w-full"
                        value={postImg}
                        onChange={(e) => setPostImg(e.target.value)}
                    />
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={updatePostData}
                        className="bg-red-500 text-white p-2 mt-4 rounded-md"
                    >
                        Update
                    </button>
                    <button
                        className="bg-red-500 text-white p-2 mt-4 rounded-md"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdatePost;
