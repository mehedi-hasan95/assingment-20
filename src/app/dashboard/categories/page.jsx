const page = () => {
    return (
        <div>
            <form className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="catImg" className="font-semibold">
                        Category Image:
                    </label>
                    <input
                        type="text"
                        name="catImg"
                        id="catImg"
                        className="border border-black px-3 py-2 rounded-lg"
                        placeholder="Image CDN"
                    />
                </div>
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="title" className="font-semibold">
                        Category Image:
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="border border-black px-3 py-2 rounded-lg"
                        placeholder="Category Name"
                    />
                </div>
                <input
                    type="submit"
                    value="Create"
                    className="text-xl font-semibold max-w-max bg-purple-400 px-5 py-2 rounded-lg text-white cursor-pointer"
                />
            </form>
        </div>
    );
};

export default page;
