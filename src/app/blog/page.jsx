import Post from "@/components/Post";
import MainMenu from "@/components/menu/MainMenu";

const BlogPage = () => {
    return (
        <div>
            <MainMenu />
            <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Post />
            </div>
        </div>
    );
};

export default BlogPage;
