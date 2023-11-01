"use client";
const CreatePost = () => {
    //Convert title into slug
    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$&/g, "");
    const handlePost = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const short_Desc = e.target.short_Desc.value;
        const desc = e.target.desc.value;
        const postImg = e.target.postImg.value;
        const data = { title, slug: slugify(title), short_Desc, desc, postImg };
        console.log(data);
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
                        Post Image:
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

export default CreatePost;
